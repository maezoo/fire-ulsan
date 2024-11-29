import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
        // 글로벌 변수나 믹스인을 추가할 수 있습니다
        // 예시: additionalData: `@use "src/styles/variables.scss" as *;`,
      },
    },
  },
  base: '/portfolio-fire-ulsan/',
  build: {
    outDir: 'dist'
  }
})