import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
      },
      includeAssets: ['/icons/16.png', '/icons/180.png', '/icons/vite.svg'],
      manifest: {
        name: 'jazzchords',
        short_name: 'jc',
        description: 'A tool for training jazz harmonies and groove.',
        theme_color: '#ffffff',
        icons: [
          {
            src: '/icons/192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/icons/512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
});
