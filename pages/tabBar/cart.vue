<template>
	<view class="container">
		<!-- 空白页 -->
		<view v-if="!hasLogin || empty===true" class="empty">
			<image src="/static/state-cartempty.jpg" mode="aspectFit"></image>
			<view v-if="hasLogin" class="empty-tips">
				购物车空空如也
				<navigator class="navigator" v-if="hasLogin" url="home" open-type="switchTab">随便逛逛</navigator>
			</view>
			<view v-else class="empty-tips">
				购物车空空如也
				<view class="navigator" @click="navToLogin">去登陆</view>
			</view>
		</view>
		<view v-else>
			<!-- 列表 -->
			<view class="cart-list">
				<block v-for="(item, index) in cartList" :key="item.GoodsID">
					<view class="cart-item" :class="{'b-b': index!==cartList.length-1}">
						<view class="image-wrapper">
							<image :src="item.ImagePath" :class="[item.loaded]" mode="aspectFill" lazy-load @load="onImageLoad('cartList', index)"
							 @error="onImageError('cartList', index)"></image>
							<view class="yticon icon-xuanzhong2 checkbox" :class="{checked: item.checked}" @click="check('item', index)"></view>
						</view>
						<view class="item-right">
							<text class="clamp title">{{item.GoodsName}}</text>
							<view class="attr-box">
								<text class="attr">{{item.GoodsModel}}</text>
								<text class="attr">{{item.GoodsAttrVal}}</text>
							</view>
							
							<view class="price-box">
								<text class="price">¥{{item.Price}}</text>
								<uni-number-box class="step" :min="1" :max="item.Stock" :value="item.CartNum>item.Stock?item.Stock:item.CartNum"
								 :isMax="item.CartNum>=item.Stock?true:false" :isMin="item.CartNum===1" :index="index" @eventChange="numberChange"></uni-number-box>
							</view>
						</view>
					</view>
				</block>
			</view>
			<!-- 底部菜单栏 -->
			<view class="action-section">
				<view class="checkbox">
					<image :src="allChecked?'/static/selected.png':'/static/select.png'" mode="aspectFit" @click="check('all')"></image>
					<view class="selected-all-btn" @click="check('all')">
						全选
					</view>
				</view>
				<view class="total-box">
					<text class="price">合计：¥ {{total}}</text>
				</view>
				<button type="primary" class="no-border confirm-btn" @click="createOrder">去结算（{{cartNum}}）</button>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex';
	import uniNumberBox from '@/components/uni-number-box.vue'
	export default {
		components: {
			uniNumberBox
		},
		data() {
			return {
				total: 0, //总价格
				allChecked: false, //全选状态  true|false
				empty: false, //空白页现实  true|false
				cartList: [],
			};
		},
		onLoad() {
			this.loadData();
		},
		watch: {
			//显示空白页
			cartList(e) {
				let empty = e.length === 0 ? true : false;
				if (this.empty !== empty) {
					this.empty = empty;
				}
			}
		},
		computed: {
			...mapState(['hasLogin']),
			cartNum() {
				let list = this.cartList;
				let num = 0;
				list.forEach(item => {
					if (item.checked === true) {
						num++;
					}
				})
				return num;
			}
		},
		methods: {
			//请求数据
			async loadData() {
				let result = await this.$api.callApix({
					param:"",
					action:"home/getCartList"
				});
				let cartList = [];
				if(result.IsSuccess){
					cartList = result.data.map(item => {
						item.checked = true;
						return item;
					});
				}
				
				this.cartList = cartList;
				this.calcTotal(); //计算总价
			},
			//监听image加载完成
			onImageLoad(key, index) {
				this.$set(this[key][index], 'loaded', 'loaded');
			},
			//监听image加载失败
			onImageError(key, index) {
				this[key][index].ImagePath = '/static/errorImage.jpg';
			},
			navToLogin() {
				uni.navigateTo({
					url: '/pages/login/login'
				})
			},
			//选中状态处理
			check(type, index) {
				if (type === 'item') {
					this.cartList[index].checked = !this.cartList[index].checked;
				} else {
					const checked = !this.allChecked
					const list = this.cartList;
					list.forEach(item => {
						item.checked = checked;
					})
					this.allChecked = checked;
				}
				this.calcTotal(type);
			},
			//数量
			numberChange(data) {
				this.cartList[data.index].CartNum = data.CartNum;
				this.calcTotal();
			},
			//删除
			deleteCartItem(index) {
				let list = this.cartList;
				let row = list[index];
				let GoodsID = row.GoodsID;

				this.cartList.splice(index, 1);
				this.calcTotal();
				uni.hideLoading();
			},
			//清空
			clearCart() {
				uni.showModal({
					content: '清空购物车？',
					success: (e) => {
						if (e.confirm) {
							this.cartList = [];
						}
					}
				})
			},
			//计算总价
			calcTotal() {
				let list = this.cartList;
				if (list.length === 0) {
					this.empty = true;
					return;
				}
				let total = 0;
				let checked = true;
				list.forEach(item => {
					if (item.checked === true) {
						total += Number(item.Price) * Number(item.CartNum);
					} else if (checked === true) {
						checked = false;
					}
				})
				this.allChecked = checked;
				this.total = Number(total.toFixed(2));
			},
			//创建订单
			createOrder() {
				let list = this.cartList;
				let goodsData = [];
				list.forEach(item => {
					if (item.checked) {
						goodsData.push({
							attr_val: item.GoodsModel,
							CartNum: item.CartNum
						})
					}
				})

				// uni.navigateTo({
				// 	url: `/pages/order/createOrder?data=${JSON.stringify({
				// 		goodsData: goodsData
				// 	})}`
				// })
				this.$api.msg('跳转下一页 sendData');
			}
		}
	}
</script>

<style lang='scss'>
	.container {
		padding-bottom: 134upx;

		/* 空白页 */
		.empty {
			position: fixed;
			left: 0;
			top: 0;
			width: 100%;
			height: 100vh;
			padding-bottom: 100upx;
			display: flex;
			justify-content: center;
			flex-direction: column;
			align-items: center;
			background: #F5F5F5;

			image {
				width: 430rpx;
				height: 430rpx;
				margin-bottom: 30upx;
			}

			.empty-tips {
				font-size: $font-lg+2upx;
				font-weight: 700;
				color: $uni-color-primary;

				.navigator {
					color: $font-color-white;
					font-size: $font-base;
					font-weight: 100;
					margin-left: 36rpx;
					background-color: $uni-color-primary;
					display: flex;
					justify-content: center;
					align-items: center;
					margin-top: 60rpx;
					width: 160rpx;
					height: 64rpx;
					border-radius: 50upx;
				}
			}
		}
	}

	/* 购物车列表项 */
	.cart-item {
		display: flex;
		position: relative;
		padding: 30upx 40upx;

		.image-wrapper {
			width: 220upx;
			height: 220upx;
			flex-shrink: 0;
			position: relative;

			image {
				border-radius: 8upx;
			}
		}

		.checkbox {
			position: absolute;
			left: -16upx;
			top: -16upx;
			z-index: 8;
			font-size: 44upx;
			line-height: 1;
			padding: 4upx;
			color: $font-color-disabled;
			background: #fff;
			border-radius: 50px;
		}

		.item-right {
			display: flex;
			flex-direction: column;
			flex: 1;
			position: relative;
			padding-left: 30upx;

			.title,
			.price {
				word-wrap:break-word;
				word-break:break-all;
				white-space:pre-wrap;
				font-size: $font-base + 2upx;
				color: $font-color-dark;
				line-height: 1.6;
			}
			.attr-box{
				flex: 1;
				display: flex;
				flex-direction: row;
				
				.attr {
					font-size: $font-sm + 2upx;
					color: $font-color-light;
					height: 50upx;
					line-height: 50upx;
					margin-right: 20rpx;
				}
			}
			.price-box {
				flex: 1;
				display: flex;
				flex-direction: row;
				align-items: center;
				justify-content:space-between;
				.price {
					height: 50upx;
					line-height: 50upx;
				}
				
				.step{
					
				}
			}
			
		}

	}

	/* 底部栏 */
	.action-section {
		/* #ifdef H5 */
		margin-bottom: 100upx;
		/* #endif */
		position: fixed;
		bottom: 0rpx;
		z-index: 95;
		display: flex;
		align-items: center;
		width: 750upx;
		height: 100upx;
		padding: 0 30upx;
		background: rgba(255, 255, 255, .9);
		box-shadow: 0 0 10upx 0 rgba(0, 0, 0, .5);

		.checkbox {
			height: 42upx;
			position: relative;

			image {
				width: 42upx;
				height: 100%;
				position: relative;
				z-index: 5;
			}
		}

		.selected-all-btn {
			position: absolute;
			left: 26upx;
			top: 0;
			z-index: 4;
			width: 0;
			height: 42upx;
			line-height: 42upx;
			padding-left: 38upx;
			font-size: $font-lg;
			color: $font-color-dark;
			width: 120upx;
		}

		.total-box {
			flex: 1;
			display: flex;
			flex-direction: row;
			text-align: left;
			font-size: $font-lg;
			margin-left: 120upx;

			.price {
				font-size: $font-lg;
				color: $font-color-dark;
			}
		}

		.confirm-btn {
			border-radius: 100px;
			height: 64rpx;
			line-height: 64rpx;
			font-size: $font-base + 2upx;
			background: $uni-color-primary;
			box-shadow: 1px 2px 5px rgba(217, 60, 93, 0.72)
		}
	}

	/* 复选框选中状态 */
	.action-section .checkbox.checked,
	.cart-item .checkbox.checked {
		color: $uni-color-primary;
	}
</style>
