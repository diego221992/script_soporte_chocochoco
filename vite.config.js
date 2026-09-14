// filepath: c:\Users\leona\Desktop\apple\ejemplo-react\vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

export default defineConfig({
  plugins: [react()],
  server: {  
    host: true,
    port: 5174
 },
  base : '',
  define: {
    'process.env': process.env, // Pass environment variables to the client
  },
});