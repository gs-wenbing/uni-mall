<template>
	<view class="city-selector">
		<view class="has-choose-box flex-row pad-left">
			<text class="has-choose" :class="index==showRank?'active':''" v-for="(item,index) in cityList" :key="index" @click="onRankClick(index)"
			 v-show="index<=showRank">{{item.name!='0'?item.name:'请选择'}}</text>
		</view>
		<view>
			<scroll-view class="city-item-box" scroll-y="true">
				<view class="city-item pad-left flex-row" :class="item.value==valueObj[cityList[showRank].identify].value?'active':''"
				 v-for="(item,index) in cityList[showRank].showList" :key="index" @click="onChooseClick(item)">
					<view>{{item.label}}</view>
					<view v-if="item.value==valueObj[cityList[showRank].identify].value">
					</view>
				</view>
				<view class="city-item pad-left flex-row" @click="onChooseClick(other)" v-if="showRank>1">
					<view>其它(如没有你的镇区，街道请在详细地址输入)</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import cityData from '../lib/city.data.js';
	export default {
		name: 'city-selector',
		data() {
			return {
				other: {
					label: "",
					value: '0'
				},
				showRank: 0,
				cityList: [{
						identify: 'province',
						name: '0',
						showList: cityData[this.platform]
					},
					{
						identify: 'city',
						name: '0',
						showList: []
					},
					{
						identify: 'county',
						name: '0',
						showList: []
					},
					{
						identify: 'town',
						name: '0',
						showList: []
					}
				],
				valueObj: {
					province: {
						label: '',
						value: '0'
					},
					city: {
						label: '',
						value: '0'
					},
					county: {
						label: '',
						value: '0'
					},
					town: {
						label: '',
						value: '0'
					},
				}
			};
		},
		props: {
			platform: String,
			default: 'jd'
		},
		methods: {
			onChooseClick(item) {
				if (item.childrens != '' && item.childrens) {
					this.valueObj[this.cityList[this.showRank].identify].label = item.label;
					this.valueObj[this.cityList[this.showRank].identify].value = item.value;
					this.cityList[this.showRank].name = item.label;
					this.showRank++;
					this.cityList[this.showRank].showList = item.childrens;
				} else {
					this.valueObj.town.label = '';
					this.valueObj.town.value = '0';
					this.valueObj[this.cityList[this.showRank].identify].label = item.label;
					this.valueObj[this.cityList[this.showRank].identify].value = item.value;
					this.$emit('confirm', this.valueObj);
				}
			},
			onRankClick(key) {
				this.showRank = key;
			},
		},
		computed: {

		}


	}
</script>

<style lang="scss">
	.city-selector {
		display: flex;
		flex-direction: column;
		font-size: $font-base;
		background-color: #fff;
	}
	.flex-row{
		display: flex;
		flex-direction: row;
		align-content: center;
	}
	.pad-left{
		padding-left: 40upx;
	}
	.has-choose-box {
		box-shadow: 0 3upx 3upx #f1f1f1;
	}

	.has-choose {
		margin-right: 50upx;
		padding: 20upx 0upx 20upx 0upx;
		border-bottom: 2px solid #fff; 
	}

	.has-choose.active {
		font-size: 32upx;
		font-weight: 700;
		color:$uni-color-primary;
		border-color:$uni-color-primary;
	}

	.city-item-box {
		height: 60vh;
	}

	.city-item {
		padding: 20upx 0upx 20upx 40upx;
		border-bottom: 1upx solid #f5f5f5;
	}

	.city-item view {
		justify-content: center;
	}

	.city-item.active {
		color: $uni-color-primary;
		font-size: 32upx;
		font-weight: 700;
	}
</style>
