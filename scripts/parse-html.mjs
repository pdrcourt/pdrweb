import fs from 'fs';
import path from 'path';
import * as cheerio from 'cheerio';

const dataDir = path.join(process.cwd(), 'data');
const outputFile = path.join(dataDir, 'footer-data.json');

const files = fs.readdirSync(dataDir).filter(f => f.endsWith('.html'));

const parsedData = {};

// Clean text function to replace multiple spaces and special characters
function cleanString(str) {
  if (!str) return '';
  return str
    .replace(/\s+/g, ' ')
    .replace(/â€™/g, "'")
    .replace(/â€”/g, "-")
    .replace(/â€“/g, "-")
    .replace(/Ã—/g, "x")
    .trim();
}

files.forEach(file => {
  const html = fs.readFileSync(path.join(dataDir, file), 'utf8');
  const $ = cheerio.load(html);

  const title = cleanString($('h1.pagetitle').text()) || cleanString($('title').text());
  
  // Try to find the breadcrumbs
  const breadcrumbs = [];
  $('.breadcrumbs a, .breadcrumbs span').each((i, el) => {
    const text = cleanString($(el).text());
    if (text && text !== '-') breadcrumbs.push(text);
  });
  
  const sections = [];
  let currentSection = { heading: '', content: [] };

  // Parse all content-bearing sections
  $('section').each((index, sectionEl) => {
    const sectionId = $(sectionEl).attr('id') || '';
    const sectionClass = $(sectionEl).attr('class') || '';
    
    // Skip structural/navigation/widget sections
    if (
      sectionId === 'pagetitle' || 
      sectionId === 'cta' || 
      sectionClass.includes('mobnav') || 
      sectionId === 'footerbottom' || 
      sectionId === 'headertop'
    ) {
      return;
    }

    // Inside this section, traverse all text blocks in DOM order
    $(sectionEl).find('h1, h2, h3, h4, h5, h6, p, li, .boxed1, .boxed2, select option').each((i, el) => {
      const tagName = el.tagName.toLowerCase();
      const text = cleanString($(el).text());
      if (!text) return;

      // Ignore known UI noises
      const lowerText = text.toLowerCase();
      if (
        lowerText.includes('pro tip when you face') ||
        lowerText === 'personal details' ||
        lowerText === 'submit' ||
        lowerText === 'contact' ||
        lowerText === 'previous' ||
        lowerText === 'next' ||
        lowerText === 'home' ||
        lowerText === 'read' ||
        lowerText === 'write to us' ||
        lowerText === 'call us' ||
        lowerText.startsWith('tel/mobile') ||
        lowerText.includes('zoho form') ||
        lowerText.includes('select your contracts size')
      ) {
        return;
      }

      // Check if this element acts as a heading
      const isHeadingElement = 
        tagName === 'h1' || 
        tagName === 'h2' || 
        tagName === 'h3' || 
        tagName === 'h4' || 
        (tagName === 'h5' && text.length < 150) ||
        $(el).hasClass('boxed1') || 
        $(el).hasClass('boxed2');

      if (isHeadingElement) {
        if (currentSection.heading || currentSection.content.length > 0) {
          sections.push({ ...currentSection });
        }
        currentSection = { heading: text, content: [] };
      } else {
        // It's body text or list item
        if (tagName === 'li' || text.startsWith('•') || tagName === 'option') {
          const bulletText = text.startsWith('•') ? text : '• ' + text;
          // Avoid duplicate bullets
          if (!currentSection.content.includes(bulletText)) {
            currentSection.content.push(bulletText);
          }
        } else {
          if (!currentSection.content.includes(text)) {
            currentSection.content.push(text);
          }
        }
      }
    });
  });
  
  if (currentSection.heading || currentSection.content.length > 0) {
    sections.push({ ...currentSection });
  }
  
  const routeName = file.replace('.html', '');
  
  parsedData[routeName] = {
    title,
    breadcrumbs: breadcrumbs.join(' / '),
    sections: sections.filter(s => s.heading || s.content.length > 0)
  };
});

fs.writeFileSync(outputFile, JSON.stringify(parsedData, null, 2));
console.log('Successfully regenerated footer-data.json with', Object.keys(parsedData).length, 'pages.');
