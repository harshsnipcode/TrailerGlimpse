import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // or vue(), or nothing for vanilla
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    react(),       // or vue()
    tailwindcss(), // ← Add this line
  ],
});
