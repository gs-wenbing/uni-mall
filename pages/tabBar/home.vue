<template>
	<view class="container">
		<!-- 小程序头部兼容 -->
		<!-- #ifdef MP -->
		<view class="mp-search-box">
			<input class="ser-input" type="text" value="输入关键字搜索" disabled />
		</view>
		<!-- #endif -->

		<!-- 头部轮播 -->
		<view class="carousel-section">
			<!-- 标题栏和状态栏占位符 -->
			<view class="titleNview-placing"></view>
			<!-- 背景色区域 -->
			<view class="titleNview-background" :style="{backgroundColor:titleNViewBackground}"></view>
			<swiper class="carousel" circular autoplay="true" duration="1000" @change="swiperChange">
				<swiper-item v-for="(item, index) in carouselList" :key="index" class="carousel-item" @click="navToDetailPage({title: '轮播广告'})">
					<image :src="item.src" />
				</swiper-item>
			</swiper>
			<!-- 自定义swiper指示器 -->
			<view class="swiper-dots">
				<text class="num">{{swiperCurrent+1}}</text>
				<text class="sign">/</text>
				<text class="num">{{swiperLength}}</text>
			</view>
		</view>
		<!-- 分类 -->
		<view class="cate-section">
			<view @tap="navToList('新品推荐')" class="cate-item">
				<image src="/static/temp/shortcut-new.png"></image>
				<text>新品推荐</text>
			</view>
			<view @tap="navToList('热销市场')" class="cate-item">
				<image src="/static/temp/shortcut-hot.png"></image>
				<text>热销市场</text>
			</view>
			<view @tap="navToList('促销折扣')" class="cate-item">
				<image src="/static/temp/shortcut-discount.png"></image>
				<text>促销折扣</text>
			</view>
			<view class="cate-item">
				<image src="/static/temp/shortcut-brand.png"></image>
				<text>品牌街</text>
			</view>
		</view>

		<!-- 爆款楼层 -->
		<view class="seckill-section m-t">
			<view class="s-header"  @tap="navToList('爆款商品')">
				<image class="s-img" src="/static/icon-fire.png" mode="widthFix"></image>
				<text class="tip">爆款商品</text>
			</view>

			<scroll-view class="floor-list" scroll-x>
				<view class="scoll-wrapper">
					<view v-for="(goods, index) in seckillGoodsList" :key="index" class="floor-item" @click="navToDetailPage(goods)">
						<view class="image-wrapper">
							<image :src="goods.DefaultPicURL" :class="[goods.loaded]" mode="aspectFill" lazy-load @load="onImageLoad('seckillGoodsList', index)"
							 @error="onImageError('seckillGoodsList', index)"></image>
						</view>
						<text class="title clamp">{{goods.GoodsName}}</text>
						<text class="subtitle clamp">{{goods.GoodsModel}}</text>
						<text class="price">￥{{goods.Price}}</text>
					</view>
				</view>
			</scroll-view>
		</view>


		<block v-for="(mallGoods,index) in mallGoodsList" :key="index">
			<!-- 分类推荐楼层 -->
			<view class="f-header m-t"  @tap="navToList(mallGoods.GoodsClassName)">
				<image src="/static/temp/h1.png"></image>
				<view class="tit-box">
					<text class="tit">{{mallGoods.GoodsClassName}}</text>
				</view>
				<text class="mallicon icon-you"></text>
			</view>
			<view class="class-floor">
				<view class="guess-section">
					<view v-for="(goods, index2) in mallGoods.MallGoodsList" :key="index2" class="guess-item" @click="navToDetailPage(goods)">
						<view class="image-wrapper">
							<image :src="goods.DefaultPicURL" :class="[goods.loaded]" mode="aspectFill" lazy-load @load="onFloorImageLoad('mallGoodsList',index, index2)"
							 @error="onFloorImageError('mallGoodsList',index, index2)"></image>
						</view>
						<!-- <image :src="goods.DefaultPicURL" mode="aspectFill"></image> -->
						<text class="title clamp">{{goods.GoodsName}}</text>
						<text class="subtitle clamp">型号：{{goods.GoodsModel}}</text>
						<text class="price">￥{{goods.Price}}</text>
					</view>
				</view>
			</view>
		</block>
	</view>
</template>

<script>
	import bmap  from "@/lib/bmap-wx.js"
	export default {

		data() {
			return {
				titleNViewBackground: 'rgb(245,95,113)',
				swiperCurrent: 0,
				swiperLength: 3,
				carouselList: [{
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
				],
				mallGoodsList: [],
				seckillGoodsList: []
			};
		},

		onLoad() {
			var BMap = new bmap.BMapWX({ 
				ak: 'i0BXsy4TnbXQ51USDMHdlhoOb2kgEmrz'
			});
			var webView = this.$mp.page.$getAppWebview();
			var fail = function(data) { 
				console.log(JSON.stringify(data)) 
			}; 
			var success = function(data) { 
				console.log(JSON.stringify(data))
				// #ifdef APP-PLUS  
				// https://uniapp.dcloud.io/collocation/pages?id=app-titlenview-searchinput
				// 动态修改原生导航栏: https://ask.dcloud.net.cn/article/35374
				webView.setTitleNViewButtonStyle(0, {  
					text: data.originalData.result.addressComponent.city,  
				}); 
				// #endif 
			} 
			// 发起regeocoding检索请求 
			BMap.regeocoding({ 
				address: "北京市海淀区上地十街10号", 
				fail: fail, 
				success: success 
			}); 
			 
			this.getSeckillGoodsList();
			this.loadData();
		},
		//下拉刷新
		onPullDownRefresh() {
			this.seckillGoodsList = [];
			this.mallGoodsList = [];
			this.getSeckillGoodsList("refrash");
			this.loadData("refrash");
		},
		methods: {
			getSeckillGoodsList(type) {
				this.$Request.get(this.$api.home.SeckillGoods).then(res => {
					this.seckillGoodsList = res.data;
					if (type == "refrash") {
						uni.stopPullDownRefresh();
					}
				},err => {
					console.log("err: " + JSON.stringify(err));
				});
			},
			loadData(type) {
				let notLoading = false;
				if (type == "refrash") {
					notLoading = true;
				}
				this.$Request.get(this.$api.home.MallGoodsByClass).then(res => {
					this.mallGoodsList = res.data;
					if (type == "refrash") {
						uni.stopPullDownRefresh();
					}
				},err => {
					console.log("err: " + JSON.stringify(err));
				});
			},
			/**
			 * 爆款监听image加载完成
			 * @param {Object} key
			 * @param {Object} index
			 */
			onImageLoad(key, index) {
				this.$set(this[key][index], 'loaded', 'loaded');
			},
			/**
			 * 爆款监听image加载失败
			 * @param {Object} key
			 * @param {Object} index
			 */
			onImageError(key, index) {
				this[key][index].DefaultPicURL = '/static/errorImage.jpg';
			},

			/**
			 * 分类楼层监听image加载完成
			 * @param {Object} key
			 * @param {Object} index
			 * @param {Object} index2
			 */
			onFloorImageLoad(key, index, index2) {
				this.$set(this[key][index].MallGoodsList[index2], 'loaded', 'loaded');
			},
			/**
			 *  分类楼层监听image加载失败
			 * @param {Object} key
			 * @param {Object} index
			 * @param {Object} index2
			 */
			onFloorImageError(key, index, index2) {
				this[key][index].MallGoodsList[index2].DefaultPicURL = '/static/errorImage.jpg';
			},

			//轮播图切换修改背景色
			swiperChange(e) {
				const index = e.detail.current;
				this.swiperCurrent = index;
				this.titleNViewBackground = this.carouselList[index].background;
			},
			navToList(key){
				uni.navigateTo({
					url: `/pages/product/list?key=${key}`
				})
			},
			//详情页
			navToDetailPage(item) {
				//为了模拟数据，正常项目里按照业务传值
				uni.navigateTo({
					url: `/pages/product/detail?goods=${this.$utils.putExtra(item)}`
				})
			},
		},
		// 标题栏input搜索框点击
		onNavigationBarSearchInputClicked: async function(e) {
			uni.navigateTo({
				url: '/pages/search/search'
			})
		},
		//点击导航栏 buttons 时触发
		onNavigationBarButtonTap(e) {
			const index = e.index;
			if (index === 0) {
				this.$utils.showMsg('点击位置');
			} else if (index === 1) {
				// #ifdef APP-PLUS
				const pages = getCurrentPages();
				const page = pages[pages.length - 1];
				const currentWebview = page.$getAppWebview();
				currentWebview.hideTitleNViewButtonRedDot({
					index
				});
				// #endif
				uni.navigateTo({
					url: '/pages/notice/notice'
				})
			}
		}
	}
</script>

<style lang="scss">
	page {
		background: #f5f5f5;
	}

	.m-t {
		margin-top: 16upx;
	}

	/* 头部 轮播图 */
	.carousel-section {
		position: relative;
		padding-top: 10px;

		.titleNview-placing {
			height: var(--status-bar-height);
			padding-top: 44px;
			box-sizing: content-box;
		}

		.titleNview-background {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 374upx;
			transition: .4s;
		}
	}

	.carousel {
		width: 100%;
		height: 294upx;

		.carousel-item {
			width: 100%;
			height: 100%;
			padding: 0 28upx;
			overflow: hidden;
		}

		image {
			width: 100%;
			height: 100%;
			border-radius: 10upx;
		}
	}

	.swiper-dots {
		display: flex;
		position: absolute;
		left: 60upx;
		bottom: 15upx;
		width: 72upx;
		height: 36upx;
		background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAABkCAYAAADDhn8LAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTMyIDc5LjE1OTI4NCwgMjAxNi8wNC8xOS0xMzoxMzo0MCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTk4MzlBNjE0NjU1MTFFOUExNjRFQ0I3RTQ0NEExQjMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTk4MzlBNjA0NjU1MTFFOUExNjRFQ0I3RTQ0NEExQjMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6Q0E3RUNERkE0NjExMTFFOTg5NzI4MTM2Rjg0OUQwOEUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6Q0E3RUNERkI0NjExMTFFOTg5NzI4MTM2Rjg0OUQwOEUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4Gh5BPAAACTUlEQVR42uzcQW7jQAwFUdN306l1uWwNww5kqdsmm6/2MwtVCp8CosQtP9vg/2+/gY+DRAMBgqnjIp2PaCxCLLldpPARRIiFj1yBbMV+cHZh9PURRLQNhY8kgWyL/WDtwujjI8hoE8rKLqb5CDJaRMJHokC6yKgSCR9JAukmokIknCQJpLOIrJFwMsBJELFcKHwM9BFkLBMKFxNcBCHlQ+FhoocgpVwwnv0Xn30QBJGMC0QcaBVJiAMiec/dcwKuL4j1QMsVCXFAJE4s4NQA3K/8Y6DzO4g40P7UcmIBJxbEesCKWBDg8wWxHrAiFgT4fEGsB/CwIhYE+AeBAAdPLOcV8HRmWRDAiQVcO7GcV8CLM8uCAE4sQCDAlHcQ7x+ABQEEAggEEAggEEAggEAAgQACASAQQCCAQACBAAIBBAIIBBAIIBBAIABe4e9iAe/xd7EAJxYgEGDeO4j3EODp/cOCAE4sYMyJ5cwCHs4rCwI4sYBxJ5YzC84rCwKcXxArAuthQYDzC2JF0H49LAhwYUGsCFqvx5EF2T07dMaJBetx4cRyaqFtHJ8EIhK0i8OJBQxcECuCVutxJhCRoE0cZwMRyRcFefa/ffZBVPogePihhyCnbBhcfMFFEFM+DD4m+ghSlgmDkwlOgpAl4+BkkJMgZdk4+EgaSCcpVX7bmY9kgXQQU+1TgE0c+QJZUUz1b2T4SBbIKmJW+3iMj2SBVBWz+leVfCQLpIqYbp8b85EskIxyfIOfK5Sf+wiCRJEsllQ+oqEkQfBxmD8BBgA5hVjXyrBNUQAAAABJRU5ErkJggg==);
		background-size: 100% 100%;

		.num {
			width: 36upx;
			height: 36upx;
			border-radius: 50px;
			font-size: 24upx;
			color: #fff;
			text-align: center;
			line-height: 36upx;
		}

		.sign {
			position: absolute;
			top: 0;
			left: 50%;
			line-height: 36upx;
			font-size: 12upx;
			color: #fff;
			transform: translateX(-50%);
		}
	}

	/* 分类 */
	.cate-section {
		display: flex;
		justify-content: space-around;
		align-items: center;
		flex-wrap: wrap;
		padding: 30upx 22upx;
		background: #fff;

		.cate-item {
			display: flex;
			flex-direction: column;
			align-items: center;
			font-size: $font-sm + 2upx;
			color: $font-color-dark;
		}

		/* 原图标颜色太深,不想改图了,所以加了透明度 */
		image {
			width: 88upx;
			height: 88upx;
			margin-bottom: 14upx;
			border-radius: 50%;
			opacity: .7;
			box-shadow: 4upx 4upx 20upx rgba(250, 67, 106, 0.3);
		}
	}

	/* 爆款专区 */
	.seckill-section {
		padding: 4upx 30upx 24upx;
		background: #fff;

		.s-header {
			display: flex;
			align-items: center;
			height: 92upx;
			line-height: 1;

			.s-img {
				width: 40upx;
				height: 40upx;
			}

			.tip {
				font-size: $font-lg +2upx;
				color: #font-color-dark;
				line-height: 1.3;
				margin: 0 20upx 0 40upx;
			}

			.icon-you {
				font-size: $font-lg;
				color: $font-color-light;
				flex: 1;
				text-align: right;
			}
		}

		.floor-list {
			white-space: nowrap;
			width: 690upx;
		}

		.scoll-wrapper {
			display: flex;
			align-items: flex-start;
			display: inline-block;
			width: 690upx;
		}

		.floor-item {
			width: 155upx;
			margin-right: 20upx;
			font-size: $font-sm+2upx;
			color: $font-color-dark;
			line-height: 1.8;
			display: inline-block;

			// image {
			// 	width: 155upx;
			// 	height: 155upx;
			// 	border-radius: 6upx;
			// }
			.image-wrapper {
				width: 155upx;
				height: 155upx;
				flex-shrink: 0;
				position: relative;

				image {
					border-radius: 8upx;
				}
			}

			.price {
				color: $uni-color-primary;
			}
		}
	}

	.f-header {
		display: flex;
		align-items: center;
		height: 100upx;
		padding: 6upx 30upx 8upx;
		background: #fff;

		image {
			flex-shrink: 0;
			width: 50upx;
			height: 50upx;
			margin-right: 20upx;
		}

		.tit-box {
			flex: 1;
			display: flex;
			flex-direction: column;
		}

		.tit {
			font-size: $font-lg +2upx;
			color: #font-color-dark;
			line-height: 1.3;
		}

		.tit2 {
			font-size: $font-sm;
			color: $font-color-light;
		}

		.icon-you {
			font-size: $font-lg +2upx;
			color: $font-color-light;
		}
	}

	/* 分类推荐楼层 */
	.class-floor {
		width: 100%;
		overflow: hidden;
		margin-bottom: 20upx;
		margin-top: -50upx;

		.title {
			font-size: $font-sm+2upx;
			color: $font-color-dark;
			margin-top: 10rpx;
		}

		.subtitle {
			font-size: $font-sm;
			color: $font-color-light;
			line-height: 2.4;
		}

		.price {
			color: $uni-color-primary;
			font-size: $font-lg;
		}

		/* 猜你喜欢 */
		.guess-section {
			display: flex;
			flex-wrap: wrap;
			width: 750upx;
			background: #fff;
			margin-top: 40rpx;
			padding: 0rpx 10rpx;

			.guess-item {
				display: flex;
				flex-direction: column;
				width: 33.3%;
				padding-bottom: 40upx;
			}

			.image-wrapper {
				width: 230upx;
				height: 260upx;
				flex-shrink: 0;
				position: relative;

				image {
					border-radius: 8upx;
				}
			}

			// image {
			// 	width: 230upx;
			// 	height: 260upx;
			// 	opacity: 1;
			// 	
			// }
		}
	}
</style>
