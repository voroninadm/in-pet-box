import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import { fileURLToPath, URL } from "url";

export default defineConfig({
    server: {
        hmr: {
            host: 'localhost',
        },
        host: true,
        port: '8080',
        hot: true
    },
    plugins: [
        laravel({
            input: 'resources/js/app.js',
            ssr: 'resources/js/ssr.js',
            refresh: true,
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
    ],
    resolve: {
        alias: {
            "@/*": fileURLToPath(new URL("resources/js/", import.meta.url)),
            "@assets": fileURLToPath(new URL("resources/assets/", import.meta.url)),
        },
    },
});
