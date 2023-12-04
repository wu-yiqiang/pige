import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import viteCompression from 'vite-plugin-compression'
import svgLoader from 'vite-svg-loader'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import { resolve } from 'path'
const pathResolve = (dir: string): string => {
  return resolve(__dirname, '.', dir)
}
export default ({ command, mode }) => {
  return defineConfig({
    resolve: {
      alias: {
        '@': pathResolve('./src/')
      }
    },
    plugins: [
      vue(),
      svgLoader(),
      createSvgIconsPlugin({
        // 指定需要缓存的图标文件夹
        iconDirs: [pathResolve('src/assets/icon/svg/')],
        // 指定symbolId格式
        symbolId: 'icon-[dir]-[name]'
      }),
      viteCompression({
        verbose: true,
        disable: false,
        threshold: 1025,
        algorithm: 'gzip',
        ext: '.gz'
      })
    ],
    esbuild: {
      drop: mode === 'production' ? ['console', 'debugger'] : []
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/style/index.scss";'
        }
      }
    },
    build: {
      // 最终构建的浏览器兼容目标
      target: 'es2015',
      // 是否自动注入module preload的polyfill
      polyfillModulePreload: false,
      // 指定混淆器
      minify: 'esbuild',
      // 启用css代码拆分
      cssCodeSplit: true,
      // 允许用户为css的压缩设置一个不同的浏览器target, 与build esbuild一致
      cssTarget: '',
      // 清空输入文件夹
      emptyOutDir: false,
      // 取消计算文件大小，加快打包速度
      reportCompressedSize: false,
      // 启用压缩大小报告,
      // brotliSize: false,
      // chunk大小警告的限制
      chunkSizeWarningLimit: 500,
      // 取消sourceMap， 加快打包速度,
      sourcemap: false
    }
  })
}
