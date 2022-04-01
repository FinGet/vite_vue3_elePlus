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
				meta: {title: '首页', icon: 'HomeFilled'}
			},
			{
				path: '/test',
				name: 'Test',
				component: () => import('@/views/test.vue'),
				meta: {title: '测试', icon: 'BellFilled'},
			},
			{
				path: '/table',
				name: 'Table',
				component: () => import('@/views/table.vue'),
				meta: {title: '表格', icon: 'BellFilled'},
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
