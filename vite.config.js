import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/ppeupppeup', // GitHub Pages 경로 = 리포지토리명
});