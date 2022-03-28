import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import {resolve} from "path";

import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
// https://vitejs.dev/config/
export default defineConfig({
	base: './', // 静态资源和index.html在同一级目录下
	plugins: [
		vue(),
		AutoImport({
			resolvers: [ElementPlusResolver()],
		}),
		Components({
			resolvers: [ElementPlusResolver()],
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
