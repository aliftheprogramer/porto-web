import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    // Optimize build output
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    // Reduce chunk size
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          ui: ['./src/components/ui/index.js']
        }
      }
    },
    // Enable gzip compression
    reportCompressedSize: false,
    // Optimize images
    assetsInlineLimit: 4096,
  },
  // Optimize dev server
  server: {
    hmr: {
      overlay: false
    }
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom']
  }
})