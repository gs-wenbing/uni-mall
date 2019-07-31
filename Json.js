/* 用户 */
const userInfo = {
	status: 1,
	data: {
		id: 1,
		mobile: 18888888888,
		nickname: '穆志生',
		portrait: 'http://img.61ef.cn/news/201409/28/2014092805595807.jpg'
	},
	msg: '提示'
}
/* 首页轮播图 */
const carouselList = [{
		src: "/static/banner-1.png",
		background: "rgb(245,95,113)",
	},
	{
		src: "/static/banner-2.png",
		background: "rgb(250,103,95)",
	},
	{
		src: "/static/banner-3.png",
		background: "rgb(250,123,49)",
	}
]


export default {
	carouselList,
	userInfo
}
