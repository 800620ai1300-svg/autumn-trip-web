import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/autumn-trip-web/', // 👈 確保有這行！
  plugins: [react(), tailwindcss()],
});
