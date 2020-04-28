import Vue from 'vue'
import App from './App'
import httpApi from './common/httpApi.js'
import HttpRequest from './common/httpRequest.js'
import HttpCache from './common/cache.js'
import utils from './common/utils.js'
import store from './store'

Vue.config.productionTip = false

Vue.prototype.$api = httpApi
Vue.prototype.$Request = HttpRequest
Vue.prototype.$Sysconf = HttpRequest.config
Vue.prototype.$SysCache = HttpCache
Vue.prototype.$utils = utils
Vue.prototype.$store = store
Vue.prototype.$fire = new Vue();

App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()
