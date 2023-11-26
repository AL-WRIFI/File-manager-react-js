// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import node from 'vite-plugin-node';
// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [
//     react(),
//     node(),
//   ]
// })

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// import node from 'vite-plugin-node';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // node, // Assuming this plugin doesn't require a function call in the config
  ],
});
