/**
 * API接口配置文件
 */
module.exports = {
	home : {
		SeckillGoods:"home/getSeckillGoodsList", 
		MallGoodsByClass:"home/getMallGoodsByClass", 
		getGoodsClass:"home/getGoodsClass", 
		getCartList:"home/getCartList", 
		getSearchTags:"search/getSearchTags", 
	},
	goods:{
		getGoodsDetail:"goods/getGoodsDetail", 
		getFilterList:"filter/getFilterList", 
	},
	login:{
		login:"login/login", 
	},
	user:{
		getAddressList:"address/getAddressList", 
		getCouponList:"coupon/getCouponList", 
		
	}
}