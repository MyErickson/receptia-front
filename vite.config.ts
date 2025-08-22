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
        // Use function-based chunk splitting for React Router v7 compatibility
        manualChunks(id) {
          // Vendor chunk for node_modules
          if (id.includes("node_modules")) {
            // Separate chunks for large libraries
            if (id.includes("framer-motion")) {
              return "animations";
            }
            if (id.includes("react-i18next") || id.includes("i18next")) {
              return "i18n";
            }
            // Other vendor dependencies
            return "vendor";
          }
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
