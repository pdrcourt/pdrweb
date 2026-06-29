import type { MetadataRoute } from "next";

const BASE_URL = "https://www.pdrcourt.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // Thank-you / confirmation pages and API routes carry no SEO value.
        disallow: ["/thankyou", "/api/"],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
