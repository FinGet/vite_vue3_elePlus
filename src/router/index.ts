import type { RouteRecordRaw } from "vue-router";
import { createRouter, createWebHistory } from "vue-router";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import BlankLayout from "@/layouts/BlankLayout.vue";
export type RouteConfig = RouteRecordRaw & { hidden?: boolean }; //hidden 是可选属性

export const routes: RouteConfig[] = [
	{
		path: '/',
		component: DefaultLayout,
		redirect: 'home',
		children: [
			{
				path: '/home',
				name: 'Home',
				component: () => import('@/views/home.vue'),
				meta: {title: '首页', icon: 'House'}
			},
			{
				path: '/test',
				name: 'Test',
				component: () => import('@/views/test.vue'),
				meta: {title: '测试', icon: 'FirstAidKit'},
			},
			{
				path: '/data',
				name: 'Data',
				component: BlankLayout,
				meta: {title: '数据展示', icon: 'Coin'},
				children: [
					{
						path: '/table',
						name: 'Table',
						component: () => import('@/views/table.vue'),
						meta: {title: '表格'},
					},
					{
						path: '/form',
						name: 'Form',
						component: () => import('@/views/form.vue'),
						meta: {title: '表单'},
					}
				]
			}
		] 
	},
	{
		path: "/login",
		name: "Login",
		hidden: true,
		component: () => import("@/views/Login.vue"),
	},
];

const router = createRouter({
	history: createWebHistory('/vue3'), // 打包后的文件放在那个路径下
	routes,
});

export default router;
