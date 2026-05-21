import { allFooterPages } from './lib/footer-content';

const pages = allFooterPages();
pages.forEach(p => {
  console.log(`\n\n--- PAGE: ${p.title} (${p.route}) ---`);
  console.log(`Paragraphs count: ${p.paragraphs.length}`);
  if (p.paragraphs.length > 0) {
    console.log('Sample paragraphs:');
    p.paragraphs.slice(0, 3).forEach(para => console.log(`  - ${para.substring(0, 80)}...`));
  }
  
  if (p.paragraphs.length > 6) {
    console.log('EXTRA paragraphs (6-12):');
    p.paragraphs.slice(6, 12).forEach(para => console.log(`  - ${para.substring(0, 80)}...`));
  }
});
