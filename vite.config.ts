/*
 * @Date: 2024-09-07 21:25:31
 * @Description: 功能：
 */
import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'
import vercel from 'vite-plugin-vercel';
export default defineConfig({
  server: {
    port: process.env.PORT as unknown as number,
  },
  // plugins: [react()],
  plugins: [react(),vercel()],
  resolve: {
    alias: [
      {
        find: 'src/',
        replacement: path.resolve(__dirname, 'src') + '/',
      },
      {
        find: /^~/,
        replacement: '',
      },
    ],
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: {
          // ant design 4.17 版本会有 less 报错，添加这个处理，之后版本看是否需要移除该项
          // 相关链接：https://githubmemory.com/repo/ant-design/ant-design-pro/issues/9082
          'root-entry-name': 'default',
        },
      },
    },
  },
})
