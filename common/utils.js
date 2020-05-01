module.exports = {
	showMsg: function(title, duration=1500, mask=false, icon='none') {
		//统一提示方便全局修改
		if(Boolean(title) === false){
			return;
		}
		uni.showToast({
			title,
			duration,
			mask,
			icon
		});
	},
	prePage: function() {
		
		let pages = getCurrentPages();
		let prePage = pages[pages.length - 2];
		console.log("prePage: prePage");
		// #ifdef H5
		return prePage;
		// #endif
		return prePage.$vm;
	},
	putExtra: function(obj){
		return encodeURIComponent(JSON.stringify(obj));
	},
	
	getExtra: function(obj){
		return JSON.parse(decodeURIComponent(obj));
	}
}

