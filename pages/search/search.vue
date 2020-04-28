<template>
	<view class="box-padding">
		<view class="f-header m-t">
			<text class="tit">搜索历史</text>
			<text class="mallicon icon-fork"></text>
		</view>
		<view class="tag-section">
			<text @click="navTo('搜索历历史')">
				搜索历历史111
			</text>
		</view>
		<view class="f-header m-t">
			<text class="tit">搜索发现</text>
			<text class="mallicon icon-dizhi"></text>
		</view>
		<view class="tag-section">
			<text @click="navTo(tag.tagName)" v-for="(tag, index) in tagList" :key="index" >
				{{tag.tagName}}
			</text>
		</view>
	</view>
</template>
<script>
export default {
	data() {
		return {
			tagList: [],
			searchKey:''
		};
	},
	onLoad(options) {
		// #ifdef APP-PLUS  
		// https://uniapp.dcloud.io/collocation/pages?id=app-titlenview-searchinput
		// 动态修改原生导航栏: https://ask.dcloud.net.cn/article/35374
		this.searchKey = options.key;
		if(this.searchKey){
			var webView = this.$mp.page.$getAppWebview();
			webView.setTitleNViewSearchInputText(this.searchKey); 
			webView.setTitleNViewSearchInputFocus(true); 
		}
		// #endif  
		
		this.loadData();
	},
	methods: {
		loadData() {
			this.$Request.get(this.$api.home.getSearchTags).then(res => {
				this.tagList = res.data;
			},err => {
				console.log("err: " + JSON.stringify(err));
			});
		},
		navTo(tagName) {
			uni.redirectTo({
				url:'../product/list?key='+tagName,
			})
			// uni.navigateTo({
			// 	url:'../product/list?key='+tagName,
			// })
		},
	},
	onNavigationBarButtonTap(e) {
		let key = this.searchKey ? '?key=' + this.searchKey : '';
		uni.redirectTo({
			url: '../product/list' + key,
		})
		plus.key.hideSoftKeybord();
	},
};
</script>

<style  lang="scss">
	.box-padding{
		width: 750rpx;
		padding: 0 30rpx ;
		margin-top: 30rpx;
	}
	.f-header {
		display: flex;
		align-items: center;
		justify-content:space-between;
		margin: 15rpx 0;
		width: 690rpx;
		.tit {
			font-size: $font-base;
			color: $font-color-dark;
			font-weight: 700;
			line-height: 1.3;
		}
	
		.icon-dizhi {
			font-size: $font-lg +2upx;
			color: $font-color-light;
		}
	}
	.tag-section{
		display: flex;
		align-items: center;
		font-size: $font-sm +2upx;
		color: $font-color-base;
		flex-wrap:wrap;
		width: 690rpx;
		text {
			background-color: #F1F1F1;
			border: 1px solid #E0E0E0;
			border-radius: 50rpx;
			margin: 15rpx;
			padding: 12rpx 18rpx;
			min-width: 142rpx;
			text-align: center;
		}
	}
</style>
