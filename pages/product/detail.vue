<template>
	<view class="container">
		<view class="carousel">
			<swiper indicator-dots circular=true duration="400">
				<swiper-item class="swiper-item" v-for="(GoodsPicURL,index) in GoodsPicURLList" :key="index">
					<view class="image-wrapper">
						<image @click="previewImage" :src="GoodsPicURL.PicURL" :class="[GoodsPicURL.loaded]" mode="aspectFill" lazy-load
						 @load="onImageLoad('GoodsPicURLList', index)" @error="onImageError('GoodsPicURLList', index)"></image>
					</view>
				</swiper-item>
			</swiper>
		</view>

		<view class="introduce-section">
			<text class="title"> {{TransGoods.GoodsName}} </text>
			<view class="price-box">
				<text class="price-tip">¥</text>
				<text class="price">{{TransGoods.Price}}</text>
				<text class="m-price" v-if="TransGoods.OldPrice > TransGoods.Price">¥{{TransGoods.OldPrice}}</text>
				<text class="coupon-tip" v-if="TransGoods.SaleDiscount">{{TransGoods.SaleDiscount}}折</text>
			</view>
			<view class="bot-row">
				<text>销量: 108</text>
				<text>库存: 4690</text>
				<text>浏览量: 768</text>
			</view>
		</view>

		<!--  分享 -->
		<view class="active-section">
			<text class="active-t"> 满额 </text>
			<text class="tit">{{GoodsDetail.ReductionStr}}</text>
		</view>

		<view class="c-list">
			<view class="c-row b-b">
				<text class="tit">服务</text>
				<view class="bz-list con">
					<text>7天无理由退换货 ·</text>
					<text>假一赔十 ·</text>
				</view>
			</view>
			<view class="c-row b-b">
				<text class="tit">属性</text>
				<view class="attr-tag">
					<text v-for="(GoodsSku, index) in GoodsSkuList" :key="index">
						{{GoodsSku.GoodsAttributesValueName}}
					</text>

				</view>
			</view>
			<view class="c-row b-b">
				<text class="tit">包装</text>
				<view class="attr-tag">
					<text v-for="(GoodsUnit, index) in GoodsUnitTemplateList" :key="index">
						{{GoodsUnit.UnitTemplateDes}}
					</text>
				</view>
			</view>

			<view class="c-row b-b">
				<text class="tit">购买数量</text>
				<uni-number-box class="step"></uni-number-box>
			</view>
			<view class="c-row">
				<text class="tit">商品买点</text>
				<text class="tit-desc">{{GoodsDetail.GoodsSalePoint}}</text>
			</view>
			<view class="c-row">
				<text class="tit">产品型号</text>
				<text class="tit-desc">{{GoodsDetail.GoodsModel}}</text>
			</view>
			<view class="c-row b-b">
				<text class="tit">产品规格</text>
				<text class="tit-desc">{{GoodsDetail.GoodsUnitTemplateDes}}</text>
			</view>
		</view>

		<!-- 评价 -->
		<view class="eva-section">
			<view class="e-header">
				<text class="tit">评价</text>
				<text>(86)</text>
				<text class="tip">好评率 100%</text>
				<text class="mallicon icon-you"></text>
			</view>
			<view class="eva-box">
				<image class="portrait" src="http://img3.imgtn.bdimg.com/it/u=1150341365,1327279810&fm=26&gp=0.jpg" mode="aspectFill"></image>
				<view class="right">
					<text class="name">Leo yo</text>
					<text class="con">商品收到了，79元两件，质量不错，试了一下有点瘦，但是加个外罩很漂亮，我很喜欢</text>
					<view class="bot">
						<text class="attr">购买类型：240PCS/盒 红色</text>
						<text class="time">2019-04-01 19:21</text>
					</view>
				</view>
			</view>
		</view>

		<view class="detail-desc">
			<view class="d-header">
				<text>图文详情</text>
			</view>
			<rich-text :nodes="GoodsDetail.GoodsDesc"></rich-text>
		</view>

		<!-- 底部操作菜单 -->
		<view class="page-bottom">
			<navigator url="/pages/tabBar/home" open-type="switchTab" class="p-b-btn">
				<text class="mallicon icon-xiatubiao--copy"></text>
				<text>首页</text>
			</navigator>
			<navigator url="/pages/tabBar/cart" open-type="switchTab" class="p-b-btn">
				<text class="num" v-if="cartNum">{{cartNum}}</text>
				<text class="mallicon icon-gouwuche" :class="{gouwuche:cartNum>0}"></text>
				<text>购物车</text>
			</navigator>
			<view class="p-b-btn" :class="{active: favorite}" @click="toFavorite">
				<text class="mallicon icon-shoucang"></text>
				<text>收藏</text>
			</view>

			<view class="action-btn-group">
				<button type="primary" class=" action-btn no-border add-cart-btn" @click="addCart">加入购物车</button>
				<button type="primary" class=" action-btn no-border buy-now-btn" @click="buy">立即购买</button>
			</view>
		</view>
	</view>
</template>

<script>
	import uniNumberBox from '@/components/uni-number-box.vue'
	export default {
		components: {
			uniNumberBox
		},
		data() {
			return {
				specSelected: [],
				favorite: true,
				cartNum: 0,
				TransGoods: {},
				GoodsDetail: {},
				GoodsPicURLList: [],
				GoodsSkuList: [],
				GoodsUnitTemplateList: []
			};
		},
		async onLoad(options) {
			//接收传值goods
			let goods = options.goods;
			this.TransGoods = this.$utils.getExtra(goods);
			this.loadData();
		},
		methods: {
			//请求数据
			loadData() {
				this.$Request.get(this.$api.goods.getGoodsDetail).then(res => {
					//描述图片信息
					var GoodsDesc = decodeURIComponent(res.data.GoodsDetail.GoodsDesc);
					GoodsDesc = GoodsDesc.replace(new RegExp("{IMGIP}", 'g'), "res.genvana.cn").replace(new RegExp("<img ", 'g'),
						'<img style="width:100%;display:block;" ');
					res.data.GoodsDetail.GoodsDesc = GoodsDesc;
					
					this.GoodsDetail = res.data.GoodsDetail;
					this.GoodsPicURLList = res.data.GoodsPicURLList;
					//为了测试详情页的图片不一样，正在项目里是不要的
					this.GoodsPicURLList.unshift({
						PicURL:this.TransGoods.DefaultPicURL
					});
					this.GoodsSkuList = res.data.GoodsSkuList;
					this.GoodsUnitTemplateList = res.data.GoodsUnitTemplateList;
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
				this[key][index].PicURL = '/static/errorImage.jpg';
			},
			/**
			 * 预览图片
			 */
			previewImage() {
				let PicURLList = [];
				this.GoodsPicURLList.forEach(item => {
					PicURLList.push(item.PicURL);
				})
				uni.previewImage({
					urls: PicURLList,
					longPressActions: {
						itemList: ['保存图片', '收藏'],
						success: function(data) {
							if (data.tapIndex == 0) {
								uni.showNavigationBarLoading()
								//下载文件
								uni.downloadFile({
									url: PicURLList[data.index],
									success: (res) => {
										console.log(JSON.stringify(res));
										if (res.statusCode === 200) {
											//保存到相册
											uni.saveImageToPhotosAlbum({
												filePath: res.tempFilePath,
												success: function() {
													console.log('save success');
													uni.hideNavigationBarLoading();
												}
											});
										}
									}
								});

							}
							console.log('选中了第' + (data.tapIndex + 1) + '个按钮,第' + (data.index + 1) + '张图片');
						},
						fail: function(err) {
							console.log(err.errMsg);
						}
					}
				});
			},
			//选择规格
			selectSpec(index, pid) {
				let list = this.GoodsUnitTemplateList;
				list.forEach(item => {
					if (item.pid === pid) {
						this.$set(item, 'selected', false);
					}
				})

				this.$set(list[index], 'selected', true);
				//存储已选择
				/**
				 * 修复选择规格存储错误
				 * 将这几行代码替换即可
				 * 选择的规格存放在specSelected中
				 */
				this.specSelected = [];
				list.forEach(item => {
					if (item.selected === true) {
						this.specSelected.push(item);
					}
				})

			},
			//收藏
			toFavorite() {
				this.favorite = !this.favorite;
			},
			buy() {
				//为了模拟数据，正常项目里按照业务传值
				let data = [];
				this.TransGoods.CartNum = 1;
				data.push(this.TransGoods);
				uni.navigateTo({
					url: `/pages/order/placeOrder?data=${this.$utils.putExtra(data)}`
				})
			},
			addCart() {
				this.cartNum++;
				this.$utils.showMsg("添加成功！在购物车等亲")
			},
			stopPrevent() {}
		},

	}
</script>

<style lang='scss'>
	page {
		background: $page-color-base;
		padding-bottom: 160upx;
	}

	.icon-you {
		font-size: $font-base + 2upx;
		color: #888;
	}

	.carousel {
		height: 722upx;
		position: relative;

		swiper {
			height: 100%;
		}

		.image-wrapper {
			width: 100%;
			height: 100%;
		}

		.swiper-item {
			display: flex;
			justify-content: center;
			align-content: center;
			height: 750upx;
			overflow: hidden;

			image {
				width: 100%;
				height: 100%;
			}
		}

	}

	/* 标题简介 */
	.introduce-section {
		background: #fff;
		padding: 20upx 30upx;

		.title {
			font-size: 32upx;
			color: $font-color-dark;
			height: 50upx;
			line-height: 50upx;
		}

		.price-box {
			display: flex;
			align-items: baseline;
			height: 64upx;
			padding: 10upx 0;
			font-size: 26upx;
			color: $uni-color-primary;
		}

		.price {
			font-size: $font-lg + 2upx;
		}

		.m-price {
			margin: 0 32upx;
			color: $font-color-light;
			text-decoration: line-through;
		}

		.coupon-tip {
			align-items: center;
			padding: 4upx 10upx;
			background: $uni-color-primary;
			font-size: $font-sm;
			color: #fff;
			border-radius: 6upx;
			line-height: 1;
			transform: translateY(-4upx);
		}

		.bot-row {
			display: flex;
			align-items: center;
			height: 50upx;
			font-size: $font-sm;
			color: $font-color-light;

			text {
				flex: 1;
			}
		}
	}

	/* 活动 */
	.active-section {
		display: flex;
		justify-content: space-between;
		align-items: center;
		color: $font-color-base;
		background: linear-gradient(left, #fdf5f6, #fbebf6);
		padding: 12upx 30upx;

		.active-t {
			padding: 4upx 15upx;
			align-items: center;
			background: $uni-color-primary;
			border: 1px solid $uni-color-primary;
			font-size: $font-sm;
			color: #fff;
			border-radius: 6upx;
			text-align: center;
		}

		.tit {
			width: 560rpx;
			font-size: $font-sm;
		}
	}

	.c-list {
		font-size: $font-sm + 2upx;
		color: $font-color-base;
		background: #fff;

		.c-row {
			display: flex;
			align-items: center;
			padding: 20upx 30upx;
			position: relative;
		}

		.bz-list {
			height: 40upx;
			font-size: $font-sm+2upx;
			display: flex;
			align-items: center;
			color: $font-color-dark;

			text {
				display: inline-block;
				margin-right: 30upx;
			}
		}

		.tit {
			width: 140upx;
		}

		.attr-tag {
			display: flex;
			align-items: center;
			justify-content: flex-start;
			font-size: $font-sm +2upx;
			color: $font-color-base;
			flex-wrap: wrap;
			width: 546rpx;

			text {
				background-color: #F1F1F1;
				border: 1px solid #E0E0E0;
				border-radius: 50rpx;
				margin: 15rpx 15rpx 15rpx 0rpx;
				padding: 12rpx 38rpx;
			}
		}

		.tit-desc {
			width: 560rpx;
			font-size: $font-base;
		}

		.con {
			flex: 1;
			color: $font-color-dark;

			.selected-text {
				margin-right: 10upx;
			}
		}

		.con-list {
			flex: 1;
			display: flex;
			flex-direction: column;
			color: $font-color-dark;
			line-height: 40upx;
		}
	}

	/* 评价 */
	.eva-section {
		display: flex;
		flex-direction: column;
		padding: 20upx 30upx;
		background: #fff;
		margin-top: 16upx;

		.e-header {
			display: flex;
			align-items: center;
			height: 70upx;
			font-size: $font-sm + 2upx;
			color: $font-color-light;

			.tit {
				font-size: $font-base + 2upx;
				color: $font-color-dark;
				margin-right: 4upx;
			}

			.tip {
				flex: 1;
				text-align: right;
			}

			.icon-you {
				margin-left: 10upx;
			}
		}
	}

	.eva-box {
		display: flex;
		padding: 20upx 0;

		.portrait {
			flex-shrink: 0;
			width: 80upx;
			height: 80upx;
			border-radius: 100px;
		}

		.right {
			flex: 1;
			display: flex;
			flex-direction: column;
			font-size: $font-base;
			color: $font-color-base;
			padding-left: 26upx;

			.con {
				font-size: $font-base;
				color: $font-color-dark;
				padding: 20upx 0;
			}

			.bot {
				display: flex;
				justify-content: space-between;
				font-size: $font-sm;
				color: $font-color-light;
			}
		}
	}

	/*  详情 */
	.detail-desc {
		background: #fff;
		margin-top: 16upx;

		.d-header {
			display: flex;
			justify-content: center;
			align-items: center;
			height: 80upx;
			font-size: $font-base + 2upx;
			color: $font-color-dark;
			position: relative;

			text {
				padding: 0 20upx;
				background: #fff;
				position: relative;
				z-index: 1;
			}

			&:after {
				position: absolute;
				left: 50%;
				top: 50%;
				transform: translateX(-50%);
				width: 300upx;
				height: 0;
				content: '';
				border-bottom: 1px solid #ccc;
			}
		}
	}

	/* 底部操作菜单 */
	.page-bottom {
		position: fixed;
		bottom: 0;
		z-index: 95;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 750upx;
		height: 100upx;
		background: rgba(255, 255, 255, .9);
		box-shadow: 0 0 20upx 0 rgba(0, 0, 0, .5);

		.p-b-btn {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			font-size: $font-sm;
			color: $font-color-base;
			width: 96upx;
			height: 80upx;

			.gouwuche {
				margin-top: -20upx;
			}

			.num {
				position: relative;
				background: $uni-color-primary;
				border: 1px solid $uni-color-primary;
				text-align: center;
				margin-top: -10rpx;
				margin-left: 40rpx;
				font-size: 8px;
				width: 30upx;
				height: 30upx;
				line-height: 30upx;
				color: #fff;
				border-radius: 50%;
			}

			.mallicon {
				font-size: 40upx;
				line-height: 48upx;
				color: $font-color-light;
			}

			&.active,
			&.active .mallicon {
				color: $uni-color-primary;
			}

			.icon-fenxiang2 {
				font-size: 42upx;
				transform: translateY(-2upx);
			}

			.icon-shoucang {
				font-size: 46upx;
			}
		}

		.action-btn-group {
			display: flex;
			height: 76upx;
			border-radius: 100px;
			overflow: hidden;
			box-shadow: 0 20upx 40upx -16upx #fa436a;
			box-shadow: 1px 2px 5px rgba(219, 63, 96, 0.4);
			background: linear-gradient(to right, #ffac30, #fa436a, #F56C6C);
			margin-left: 20upx;
			position: relative;

			&:after {
				content: '';
				position: absolute;
				top: 50%;
				right: 50%;
				transform: translateY(-50%);
				height: 28upx;
				width: 0;
				border-right: 1px solid rgba(255, 255, 255, .5);
			}

			.action-btn {
				display: flex;
				align-items: center;
				justify-content: center;
				width: 180upx;
				height: 100%;
				font-size: $font-base;
				padding: 0;
				border-radius: 0;
				background: transparent;
			}
		}
	}
</style>
