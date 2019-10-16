<template>
	<view class="content" @touchmove.stop.prevent="stopPrevent">
		<image src="/static/state-paysuccess.jpg" mode="aspectFit"></image>
		<text class="tit">支付成功</text>
		<text class="tit-c">恭喜您支付成功</text>
		
		<view class="btn-group">
			<navigator url="/pages/order/order?state=0" open-type="redirect" class="mix-btn">查看订单</navigator>
			<navigator url="/pages/tabBar/home" open-type="switchTab" class="mix-btn hollow">返回首页</navigator>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			stopPrevent() {}
		}
	}
</script>

<style lang='scss'>
	.content{
		display: flex;
		flex-direction: column;
		align-items: center;
		background: #F5F5F5;
		padding-top: 140upx;
		height: 100vh;
		image{
			width: 430rpx;
			height: 430rpx;
		}
	}
	.tit{
		padding: 40upx 0 20upx 0;
		font-size: $font-lg;
		font-weight: 700;
		color:$base-color;
	}
	.tit-c{
		font-size:$font-base;
		color:$font-color-light;
		line-height: 1.8;
	}
	.btn-group{
		padding-top: 100upx;
		width: 580upx;
		flex-direction: row;
		display: flex;
		flex-flow: wrap;
		justify-content: space-between;
	}
	.mix-btn {
		margin-top: 30upx;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 250upx;
		height: 70upx;
		font-size: $font-base;
		color: #fff;
		background-color: $base-color;
		border-radius: 50upx;
		&.hollow{
			background: #fff;
			color: #303133;
			border: 1px solid #ccc;
		}
	}
</style>
