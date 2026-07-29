import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import esbuild from 'esbuild'

// Some legacy CRA files (e.g. App.js) contain JSX but keep the .js extension.
// Vite/esbuild only auto-detect JSX for .jsx/.tsx by default, so those specific
// files are transformed explicitly here instead of overriding the loader globally
// (a global override breaks default handling for .jsx/.tsx files).
const jsxInJsFiles = [/src[\\/]App\.js$/]

export default defineConfig({
  plugins: [
    {
      name: 'jsx-in-js',
      enforce: 'pre',
      async transform(code, id) {
        if (!jsxInJsFiles.some((re) => re.test(id))) return null
        const result = await esbuild.transform(code, {
          loader: 'jsx',
          jsx: 'automatic',
          sourcefile: id,
        })
        return { code: result.code, map: result.map }
      },
    },
    react(),
  ],
  server: {
    port: 3001,
    host: true,
    open: false,
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
      },
    },
  },
})