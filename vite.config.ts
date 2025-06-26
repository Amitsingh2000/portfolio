import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  // ✅ Important for GitHub Pages deployment
  base: '/portfolio/',

  plugins: [react()],

  // ✅ Optional: exclude heavy or problematic dependencies from optimization
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
