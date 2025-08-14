// Adapter pour utiliser @forge42/seo-tools avec React Router v7
import { generateRemixSitemap } from "@forge42/seo-tools/remix/sitemap";
import { generateRobotsTxt } from "@forge42/seo-tools/robots";

// Type adapter pour convertir les routes RR7 vers le format Remix
interface ReactRouterRoute {
  path?: string;
  id: string;
  module?: any;
  children?: ReactRouterRoute[];
}

interface RemixRouteManifest {
  [key: string]: {
    id: string;
    parentId?: string;
    path?: string;
    module: any;
  };
}

// Convertit les routes React Router v7 vers le format Remix
function convertRoutesToRemixFormat(routes: ReactRouterRoute[]): RemixRouteManifest {
  const manifest: RemixRouteManifest = {};
  
  function processRoute(route: ReactRouterRoute, parentId?: string) {
    manifest[route.id] = {
      id: route.id,
      parentId,
      path: route.path,
      module: route.module || {},
    };
    
    if (route.children) {
      route.children.forEach(child => processRoute(child, route.id));
    }
  }
  
  routes.forEach(route => processRoute(route));
  return manifest;
}

// Routes statiques pour React Router v7 (fallback si import dynamique échoue)
const staticRoutes: RemixRouteManifest = {
  "root": {
    id: "root",
    path: "",
    module: {},
  },
  "routes/home": {
    id: "routes/home",
    parentId: "root",
    path: "/",
    module: {},
  },
  "routes/services": {
    id: "routes/services",
    parentId: "root", 
    path: "/services",
    module: {},
  },
  "routes/about": {
    id: "routes/about",
    parentId: "root",
    path: "/about", 
    module: {},
  },
  "routes/contact": {
    id: "routes/contact",
    parentId: "root",
    path: "/contact",
    module: {},
  },
  "routes/faq": {
    id: "routes/faq",
    parentId: "root",
    path: "/faq",
    module: {},
  },
  "routes/pricing": {
    id: "routes/pricing", 
    parentId: "root",
    path: "/pricing",
    module: {},
  },
  "routes/terms": {
    id: "routes/terms",
    parentId: "root",
    path: "/terms",
    module: {},
  },
  "routes/privacy": {
    id: "routes/privacy",
    parentId: "root", 
    path: "/privacy",
    module: {},
  },
  "routes/legal": {
    id: "routes/legal",
    parentId: "root",
    path: "/legal", 
    module: {},
  },
};

interface SitemapConfig {
  domain: string;
  ignore?: string[];
  configure?: Record<string, {
    priority?: number;
    changefreq?: string;
  }>;
}

export async function generateSitemapWithForge42(config: SitemapConfig): Promise<string> {
  let routes: RemixRouteManifest;
  
  try {
    // Essayer d'importer les routes dynamiquement
    const { routes: dynamicRoutes } = await import("virtual:react-router/server-build");
    routes = Array.isArray(dynamicRoutes) 
      ? convertRoutesToRemixFormat(dynamicRoutes)
      : staticRoutes;
  } catch {
    // Fallback vers les routes statiques
    routes = staticRoutes;
  }

  return await generateRemixSitemap({
    domain: config.domain,
    routes,
    ignore: config.ignore || [],
    // Note: configure n'est pas directement supporté par generateRemixSitemap
    // mais on peut l'implémenter via des handles dans les routes
  });
}

export async function generateRobotsTxtWithForge42(origin: string): Promise<string> {
  return generateRobotsTxt([
    {
      userAgent: "*",
      allow: [
        "/",
        "/services", 
        "/about",
        "/contact",
        "/faq",
        "/pricing",
        "/terms",
        "/privacy",
        "/legal",
      ],
      disallow: [
        "/admin/",
        "/api/",
        "/_/",
        "/build/",
        "/node_modules/",
        "/*.json$",
        "/temp/",
        "/cache/",
      ],
      crawlDelay: 1,
      sitemap: [
        `${origin}/sitemap-index.xml`,
        `${origin}/sitemap.xml`, 
        `${origin}/sitemap-ai.xml`,
      ],
    },
    // Bloquer les bots IA agressifs
    {
      userAgent: "GPTBot",
      disallow: ["/"],
    },
    {
      userAgent: "ChatGPT-User", 
      disallow: ["/"],
    },
    {
      userAgent: "CCBot",
      disallow: ["/"],
    },
    {
      userAgent: "anthropic-ai",
      disallow: ["/"],
    },
    {
      userAgent: "Claude-Web",
      disallow: ["/"],
    },
    {
      userAgent: "PerplexityBot",
      disallow: ["/"],
    },
    {
      userAgent: "Applebot-Extended", 
      disallow: ["/"],
    },
    {
      userAgent: "FacebookBot",
      disallow: ["/"],
    },
  ]);
}