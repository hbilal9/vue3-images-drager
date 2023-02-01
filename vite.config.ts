import { fileURLToPath, URL } from 'url'
import typescript2 from 'rollup-plugin-typescript2'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { format } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
    typescript2({
      check: false,
      include: ["src/components/*.vue"],
      tsconfigOverride: {
        compilerOptions: {
          sourceMap: true,
          declaration: true,
          declarationMap: true
        },
        exclude: [ "vite.config.ts", "main.ts" ]
      },
    })
  ],
  build: {
    cssCodeSplit: false,
    lib: {
      entry: "./src/DraggerPlugin.ts",
      formats: ['es', 'cjs'],
      name: "DraggerPlugin",
      fileName: (format) => (format === "es" ? "index.js" : "index.cjs")
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue"
        }
      }
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
