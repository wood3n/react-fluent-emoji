import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

process.env.BROWSER = "chrome";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@/": path.resolve(__dirname, "./src")
    }
  },
  plugins: [
    react()
  ],
  css: {
    preprocessorOptions: {
      less: {
      },
    }
  },
  server: {
    open: true
  }
});
