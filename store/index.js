import Vue from 'vue'
import Vuex from 'vuex'
import HttpCache from '../common/cache.js'
Vue.use(Vuex)
const user_account = HttpCache.get("USER_KEY"); // 获取用户信息
const store = new Vuex.Store({
	state: {
		hasLogin: user_account ? true : false, // 登录状态
		loginProvider: "",
		userInfo: user_account ? user_account : {}, // 用户信息 
		params:{}
	},
	mutations: {
		login(state, user) {
			state.hasLogin = true;
			state.userInfo = user;
			HttpCache.put("USER_KEY", user); // 缓存用户信息
		},
		logout(state) {
			state.hasLogin = false;
			state.userInfo = {};
			HttpCache.remove("USER_KEY"); // 清理用户信息
		},
		getUserInfo(state) {
		    return HttpCache.get("USER_KEY"); // 获取用户信息
		}
	},
	actions: {
	
	}
})

export default store
