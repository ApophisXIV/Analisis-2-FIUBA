import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

export default defineConfig({
    plugins: [svelte()],
    publicDir: "src/db/",
    base: "/Analisis-2-FIUBA/",
});
