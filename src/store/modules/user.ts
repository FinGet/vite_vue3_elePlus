import { defineStore } from "pinia";

export interface UserInfo {
  name: string;
  age: number;
}
export const useUserStore = defineStore("user", {
	state: () => ({
		userInfo: {
			name: "finget",
			age: 26,
		} as UserInfo,
		token: ''
	}),
	actions: {
		setUserInfo(userInfo: UserInfo) {
			this.userInfo = userInfo;
		},
		setToken(token: string) {
			this.token = token;
		}
	},
	persist: {
		enabled: true,
		// strategies: [
		// 	{
		// 		storage: localStorage,
		// 		paths: ['name', 'age']
		// 	}
		// ]
	}
});
