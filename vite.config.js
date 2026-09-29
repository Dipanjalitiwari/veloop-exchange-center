// import react from '@vitejs/plugin-react'
// import { defineConfig } from 'vite'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // ◄— यह नया प्लगइन इम्पोर्ट करें

// https://vite.dev
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // ◄— इसे यहाँ जोड़ें
  ],
})