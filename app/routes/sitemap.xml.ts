import { generateRemixSitemap } from "@forge42/seo-tools/remix/sitemap";
import { href } from "react-router";
import type { Route } from "./+types/sitemap.xml";

export const loader = async ({ request }: Route.LoaderArgs) => {
  const { routes } = await import("virtual:react-router/server-build");
  // 1) Domaine public prioritaire (configure en prod : SITE_URL=https://receptia.fr)
  const ENV_ORIGIN = import.meta.env.VITE_URL_ORIGIN;

  // 2) Sinon, déduis depuis les headers du proxy (Cloudflare/Pages/Reverse proxy)
  const url = new URL(request.url);
  const xfHost = request.headers.get("x-forwarded-host") ?? url.host;
  const xfProto = request.headers.get("x-forwarded-proto") ?? "https"; // par sécurité

  // 3) Nettoyage : supprime un éventuel port et force https
  const hostNoPort = xfHost.split(":")[0];
  const inferredOrigin = `${xfProto === "http" ? "https" : "https"}://${hostNoPort}`;

  // 4) Choix final : ENV d’abord, sinon inference
  const origin = ENV_ORIGIN ?? inferredOrigin;

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
