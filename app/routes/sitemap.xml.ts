/** biome-ignore-all assist/source/organizeImports: <> */
import { generateRemixSitemap } from "@forge42/seo-tools/remix/sitemap";
import { href } from "react-router";
import type { Route } from "./+types/sitemap.xml";

export const loader = async ({ request }: Route.LoaderArgs) => {
	const { routes } = await import("virtual:react-router/server-build");
	const { origin } = new URL(request.url);
	const sitemap = await generateRemixSitemap({
		domain: origin,
		ignore: [href("/sitemap.xml")],
		// https://github.com/forge-42/seo-tools/issues/8
		routes,
	});

	return new Response(sitemap, {
		headers: {
			"Content-Type": "application/xml; charset=utf-8",
		},
	});
};
