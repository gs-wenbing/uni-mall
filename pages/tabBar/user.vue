<template>
	<view class="container">
		<view class="user-section-bg"></view>
		<view class="user-section">
			<view class="user-info-box">
				<view class="portrait-box">
					<image class="portrait" :src="userInfo.HeadImageUrl || '/static/missing-face.png'"></image>
				</view>
				<view class="info-box">
					<text class="username" @click="navToLogin">{{userInfo.UserName || '去登陆'}}</text>
					<text class="department" v-if="hasLogin">派送方：{{userInfo.DepartmentName}}</text>
					<view v-if="hasLogin">
						<text class="tag-phone">销售经理：{{userInfo.Salesman}}</text>
						<text class="tag-phone">上级领导：{{userInfo.Salessuper}}</text>
					</view>
				</view>
			</view>
			<view class="tj-sction" v-if="hasLogin">
				<view class="tj-item">
					<text class="num">128.8</text>
					<text>余额</text>
				</view>
				<view class="tj-item">
					<text class="num">10</text>
					<text>优惠券</text>
				</view>
			
			</view>
		</view>
		<view class="cover-container">
			<!-- 订单 -->
			<view class="history-section icon">
				<view class="sec-header">
					<text class="sec-header-t">我的订单</text>
				</view>
				<view class="order-section">
					<view class="order-item" @click="navTo('/pages/order/order?state=0')" hover-class="common-hover" :hover-stay-time="50">
						<text class="mallicon icon-shouye"></text>
						<text>未付款</text>
					</view>
					<view class="order-item" @click="navTo('/pages/order/order?state=1')" hover-class="common-hover" :hover-stay-time="50">
						<text class="mallicon icon-daifukuan"></text>
						<text>已受理</text>
					</view>
					<view class="order-item" @click="navTo('/pages/order/order?state=2')" hover-class="common-hover" :hover-stay-time="50">
						<text class="mallicon icon-yishouhuo"></text>
						<text>已发货</text>
					</view>
					<view class="order-item" @click="navTo('/pages/order/order?state=4')" hover-class="common-hover" :hover-stay-time="50">
						<text class="mallicon icon-shouhoutuikuan"></text>
						<text>退货/退款</text>
					</view>
				</view>
			</view>
			<!-- 我的工具 -->
			<view class="history-section icon" v-if="hasLogin">
				<view class="sec-header">
					<text class="sec-header-t">我的工具</text>
				</view>
				<view class="tools-section">
					<view class="tools-item" @click="navTo('/pages/order/order?state=0')" hover-class="common-hover" :hover-stay-time="50">
						<view class="item-img">
							<image style="width: 56upx;height: 74upx;" src="/static/user/bgblock_01.png"></image>
						</view>
						<text>建议订单</text>
					</view>
					<view class="tools-item" @click="navTo('/pages/order/order?state=1')" hover-class="common-hover" :hover-stay-time="50">
						<view class="item-img">
							<image style="width: 72upx;height: 72upx;" src="/static/user/bgblock_02.png"></image>
						</view>
						<text>销售订单</text>
					</view>
					<view class="tools-item" @click="navTo('/pages/order/order?state=2')" hover-class="common-hover" :hover-stay-time="50">
						<view class="item-img">
							<image style="width: 72upx;height: 74upx;" src="/static/user/bgblock_03.png"></image>
						</view>
						<text>客户退单</text>
					</view>
					<view class="tools-item" @click="navTo('/pages/order/order?state=4')" hover-class="common-hover" :hover-stay-time="50">
						<view class="item-img">
							<image style="width: 70upx;height: 70upx;" src="/static/user/bgblock_04.png"></image>
						</view>
						<text>库存管理</text>
					</view>
					<view class="tools-item" @click="navTo('/pages/order/order?state=4')" hover-class="common-hover" :hover-stay-time="50">
						<view class="item-img">
							<image style="width: 66upx;height: 66upx;" src="/static/user/bgblock_05.png"></image>
						</view>
						<text>我的奖励</text>
					</view>
					<view class="tools-item" @click="navTo('/pages/order/order?state=4')" hover-class="common-hover" :hover-stay-time="50">
						<view class="item-img">
							<image style="width: 56upx;height: 74upx;" src="/static/user/bgblock_06.png"></image>
						</view>
						<text>我的账单</text>
					</view>
					<view class="tools-item" @click="navTo('/pages/order/order?state=4')" hover-class="common-hover" :hover-stay-time="50">
						<view class="item-img">
							<image style="width: 68upx;height: 66upx;" src="/static/user/bgblock_07.png"></image>
						</view>
						<text>被拜访记录</text>
					</view>
					<view class="tools-item" @click="navTo('/pages/order/order?state=4')" hover-class="common-hover" :hover-stay-time="50">
						<view class="item-img">
							<image style="width: 80upx;height: 70upx;" src="/static/user/bgblock_08.png"></image>
						</view>
						<text>广告形象</text>
					</view>
					<view class="tools-item" @click="navTo('/pages/order/order?state=4')" hover-class="common-hover" :hover-stay-time="50">
						<view class="item-img">
							<image style="width: 64upx;height: 70upx;" src="/static/user/bgblock_09.png"></image>
						</view>
						<text>合同管理</text>
					</view>
					<view class="tools-item" @click="navTo('/pages/order/order?state=4')" hover-class="common-hover" :hover-stay-time="50">
						<view class="item-img">
							<image style="width: 64upx;height: 64upx;" src="/static/user/bgblock_10.png"></image>
						</view>
						<text>发票管理</text>
					</view>
					<view class="tools-item" @click="navTo('/pages/order/order?state=4')" hover-class="common-hover" :hover-stay-time="50">
						<view class="item-img">
							<image style="width: 56upx;height: 66upx;" src="/static/user/bgblock_11.png"></image>
						</view>
						<text>客户商品价格管理</text>
					</view>
					<view class="tools-item" @click="navTo('/pages/order/order?state=4')" hover-class="common-hover" :hover-stay-time="50">
						<view class="item-img">
							<image style="width: 72upx;height: 68upx;" src="/static/user/bgblock_12.png"></image>
						</view>
						<text>我的卡券</text>
					</view>
					<view class="tools-item"></view>
					<view class="tools-item"></view>
					<view class="tools-item"></view>
					<view class="tools-item"></view>
				</view>
			</view>
		</view>


	</view>
</template>
<script>
	import {
		mapState
	} from 'vuex';
	export default {
		data() {
			return {
				moving: false,
			}
		},
		onLoad() {},
		// #ifndef MP
		onNavigationBarButtonTap(e) {
			const index = e.index;
			if (index === 0) {
				uni.navigateTo({
					url:'/pages/setting/setting'
				})
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
		},
		// #endif
		computed: {
			...mapState(['hasLogin', 'userInfo'])
		},
		methods: {
			refrashUserInfo(){
				
			},
			navToLogin(){
				if (!this.hasLogin) {
					uni.navigateTo({
						url:'/pages/login/login'
					})
				}
			},
			/**
			 * 统一跳转接口,拦截未登录路由
			 * navigator标签现在默认没有转场动画，所以用view
			 */
			navTo(url) {
				if (!this.hasLogin) {
					url = '/pages/login/login';
				}
				uni.navigateTo({
					url
				})
			},
		}
	}
</script>
<style lang='scss'>
	page {
		background: #f5f5f5;
	}

	%flex-center {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	%section {
		display: flex;
		justify-content: space-around;
		align-content: center;
		background: #fff;
		border-radius: 10upx;
	}

	.user-section {
		height: 360upx;
		padding: 30upx 30upx 0;
		margin: 0 30rpx;
		position: relative;
		background-color: #ffffff;
		border-radius: 10rpx;
	}

	.user-section::after {
		position: absolute;
		bottom: -10rpx;
		left: 0;
		right: 0;
		height: 5px;
		background-color: #e9323d;
		content: ' ';
		border-bottom-left-radius: 50rpx;
		border-bottom-right-radius: 50rpx;
	}
	.user-section-bg{
		width: 100%;
		position: absolute;
		height: 50px;
		background-color: #e9323d;
		content: ' ';
		border-bottom-left-radius: 30%;
		border-bottom-right-radius: 30%;
	}
	.user-info-box {
		height: 180upx;
		display: flex;
		align-items: center;
		position: relative;
		z-index: 1;

		.portrait {
			width: 130upx;
			height: 130upx;
			border: 5upx solid #fff;
			border-radius: 50%;
		}
		.info-box{
			display: flex;
			flex-direction: column;
			justify-content: center;
			width: 500upx;
		}
		
		.username {
			font-size: $font-lg;
			color: $font-color-dark;
			margin-left: 20upx;
			/* margin-top: 40upx */
		}

		.department {
			font-size: $font-sm;
			color: $font-color-base;
			margin-left: 20upx;
			line-height: 2.8;
		}
		
		.tag-phone {
			font-size: $font-sm;
			color: $font-color-base;
			margin-left: 10upx;
			margin-right: 20upx;
			padding: 8upx 15upx;
			text-align: center;
			color: #fff;
			border-radius: 20px;
			background: linear-gradient(left, #F96D73, #F3475C);
		}
	}

	.tj-sction {
		@extend %section;
		justify-content: space-between;
		margin-top: 10rpx;
		padding: 0 40rpx;
		.tj-item {
			@extend %flex-center;
			flex-direction: column;
			height: 140upx;
			font-size: $font-sm;
			color: #75787d;
		}

		.num {
			font-size: $font-lg;
			color: $font-color-dark;
			margin-bottom: 8upx;
		}
	}

	.cover-container {
		background: $page-color-base;
		margin-top: 30rpx;
		position: relative;
		background: #f5f5f5;
		padding-bottom: 20upx;

		.arc {
			position: absolute;
			left: 0;
			top: -34upx;
			width: 100%;
			height: 36upx;
		}
	}


	.order-section {
		@extend %section;
		padding: 28upx 0;
		margin-top: 10upx;

		.order-item {
			@extend %flex-center;
			width: 120upx;
			height: 120upx;
			border-radius: 10upx;
			font-size: $font-sm;
			color: $font-color-dark;
		}

		.mallicon {
			font-size: 66upx;
			margin-bottom: 10upx;
			color: #8F9298;
		}

		.icon-shouhoutuikuan {
			font-size: 62upx;
		}
	}

	.tools-section {
		@extend %section;
		padding: 28upx 0;
		width: 100%;
		flex-wrap: wrap;
		margin-top: -20upx;

		.tools-item {
			@extend %flex-center;
			margin-top: 50upx;
			width: 173.5upx;
			align-items: center;
			font-size: $font-sm;
			color: $font-color-dark;

			.item-img {
				@extend %flex-center;
				height: 80upx;
			}
		}

		text {
			@extend %flex-center;
			margin-top: 30upx;
			width: 173.5upx;
			white-space: nowrap;
		}

	}

	.history-section {
		padding: 30upx 0 0;
		margin-top: 20upx;
		background: #fff;
		border-radius: 10upx;

		.sec-header {
			display: flex;
			align-items: center;
			font-size: $font-base;
			color: $font-color-dark;
			line-height: 40upx;
			margin-left: 30upx;

			.sec-header-t {
				font-size: $font-lg;
				color: $font-color-dark;
			}
		}
	}
</style>
