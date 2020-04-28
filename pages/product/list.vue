<template>
	<view class="content">
		<view class="navbar" :style="{position:headerPosition,top:headerTop}">
			<view class="nav-item" :class="{current: filterIndex === 0}" @click="tabClick(0)">
				<text>销量</text>
				<view class="p-box">
					<text :class="{active: priceOrder === 1 && filterIndex === 2}" class="mallicon icon-shang"></text>
					<text :class="{active: priceOrder === 2 && filterIndex === 2}" class="mallicon icon-shang xia"></text>
				</view>
			</view>
			<view class="nav-item" :class="{current: filterIndex === 1}" @click="tabClick(1)">
				<text>上市</text>
				<view class="p-box">
					<text :class="{active: priceOrder === 1 && filterIndex === 2}" class="mallicon icon-shang"></text>
					<text :class="{active: priceOrder === 2 && filterIndex === 2}" class="mallicon icon-shang xia"></text>
				</view>
			</view>
			<view class="nav-item" :class="{current: filterIndex === 2}" @click="tabClick(2)">
				<text>价格</text>
				<view class="p-box">
					<text :class="{active: priceOrder === 1 && filterIndex === 2}" class="mallicon icon-shang"></text>
					<text :class="{active: priceOrder === 2 && filterIndex === 2}" class="mallicon icon-shang xia"></text>
				</view>
			</view>
			<view class="nav-item" :class="{current: filterIndex === 3}" @click="toggleCateMask('Cate','show')">
				<text>筛选</text>
				<view class="p-box">
					<text class="mallicon icon-shang"></text>
				</view>
			</view>
		</view>
		<view class="goods-list">
			<view v-for="(Goods, index) in MallGoodsList" :key="index" class="goods-item" @click="navToDetailPage(Goods)">
				<view class="image-wrapper">
					<image :src="Goods.DefaultPicURL" :class="[Goods.loaded]" mode="aspectFill" lazy-load @load="onImageLoad('MallGoodsList', index)"
							 @error="onImageError('MallGoodsList', index)"></image>
				</view>
				<text class="title clamp">{{Goods.GoodsName}}</text>
				<text class="sub-title clamp">型号：{{Goods.GoodsModel}}</text>
				<view class="price-box">
					<text class="price">{{Goods.Price}}</text>
					<text>已售 {{Goods.Sales}}</text>
				</view>
			</view>
		</view>
		<uni-load-more :status="loadingType"></uni-load-more>
		<!-- 筛选面板 -->
		<view class="cate-mask" @touchmove.stop.prevent="stopPrevent" :class="cateMaskState===0 ? 'none' : cateMaskState===1 ? 'show' : ''" @click="toggleCateMask('Cate','none')">
			<view class="cate-content" @click.stop.prevent="stopPrevent" @touchmove.stop.prevent="stopPrevent">
				<scroll-view scroll-y class="cate-box">
					<text class="title">价格区间</text>
					<view class="price-box">
						<input class="price-input" placeholder="最低价" />
						-
						<input class="price-input" placeholder="最高价" />
					</view>
					<view class="nav" @click="toggleCateMask('Brand','show')" hover-class="common-hover" :hover-stay-time="50">
						<text class="subtitle">品牌</text>
						<text class="mallicon icon-you"></text>
					</view>
					<text class="title">类型</text>
					<view class="type-box">
						<text class="type-item active">热销</text>
						<text class="type-item">新品</text>
						<text class="type-item">促销</text>
						<text class="type-item">清仓</text>
					</view>

					<view class="nav" @click="toggleCateMask('Classy','show')" hover-class="common-hover" :hover-stay-time="50">
						<text class="subtitle">分类</text>
						<text class="mallicon icon-you"></text>
					</view>
				</scroll-view>
				<view style="display: flex;flex-direction: row;justify-content: space-between;height: 110rpx;padding: 20rpx 40rpx;font-size: 30rpx;">
					<text style="width: 45%;display: flex;flex-direction: row;justify-content: center;border: 1px solid #b4b4b4;align-items: center;border-radius: 50rpx;">重置</text>
					<text style="width: 45%;display: flex;flex-direction: row;justify-content: center;background-color: #E60012;align-items: center;border-radius: 50rpx;color:#fff;">确定</text>
				</view>
			</view>
		</view>

		<!-- 品牌 -->
		<view class="cate-mask" :class="BrandMaskState===0 ? 'none' : BrandMaskState===1 ? 'shows' : ''" @click="toggleCateMask('Brand','none')">
			<view class="cate-content" @click.stop.prevent="stopPrevent" @touchmove.stop.prevent="stopPrevent">
				<view class="t-box">
					<text @click="closeCate(1)" class="t-b mallicon icon-arrow-left-bottom"></text>
					<text class="t">品牌</text>
					<text class="t-s">确定</text>
				</view>
				<scroll-view scroll-y class="cate-list">
					<view class="cate-flow" v-for="brand in BrandList" :key="brand.CompanyBrandID">
						<view class="cate-item" :class="{active: brand.CompanyBrandID==SearchParam.CBID}" @click="changeBrand(brand)">
							{{brand.CompanyBrandName}}
						</view>
					</view>
				</scroll-view>
			</view>
		</view>
		<!-- 分类 -->
		<view class="cate-mask" :class="ClassMaskState===0 ? 'none' : ClassMaskState===1 ? 'shows' : ''" @click="toggleCateMask('Classy','none')">
			<view class="cate-content" @click.stop.prevent="stopPrevent" @touchmove.stop.prevent="stopPrevent">
				<view class="t-box">
					<text @click="closeCate(2)" class="t-b mallicon icon-arrow-left-bottom"></text>
					<text class="t">分类</text>
					<text class="t-s">确定</text>
				</view>
				<scroll-view scroll-y class="cate-list">
					<view v-for="classy in ClassList" :key="classy.GoodsClassID">
						<view class="cate-item-p b-b two">{{classy.GoodsClassName}}</view>
						<view class="cate-flow">
							<view v-for="child in classy.children" :key="child.GoodsClassID" class="cate-item" :class="{active: SearchParam.GCIDS.indexOf(child.GoodsClassID) != -1}"
							 @click="changeClassy(child)">
								{{child.GoodsClassName}}
							</view>
						</view>
					</view>
				</scroll-view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex';
	import uniLoadMore from '@/components/uni-load-more/uni-load-more.vue';
	
	export default {
		components: {
			uniLoadMore
		},
		data() {
			return {
				cateMaskState: 0, //分类面板展开状态
				BrandMaskState: 0, //品牌面板展开状态
				ClassMaskState: 0, //分类面板展开状态
				headerPosition: "fixed",
				headerTop: "0px",
				loadingType: 'more', //加载更多状态
				filterIndex: 0,
				searchKey: '',
				priceOrder: 0, //1 价格从低到高 2价格从高到低
				cateList: [],
				goodsList: [],
				isPullDownRefresh: true, //是否开启下拉刷新

				MallGoodsList: [],
				BrandList: [],
				ClassList: [],
				keyWords: ""
			};
		},

		onLoad(options) {
			// #ifdef H5
			this.headerTop = document.getElementsByTagName('uni-page-head')[0].offsetHeight + 'px';
			// #endif
			// #ifdef APP-PLUS  
			this.searchKey = options.key;
			if(this.searchKey){
				var webView = this.$mp.page.$getAppWebview();
				webView.setTitleNViewSearchInputText(this.searchKey);
			}
			// #endif  
			this.loadCateList();
		},
		onNavigationBarSearchInputClicked: function(e) {
			let key = this.searchKey ? '?key=' + this.searchKey : '';
			uni.redirectTo({
				url: '../search/search' + key,
			})
		},
		onPageScroll(e) {
			//兼容iOS端下拉时顶部漂移
			if (e.scrollTop >= 0) {
				this.headerPosition = "fixed";
			} else {
				this.headerPosition = "absolute";
			}
			// plus.key.hideSoftKeybord();
		},

		//下拉刷新
		onPullDownRefresh() {
			this.MallGoodsList = [];
			this.loadData('refresh');
		},
		//加载更多
		onReachBottom() {
			this.loadData();
		},
		methods: {
			//第一次加载分类
			loadCateList() {
				this.$Request.get(this.$api.goods.getFilterList).then(res => {
					this.MallGoodsList = res.data;
				},err => {
					console.log("err: " + JSON.stringify(err));
				});
				
			},
			//加载商品 ，带下拉刷新和上滑加载
			loadData(type = 'add', loading) {
				//没有更多直接返回
				if (type === 'add') {
					if (this.loadingType === 'nomore') {
						return;
					}
					this.loadingType = 'loading';
				} else {
					this.loadingType = 'more'
				}
				this.$Request.get(this.$api.goods.getFilterList).then(res => {
					let	goodsList = res.data;
					if (type === 'refresh') {
						this.MallGoodsList = goodsList;
					} else {
						this.MallGoodsList = this.MallGoodsList.concat(goodsList);
					}
					
					//判断是否还有下一页，有是more  没有是nomore(测试数据判断大于20就没有了)
					this.loadingType = this.MallGoodsList < 500 ? 'nomore' : 'more';
					if (type === 'refresh') {
						if (loading == 1) {
							// uni.hideLoading();
						} else {
							uni.stopPullDownRefresh();
						}
					}
				},err => {
					console.log("err: " + JSON.stringify(err));
				});
			},
			//监听image加载完成
			onImageLoad(key, index) {
				this.$set(this[key][index], 'loaded', 'loaded');
			},
			//监听image加载失败
			onImageError(key, index) {
				this[key][index].DefaultPicURL = '/static/errorImage.jpg';
			},
			//筛选点击
			tabClick(index) {
				this.MallGoodsList = [];
				if (this.filterIndex === index && index !== 2) {
					return;
				}
				this.filterIndex = index;
				if (index === 2) {
					this.priceOrder = this.priceOrder === 1 ? 2 : 1;
				} else {
					this.priceOrder = 0;
				}
				uni.pageScrollTo({
					duration: 300,
					scrollTop: 0
				})
				this.loadData('refresh', 1);
				// uni.showLoading({
				// 	title: '正在加载'
				// })
			},
			isOpenRefrash() {
				const pages = getCurrentPages();
				const curPage = pages[pages.length - 1];
				const currentWebView = curPage.$getAppWebview();
				currentWebView.setStyle({
					pullToRefresh: {
						support: !this.isPullDownRefresh,
						style: 'circle'
					}
				})
			},
			//显示分类面板
			toggleCateMask(cate, type) {
				let timer = type.indexOf('show') != -1 ? 10 : 300;
				let state = type.indexOf('show') != -1 ? 1 : 0;
				this.isPullDownRefresh = type.indexOf('show') != -1;
				if (cate == 'Cate') {
					this.cateMaskState = 2;
				} else if (cate == 'Brand') {
					this.BrandMaskState = 2;
				} else if (cate == 'Classy') {
					this.ClassMaskState = 2;
				}
				setTimeout(() => {
					if (cate == 'Cate') {
						this.cateMaskState = state;
					} else if (cate == 'Brand') {
						this.BrandMaskState = state;
					} else if (cate == 'Classy') {
						this.ClassMaskState = state;
					}
				}, timer);
				this.isOpenRefrash();
			},
			//分类品牌
			changeBrand(brand) {
				this.SearchParam.CBID = brand.CompanyBrandID;
				this.toggleCateMask('Brand', 'none');
				// uni.pageScrollTo({
				// 	duration: 300,
				// 	scrollTop: 0
				// })
				// this.loadData('refresh', 1);
				// uni.showLoading({
				// 	title: '正在加载'
				// })
			},
			//分类点击
			changeClassy(classy) {
				this.SearchParam.GCIDS += classy.GoodsClassID + ",";
				// this.toggleCateMask('Classy','none');
				// uni.pageScrollTo({
				// 	duration: 300,
				// 	scrollTop: 0
				// })
				// this.loadData('refresh', 1);
				// uni.showLoading({
				// 	title: '正在加载'
				// })
			},
			closeCate(type) {
				if (type == 0) {
					this.cateMaskState = 0;
				} else if (type == 1) {
					this.BrandMaskState = 0;
				} else if (type == 2) {
					this.ClassMaskState = 0;
				}
			},
			//详情
			navToDetailPage(item) {
				//为了模拟数据，正常项目里按照业务传值
				uni.navigateTo({
					url: `/pages/product/detail?goods=${this.$utils.putExtra(item)}`
				})
			},
			stopPrevent() {}
		},
	}
</script>

<style lang="scss">
	page,
	.content {
		background: $page-color-base;
	}

	.content {
		padding-top: 96upx;
	}

	.navbar {
		position: fixed;
		left: 0;
		top: var(--window-top);
		display: flex;
		width: 100%;
		height: 80upx;
		background: #fff;
		box-shadow: 0 2upx 10upx rgba(0, 0, 0, .06);
		z-index: 10;

		.nav-item {
			flex: 1;
			display: flex;
			justify-content: center;
			align-items: center;
			height: 100%;
			font-size: 30upx;
			color: $font-color-dark;
			position: relative;

			&.current {
				color: $base-color;
			}
		}

		.p-box {
			display: flex;
			flex-direction: column;

			.mallicon {
				display: flex;
				align-items: center;
				justify-content: center;
				width: 30upx;
				height: 14upx;
				line-height: 1;
				margin-left: 4upx;
				font-size: 26upx;
				color: #888;

				&.active {
					color: $base-color;
				}
			}

			.xia {
				transform: scaleY(-1);
			}
		}

		.cate-item {
			display: flex;
			justify-content: center;
			align-items: center;
			height: 100%;
			width: 80upx;
			position: relative;
			font-size: 44upx;

			// &:after {
			// 	content: '';
			// 	position: absolute;
			// 	left: 0;
			// 	top: 50%;
			// 	transform: translateY(-50%);
			// 	border-left: 1px solid #ddd;
			// 	width: 0;
			// 	height: 36upx;
			// }
		}
	}

	/* 分类 top: var(--window-top)*/
	.cate-mask {
		position: fixed;
		left: 0;
		top: var(--window-top);
		bottom: 0;
		width: 100%;
		background: rgba(0, 0, 0, 0);
		z-index: 95;
		transition: .3s;

		.cate-content {
			width: 630upx;
			height: 100%;
			background: #fff;
			float: right;
			transform: translateX(100%);
			transition: .3s;

			.t-box {
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				align-items: center;
				background-color: #f4f4f4;
				font-size: 30upx;

				.t-b {
					font-size: $font-base;
					padding: 20rpx 30rpx;
				}

				.t-s {
					font-size: $font-base;
					padding: 20rpx 30rpx;
				}
			}
		}

		&.none {
			display: none;
		}

		&.show {
			background: rgba(0, 0, 0, .4);

			.cate-content {
				transform: translateX(0);
			}
		}

		&.shows {
			.cate-content {
				transform: translateX(0);
			}
		}
	}

	.cate-box {
		display: flex;
		flex-direction: column;
		margin-top: 30rpx;
		height: 88%;
		bottom: 120rpx;

		.title {
			font-size: $font-lg;
			color: $font-color-dark;
			font-weight: 700;
			margin: 40rpx;
		}

		.nav {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			padding: 20rpx 40rpx;
			margin: 20rpx 0rpx;
		}

		.subtitle {
			font-size: $font-base;
			color: $font-color-dark;
			font-weight: 700;
		}

		.type-box {
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
			justify-content: space-between;
			width: 100%;
			padding: 0rpx 40rpx;

			.type-item {
				font-size: $font-base;
				color: $font-color-dark;
				margin-top: 30rpx;
				text-align: center;
				line-height: 70rpx;
				width: 250upx;
				height: 70rpx;
				background-color: #F4F4F4;
				border-radius: 50rpx;
				text-align: center;
			}
		}

		.price-box {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			margin: 40rpx 40rpx 0rpx 40rpx;

			.price-input {
				font-size: $font-sm +2upx;
				color: $font-color-dark;
				width: 250upx;
				height: 70rpx;
				background-color: #F4F4F4;
				border-radius: 50rpx;
				text-align: center;
			}
		}
	}

	.cate-list {
		display: flex;
		flex-direction: column;
		height: 100%;
		padding-bottom: 110upx;

		.cate-flow {
			display: flex;
			flex-direction: row;
			flex-direction: row;
			flex-wrap: wrap;
			padding-left: 30upx;
			margin: 15rpx 0rpx;
			height: 100%;

			.cate-item {
				text-align: center;
				width: 180upx;
				height: 60rpx;
				line-height: 60rpx;
				vertical-align: middle;
				background-color: #F4F4F4;
				border-radius: 50rpx;
				margin: 15rpx 20rpx 15rpx 0rpx;
				font-size: 28upx;
				color: #555;
				position: relative;
			}

			.active {
				color: $base-color;
				background-color: #F4F4F4;
				border: 1px solid $base-color;
			}
		}

		.cate-item-p {
			display: flex;
			align-items: center;
			text-align: center;
			padding-left: 30upx;
			height: 90rpx;
			font-size: 28upx;
			color: #555;
			position: relative;
		}

		.two {
			height: 64upx;
			color: #303133;
			font-size: 30upx;
		}


	}

	/* 商品列表 */
	.goods-list {
		display: flex;
		flex-wrap: wrap;
		padding: 0 30upx;
		background: #fff;

		.goods-item {
			display: flex;
			flex-direction: column;
			width: 48%;
			padding-bottom: 40upx;

			&:nth-child(2n+1) {
				margin-right: 4%;
			}
		}

		.image-wrapper {
			width: 100%;
			height: 330upx;
			flex-shrink: 0;
			position: relative;
					
			image {
				border-radius: 8upx;
			}
		}

		.title {
			font-size: $font-lg;
			color: $font-color-dark;
		}

		.sub-title {
			font-size: $font-base;
			color: $font-color-dark;
			margin: 15rpx 0rpx 30rpx 0rpx;
		}

		.price-box {
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding-right: 10upx;
			font-size: 24upx;
			color: $font-color-light;
		}

		.price {
			font-size: $font-lg;
			color: $uni-color-primary;
			line-height: 1;

			&:before {
				content: '￥';
				font-size: 26upx;
			}
		}
	}
</style>
