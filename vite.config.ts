/*
 * @Author: wenzhenjin
 * @Date: 2021-12-23 17:54:42
 * @LastEditTime: 2021-12-23 18:38:36
 * @LastEditors: wenzhenjin
 * @Description: vite配置文件
 * @FilePath: /ac-calendar/vite.config.ts
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'


function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir)
}

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [
      {
        find: /\/@\//,
        replacement: pathResolve('src') + '/'
      },
      {
        find: /\/#\//,
        replacement: pathResolve('types') + '/'
      }
    ]
  },
  // 支持tsx写法
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'Fragment',
    jsxInject: 'import { h } from "vue"'
  }
})
