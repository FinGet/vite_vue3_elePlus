import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from '@vitejs/plugin-vue-jsx';
import { resolve } from "path";

import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import Icons from 'unplugin-icons/vite';
import IconsResolver from 'unplugin-icons/resolver';
const { FileSystemIconLoader } = require('unplugin-icons/loaders');
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
// https://vitejs.dev/config/

const _strings = require('@iconify/utils/lib/misc/strings');

const ElIconResolver = (options = {}) => {
	return (name) => {
		const kebab = _strings.camelToKebab.call(void 0, name);
		const prefix = 'eli';
		if (!kebab.startsWith(prefix))
			return;

		const slice = kebab.slice(prefix.length);

		return `@element-plus/icons-vue/dist/lib/${slice.substring(1).toLowerCase()}.vue`;
	};
};
export default defineConfig({
	base: './', // 静态资源和index.html在同一级目录下
	plugins: [
		vue(),
		vueJsx(),
		Icons({
			compiler: 'vue3',
			// 自定义图标加载
			customCollections: {
				// 给svg文件设置fill="currentColor"属性，使图标的颜色具有适应性
				'custom': FileSystemIconLoader('src/assets/svg', svg => svg.replace(/^<svg /, '<svg fill="currentColor" ')),
			},
		}),
		// 实现vue函数的自动导入
		AutoImport({
			include: [
				/\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
				/\.vue$/, /\.vue\?vue/, // .vue
				/\.md$/, // .md
			],

			// global imports to register
			imports: [
				// presets
				'vue',
				'vue-router',
				// custom
				{
					'@vueuse/core': [
						// named imports
						'useMouse', // import { useMouse } from '@vueuse/core',
						'useFullscreen',
						'useTitle'
						// alias
						// ['useFetch', 'useMyFetch'], // import { useFetch as useMyFetch } from '@vueuse/core',
					],
					// 'axios': [
					// 	// default imports
					// 	['default', 'axios'], // import { default as axios } from 'axios',
					// ],
				},
			],
			resolvers: [ElementPlusResolver()],
		}),
		// 实现vue组件库的自动按需导入
		Components({
			dts: true,
			resolvers: [
				ElementPlusResolver(),
				// {prefix}-{collection}-{icon} {前缀（默认i）}-{图标集名称（custom）}-{图标名称（refresh-line）}
				IconsResolver({
					customCollections: ['custom']
				}),
				ElIconResolver()
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
