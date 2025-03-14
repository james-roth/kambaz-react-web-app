import { defineConfig, loadEnv } from 'vite'
import { nodePolyfills } from 'vite-plugin-node-polyfills';
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({plugins: [
    react(), 
    nodePolyfills(),
  ],
})


// // https://vitejs.dev/config/
// export default defineConfig(({ mode }) => {
//   const env = loadEnv(mode, process.cwd(), '');
//   return {
//     define: {
//       'process.env.REACT_APP_REMOTE_SERVER': JSON.stringify(env.REACT_APP_REMOTE_SERVER)
//     },
//     plugins: [react(), nodePolyfills()],
//   }
// })