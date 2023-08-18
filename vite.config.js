import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { DJANGO_SERVER } from "./src/constants/endPoints";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: '/cdpc/',
    server: {
        proxy: {
            "/server": {
                target: DJANGO_SERVER,
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/server/, ""),
                secure: false,
            },
            "/static": {
                target: DJANGO_SERVER,
                changeOrigin: true,
            },
        },
    },

});
