import { defineConfig } from 'vite';

export default defineConfig({
        base: "/greenwind",
        preview: {
                strictPort: true,
                host: '0.0.0.0',
                allowedHosts: true,
        },
        server: {
                strictPort: 443,
                host: '0.0.0.0',
                allowedHosts: true,
        },
});
