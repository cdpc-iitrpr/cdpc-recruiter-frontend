import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: '/cdpc/',
    server: {
        proxy: {
            "/server": {
                target: "http://localhost:8000",
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/server/, ""),
                secure: false,
            },
            "/static": {
                target: "http://localhost:8000/",
                changeOrigin: true,
            },
        },
    },

});
