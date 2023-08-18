import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { DJANGO_SERVER } from "./src/constants/endPoints";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: '/cdpc/recruiter_portal/',
    server: {
        proxy: {
            "/admin": {
                target: DJANGO_SERVER,
                changeOrigin: true,
                secure: false,
            },
            "/static": {
                target: DJANGO_SERVER,
                changeOrigin: true,
            },
        },
    },

});
