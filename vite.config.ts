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

  build: {
    rollupOptions: {
      output: {
        // Manual chunk splitting for better caching
        manualChunks: {
          // Core React libraries
          react: ["react", "react-dom"],

          // Animation libraries
          animations: ["framer-motion"],

          // Internationalization
          i18n: ["react-i18next", "i18next"],

          // Router and navigation
          router: ["react-router"],
        },
      },
    },

    // Enable advanced minification
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },

    // Optimize CSS
    cssCodeSplit: true,

    // Asset optimization
    assetsInlineLimit: 4096, // Inline assets smaller than 4kb

    // Report compressed size
    reportCompressedSize: true,
  },

  // Optimize for performance
  optimizeDeps: {
    include: ["react", "react-dom"],
    exclude: ["@react-router/dev"],
  },
});
