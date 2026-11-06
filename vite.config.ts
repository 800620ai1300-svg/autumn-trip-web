import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/autumn-trip-web/', // 👈 強制設定網頁基礎路徑
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': '/src', // 👈 換成最單純的絕對路徑對應，避免 __dirname 出錯
    },
  },
});
