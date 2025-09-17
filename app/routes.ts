import { index, layout, type RouteConfig, route } from "@react-router/dev/routes";

export default [
  route("sitemap.xml", "routes/sitemap.xml.ts"),
  layout("routes/layout.tsx", [
    index("routes/home.tsx"),
    // route("portfolio", "routes/portfolio.tsx"),
    // route("portfolio/:id", "routes/portfolio.$id.tsx"),
    route("services", "routes/services.tsx"),
    route("app-mobile-reunion", "routes/app-mobile-reunion.tsx"),
    route("about", "routes/about.tsx"),
    route("pricing", "routes/pricing.tsx"),
    route("faq", "routes/faq.tsx"),
    route("contact", "routes/contact.tsx"),
    route("legal", "routes/legal.tsx"),
    route("privacy", "routes/privacy.tsx"),
    route("terms", "routes/terms.tsx"),
    route("tarifs-salon-coiffure", "routes/tarifs-salon-coiffure.tsx"),
    route("tarifs-app-restaurant", "routes/tarifs-app-restaurant.tsx"),
    route("*", "routes/404.tsx"),
  ]),
] satisfies RouteConfig;
