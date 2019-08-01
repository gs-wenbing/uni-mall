<template>
	<view class="content b-t">
		<view class="list b-b" v-for="(item, index) in addressList" :key="index" @click="checkAddress(item)">
			<view v-if="AddressID == item.AddressID" class="yticon icon-xuanzhong2 checkbox checked"></view>
			<view class="wrapper">
				<view class="u-box">
					<text class="name">{{item.RecieveName}}</text>
					<text class="mobile">{{item.MobilePhone}}</text>
					<text v-if="item.IsDefault==1" class="tag">默认</text>
				</view>
				<view class="address-box">
					<text class="address">{{item.Address}} {{item.AddressDetail}}</text>
				</view>
			</view>
			<text class="yticon icon-bianji" @click.stop="addAddress('edit', item)"></text>
		</view>
		
		<button class="add-btn" @click="addAddress('add')">新增地址</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				AddressID: 0,
				addressList: []
			}
		},
		onLoad(option){
			console.log(option.AddressID);
			this.AddressID = option.AddressID;
			this.loadData();
		},
		methods: {
			async loadData() {
				let result = await this.$api.callApix({
					param: "",
					action: "address/getAddressList"
				});
				if (result.IsSuccess) {
					if(!this.AddressID && this.AddressID!=0){
						let currAddress = result.data[0];
						for (let i = 0; i < result.data.length; i++) {
							let item = result.data[i];
							if (item.AddressID == this.AddressID) {
								currAddress = item;
								result.data.splice(i, 1); // 如果数据组存在该元素，则把该元素删除
								break;
							}
						}
						result.data.unshift(currAddress); // 再添加到第一个位置
					}
					this.addressList = result.data;
				}
			},
			//选择地址
			checkAddress(item){
				if(!this.AddressID && this.addressID !=0){
					//this.$api.prePage()获取上一页实例，在App.vue定义
					this.$api.prePage().addressData = item;
					uni.navigateBack()
				}
			},
			addAddress(type, item){
				uni.navigateTo({
					url: `/pages/address/addressEdit?type=${type}&data=${this.$api.putExtra(item)}`
				})
			},
			//添加或修改成功之后回调
			refreshList(){
				this.loadData();
			}
		}
	}
</script>

<style lang='scss'>
	page{
		padding-bottom: 120upx;
	}
	.content{
		position: relative;
	}
	.list{
		display: flex;
		align-items: center;
		padding: 30upx 30upx 30upx 10upx;
		background: #fff;
		position: relative;
	}
	.checkbox.checked {
		margin-left: 20rpx;
		color: $uni-color-primary;
	}
	.wrapper{
		margin-left: 30upx;
		display: flex;
		flex-direction: column;
		flex: 1;
	}
	.u-box{
		
		font-size: 30upx;
		color: $font-color-dark;
		.name{
			margin-right: 30upx;
		}
		.tag{
			font-size: 24upx;
			color: $base-color;
			margin-left: 30upx;
			color: #fff;
			background: $base-color;
			border: 1px solid $base-color;
			border-radius: 4upx;
			padding: 2upx 10upx;
			line-height: 1;
		}
	}
	.address-box{
		display: flex;
		align-items: center;
		font-size: 26upx;
		color: $font-color-light;
		margin-top: 24upx;
	}
	.icon-bianji{
		display: flex;
		align-items: center;
		height: 80upx;
		font-size: 40upx;
		color: $font-color-light;
		padding-left: 30upx;
	}
	
	.add-btn{
		position: fixed;
		left: 30upx;
		right: 30upx;
		bottom: 16upx;
		z-index: 95;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 690upx;
		height: 80upx;
		font-size: 32upx;
		color: #fff;
		background-color: $base-color;
		border-radius: 10upx;
		box-shadow: 1px 2px 5px rgba(219, 63, 96, 0.4);		
	}
</style>
