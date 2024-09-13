import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://formandev.github.io/cooking-recipes/",
  plugins: [react()],
});
