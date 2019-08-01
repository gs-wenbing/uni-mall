import Vue from 'vue'
import store from './store'
import App from './App'

// 管理账号信息
const USERS_KEY = 'USERS_KEY';
const STATE_KEY = 'STATE_KEY';

const API_URL = "https://mockapi.eolinker.com/p6QCAEw5a26610182ff15ddc6f4f212776fdfbb3ce18328/";

const callApi = function(params, resolve) {
	if(!params.notLoading)uni.showNavigationBarLoading();
	let resultData = {};
	let url = API_URL + params.action;
	console.log(url)
	const requestTask = uni.request({
		url: url,
		data: params.param,
		timeout: 10000, //超时时间设置为10秒；
		method: "GET",
		header: {
			'Content-Type': 'application/json'
		},
		success: (result) => {
			if(!params.notLoading)uni.hideNavigationBarLoading();
			if (result.statusCode == 200) {
				if (result.data.result == 0) {
					resultData.IsSuccess = true;
					resultData.data = result.data.data;
					resolve(resultData);
				} else {
					resultData.IsSuccess = false;
					resultData.msg = result.data.data;
					resolve(resultData);
				}
			} else {
				resultData.IsSuccess = false;
				resultData.msg = result.statusCode;
				resolve(resultData);
			}
	
		},
		fail: (data, code) => {
			if(!params.notLoading)uni.hideNavigationBarLoading();
			resultData.IsSuccess = false;
			resultData.msg = JSON.stringify(data);
			resolve(resultData);
		}
	});
}


const getNowFormatDate = function() {
	var date = new Date();
	var seperator1 = "-";
	var seperator2 = ":";
	var month = date.getMonth() + 1;
	var strDate = date.getDate();
	if (month >= 1 && month <= 9) {
		month = "0" + month;
	}
	if (strDate >= 0 && strDate <= 9) {
		strDate = "0" + strDate;
	}
	var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate +
		" " + date.getHours() + seperator2 + date.getMinutes() +
		seperator2 + date.getSeconds();
	return currentdate;
}

const msg = (title, duration = 1500, mask = false, icon = 'none') => {
	//统一提示方便全局修改
	if (Boolean(title) === false) {
		return;
	}
	uni.showToast({
		title,
		duration,
		mask,
		icon
	});
}

const putExtra = obj =>{
	return encodeURIComponent(JSON.stringify(obj));
}

const getExtra = obj =>{
	return JSON.parse(decodeURIComponent(obj));
}


const callApix = params => {
	//模拟异步请求数据
	return new Promise(resolve => {
		callApi(params,resolve)
	})
}

const prePage = () => {
	let pages = getCurrentPages();
	let prePage = pages[pages.length - 2];
	// #ifdef H5
	return prePage;
	// #endif
	return prePage.$vm;
}


Vue.config.productionTip = false
Vue.prototype.$fire = new Vue();
Vue.prototype.$store = store;
Vue.prototype.$api = {
	msg,
	prePage,
	callApix,
	putExtra,
	getExtra
};

App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()
