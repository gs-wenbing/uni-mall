<template>
	<view class="content">
		<view class="row b-b">
			<text class="tit">联系人</text>
			<input class="input" type="text" v-model="addressData.RecieveName" placeholder="收货人姓名" placeholder-class="placeholder" />
		</view>
		<view class="row b-b">
			<text class="tit">手机号</text>
			<input class="input" type="number" v-model="addressData.MobilePhone" placeholder="收货人手机号码" placeholder-class="placeholder" />
		</view>
		<view class="row b-b">
			<text class="tit">地址</text>
			<input @click="togglePopup('show')" class="input" disabled v-model="addressData.Address" placeholder="省市区县、乡镇等" placeholder-class="placeholder" />
			<!-- <text class="input">
				{{addressData.Address}}、
			</text> -->
			<text class="yticon icon-shouhuodizhi" @click="chooseLocation" ></text>
		</view>
		<view class="row b-b"> 
			<text class="tit">门牌号</text>
			<input class="input" type="text" v-model="addressData.AddressDetail" placeholder="楼号、门牌" placeholder-class="placeholder" />
		</view>
		
		<view class="row default-row">
			<text class="tit">设为默认</text>
			<switch :checked="addressData.IsDefault==1" color="#fa436a" @change="switchChange" />
		</view>
		
		<button class="add-btn" @click="confirm">提交</button>
		
		
		<!-- 地址选择面板 -->
		<view class="mask" @touchmove.stop.prevent="stopPrevent" :class="maskState===0 ? 'none' : maskState===1 ? 'show' : ''"
		 @click="togglePopup">
			<view class="mask-content" @click.stop.prevent="stopPrevent">
				<city-selector @confirm="onCityClick" platform="jd"></city-selector>
			</view>
		</view>
		
		
	</view>
</template>

<script>
	import citySelector from "@/components/city-selector.vue"
	export default {
		components: {
			citySelector
		},
		data() {
			return {
				maskState: 0, //地址选择面板
				manageType:"",
				addressData: {
					AddressID:'',
					RecieveName: '',
					MobilePhone: '',
					Address:"",
					AddressDetail:"",
					IsDefault:0
				}
			}
		},
		onLoad(option){
			let title = '新增收货地址';
			if(option.type==='edit'){
				title = '编辑收货地址'
				this.addressData = this.$api.getExtra(option.data)
			}
			this.manageType = option.type;
			uni.setNavigationBarTitle({
				title
			})
		},
		methods: {
			switchChange(e){
				this.addressData.IsDefault = e.detail.value?1:0;
			},
			//城市地址
			onCityClick(e){
				console.log(JSON.stringify(e))
				this.addressData.Address = e.province.label+e.city.label+e.county.label;
				this.togglePopup()
			},
			togglePopup(type){
				let timer = type === 'show' ? 10 : 300;
				let state = type === 'show' ? 1 : 0;
				this.maskState = 2;
				setTimeout(() => {
					this.maskState = state;
				}, timer)
			},
			
			//地图选择地址
			chooseLocation(){
				uni.chooseLocation({
					success: (data)=> {
						this.addressData.Address = data.name;
					}
				})
			},
			
			//提交
			confirm(){
				let data = this.addressData;
				if(!data.RecieveName){
					this.$api.msg('请填写收货人姓名');
					return;
				}
				if(!/(^1[3|4|5|7|8][0-9]{9}$)/.test(data.MobilePhone)){
					this.$api.msg('请输入正确的手机号码');
					return;
				}
				if(!data.Address){
					this.$api.msg('请在地图选择所在位置');
					return;
				}
				if(!data.AddressDetail){
					this.$api.msg('请填写门牌号信息');
					return;
				}
				
				//this.$api.prePage()获取上一页实例，可直接调用上页所有数据和方法，在App.vue定义
				this.$api.prePage().refreshList();
				this.$api.msg(`地址${this.manageType=='edit' ? '修改': '添加'}成功`);
				setTimeout(()=>{
					uni.navigateBack()
				}, 800)
			},
			stopPrevent() {}
		}
	}
</script>

<style lang="scss">
	page{
		background: $page-color-base;
		padding-top: 16upx;
	}

	.row{
		display: flex;
		align-items: center;
		position: relative;
		padding:0 30upx;
		height: 110upx;
		background: #fff;
		
		.tit{
			flex-shrink: 0;
			width: 120upx;
			font-size: 30upx;
			color: $font-color-dark;
		}
		.input{
			flex: 1;
			font-size: 30upx;
			color: $font-color-dark;
		}
		.icon-shouhuodizhi{
			font-size: 36upx;
			color: $font-color-light;
		}
	}
	.default-row{
		margin-top: 16upx;
		.tit{
			flex: 1;
		}
		switch{
			transform: translateX(16upx) scale(.9);
		}
	}
	.add-btn{
		display: flex;
		align-items: center;
		justify-content: center;
		width: 690upx;
		height: 80upx;
		margin: 60upx auto;
		font-size: $font-lg;
		color: #fff;
		background-color: $base-color;
		border-radius: 10upx;
		box-shadow: 1px 2px 5px rgba(219, 63, 96, 0.4);
	}
	
	/* 地址选择面板 */
	.mask {
		display: flex;
		align-items: flex-end;
		position: fixed;
		left: 0;
		top: var(--window-top);
		bottom: 0;
		width: 100%;
		background: rgba(0, 0, 0, 0);
		z-index: 9995;
		transition: .3s;
	
		.mask-content {
			width: 100%;
			height: 60vh;
			background: #f3f3f3;
			transform: translateY(100%);
			transition: .3s;
		}
	
		&.none {
			display: none;
		}
	
		&.show {
			background: rgba(0, 0, 0, .4);
	
			.mask-content {
				transform: translateY(0);
			}
		}
	}
</style>
