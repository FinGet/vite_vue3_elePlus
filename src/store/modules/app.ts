import { defineStore } from "pinia";
import {RouteConfig, routes} from '@/router';
export interface AppStore {
  sidebar: {
		isCollapse: boolean
	}
	routes: Array<RouteConfig>
}

export const useAppStore = defineStore({
	id: "global",
	state: ():AppStore => ({
		sidebar: {
			isCollapse: false
		},
		routes
	}),
	actions: {
		toggleSidebar() {
			this.sidebar.isCollapse = !this.sidebar.isCollapse;
		},
	},
	// 开启数据缓存
  persist: {
    enabled: true,
		// strategies: [
		// 	{
		// 		key: 'my_user', // 自定义key
		// 		storage: localStorage, // 默认存sessionStorage
		// 	}
		// ]
  }
});