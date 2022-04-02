import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import {resolve} from "path";

import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import Icons from 'unplugin-icons/vite';
import IconsResolver from 'unplugin-icons/resolver';
const { FileSystemIconLoader } = require('unplugin-icons/loaders');
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
// https://vitejs.dev/config/
export default defineConfig({
	base: './', // 静态资源和index.html在同一级目录下
	plugins: [
		vue(),
		Icons({ 
			compiler: 'vue3',
			// 自定义图标加载
			customCollections: {
				// 给svg文件设置fill="currentColor"属性，使图标的颜色具有适应性
				'myIcon': FileSystemIconLoader('src/assets/svg', svg => svg.replace(/^<svg /, '<svg fill="currentColor" ')),
			}, 
		}),
		AutoImport({
			resolvers: [ElementPlusResolver()],
		}),
		Components({
			dts: true,
			resolvers: [
				ElementPlusResolver(),
				IconsResolver({
					customCollections: ['myIcon']
				})
			],
		}),
	],
	resolve: {
		alias: {
			"@/": `${resolve(__dirname, "src")}/`,
		},
	},
	css: {
		preprocessorOptions: {
			// less 变量覆盖
			less: {
				modifyVars: {
					hack: `true; @import (reference) "${resolve('src/assets/css/variables.less')}";`,
				},
				javascriptEnabled: true,
			}
		}
	}
});
