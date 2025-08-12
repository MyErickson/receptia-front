import type { LoaderFunctionArgs } from "react-router";

const BASE_URL = "https://receptia.fr";

export async function loader(_: LoaderFunctionArgs) {
	const staticPages = [
		{ url: "", priority: 1.0, changefreq: "weekly" },
		{ url: "/services", priority: 0.9, changefreq: "monthly" },
		{ url: "/portfolio", priority: 0.8, changefreq: "weekly" },
		{ url: "/pricing", priority: 0.9, changefreq: "monthly" },
		{ url: "/about", priority: 0.6, changefreq: "yearly" },
		{ url: "/contact", priority: 0.8, changefreq: "monthly" },
		{ url: "/faq", priority: 0.7, changefreq: "monthly" },
	];

	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${staticPages
	.map(
		(page) => `  <url>
    <loc>${BASE_URL}${page.url}</loc>
    <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
    <xhtml:link rel="alternate" hreflang="fr" href="${BASE_URL}/fr${page.url}"/>
    <xhtml:link rel="alternate" hreflang="en" href="${BASE_URL}/en${page.url}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${BASE_URL}${page.url}"/>
  </url>`,
	)
	.join("\n")}
</urlset>`;

	return new Response(sitemap, {
		headers: {
			"Content-Type": "application/xml",
			"Cache-Control": "public, max-age=3600",
		},
	});
}
