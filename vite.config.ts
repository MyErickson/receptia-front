import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    tailwindcss(),
    reactRouter(),
    tsconfigPaths(),
    {
      name: "xml-mime-type",
      configureServer(server) {
        server.middlewares.use("/sitemap.xml", (_req, res, next) => {
          res.setHeader("Content-Type", "application/xml; charset=utf-8");
          next();
        });
      },
    },
  ],
});
