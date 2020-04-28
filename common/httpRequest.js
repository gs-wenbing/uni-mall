import configdata from './config'
import cache from './cache'

module.exports = {
	config: function(name) {
		var info = null;
		if (name) {
			var name2 = name.split("."); //字符分割
			if (name2.length > 1) {
				info = configdata[name2[0]][name2[1]] || null;
			} else {
				info = configdata[name] || null;
			}
			if (info == null) {
				let web_config = cache.get("web_config");
				if (web_config) {
					if (name2.length > 1) {
						info = web_config[name2[0]][name2[1]] || null;
					} else {
						info = web_config[name] || null;
					}
				}
			}
		}
		return info;
	},
	post: function(url, data) {
		url = this.config("APIHOST")+url;
		console.log(">>>>>>>>>>>>>>>>>>");
		return new Promise((succ, error) => {
			uni.request({
				url: url,
				data: data,
				method: "POST",
				header: {
					'Content-Type': 'application/json'
				},
				success: function(result) {
					if (result.statusCode == 200) {
						if (result.data.result == 0) {
							succ.call(self, result.data)
						} else {
							error.call(self, result)
						}
					} else {
						error.call(self, result)
					}
				},
				fail: function(e) {
					error.call(self, e)
				}
			})
		})
	},
	get: function(url, data) {
		url = this.config("APIHOST")+url;
		console.log("url: " + url);
		return new Promise((succ, error) => {
			uni.request({
				url: url,
				data: data,
				method: "GET",
				header: {
					'Content-Type': 'application/json'
				},
				success: function(result) {
					if (result.statusCode == 200) {
						if (result.data.result == 0) {
							succ.call(self, result.data)
						} else {
							error.call(self,result)
						}
					} else {
						error.call(self, result)
					}
				},
				fail: function(e) {
					error.call(self, e)
				}
			})
		})
	}
}
