import { defineConfig } from "vite";
import path from 'path';

export default defineConfig({
    base: "/Portfolio",
    build: {
        minify: "terser",
    },
    resolve: {
        alias: {
          '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
        }
      },
})