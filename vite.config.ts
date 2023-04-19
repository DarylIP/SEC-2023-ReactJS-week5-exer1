import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/SEC-2023-ReactJS-week5-exer1/",
  server: {
    watch: {
      usePolling: true,
    },
  },
});
