<template>
	<view class="content">
		<scroll-view scroll-y class="left-aside">
			<view v-for="item in fatherlist" :key="item.GoodsClassID" class="f-item b-b" :class="{active: item.GoodsClassID === currentId}" @click="tabtap(item)">
				{{item.GoodsClassName}}
			</view>
		</scroll-view>
		<scroll-view scroll-with-animation scroll-y class="right-aside" @scroll="asideScroll" :scroll-top="tabScrollTop">
			<view v-for="item in sonlist" :key="item.GoodsClassID" class="s-list" :id="'main-'+item.GoodsClassID">
				<text class="s-item">{{item.GoodsClassName}}</text>
				<view class="t-list">
					<view @click="navToList(item.GoodsClassID, child.GoodsClassID)" v-if="child.ParentID === item.GoodsClassID" class="t-item" v-for="(child,index) in tlist" :key="child.id">
						<view class="image-wrapper">
							<image :src="child.PicURL" :class="[child.loaded]" mode="aspectFill" lazy-load @load="onImageLoad('tlist', index)"
								@error="onImageError('tlist', index)"></image>
						</view>
						<text>{{child.GoodsClassName}}</text>
					</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	
	export default {
		data() {
			return {
				sizeCalcState: false,
				tabScrollTop: 0,
				currentId: 1,
				fatherlist: [],
				sonlist: [],
				tlist: [],
			}
		},
		onLoad(){
			this.loadData();
		},
		methods: {
			loadData(){
				this.$Request.get(this.$api.home.getGoodsClass).then(res => {
					this.analysisData(res.data);
				},err => {
					console.log("err: " + JSON.stringify(err));
				});
				
			},
			analysisData(classList){
				this.currentId = classList[0].GoodsClassID;
				classList.forEach(item=>{
					//  && item.IsVisible==0
					if(item.children){
						this.fatherlist.push(item);
						this.sonlist.push(item);
						item.children.forEach(child=>{
							// if (child.IsVisible==0) {
								this.tlist.push(child);
							// }
						}) 
					}
				})
			},
			//监听image加载完成
			onImageLoad(key, index) {
				this.$set(this[key][index], 'loaded', 'loaded');
			},
			//监听image加载失败
			onImageError(key, index) {
				this[key][index].PicURL = '/static/errorImage.jpg';
			},
			//一级分类点击
			tabtap(item){
				if(!this.sizeCalcState){
					this.calcSize();
				}
				
				this.currentId = item.GoodsClassID;
				let index = this.sonlist.findIndex(sitem=>sitem.GoodsClassID === item.GoodsClassID);
				this.tabScrollTop = this.sonlist[index].top;
			},
			//右侧栏滚动
			asideScroll(e){
				if(!this.sizeCalcState){
					this.calcSize();
				}
				let scrollTop = e.detail.scrollTop;
				let tabs = this.sonlist.filter(item=>item.top <= scrollTop).reverse();
				if(tabs.length > 0){
					this.currentId = tabs[0].GoodsClassID;
				}
			},
			//计算右侧栏每个tab的高度等信息
			calcSize(){
				let h = 0;
				this.sonlist.forEach(item=>{
					let view = uni.createSelectorQuery().select("#main-" + item.GoodsClassID);
					view.fields({
						size: true
					}, data => {
						item.top = h;
						h += data.height;
						item.bottom = h;
					}).exec();
				})
				this.sizeCalcState = true;
			},
			navToList(sid, tid){
				uni.navigateTo({
					url: `/pages/product/list?fid=${this.currentId}&sid=${sid}&tid=${tid}`
				})
			}
		},
		//点击导航栏 buttons 时触发
		onNavigationBarButtonTap(e) {
			const index = e.index;
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
</script>

<style lang='scss'>
	page,
	.content {
		height: 100%;
		background-color: #f8f8f8;
	}

	.content {
		display: flex;
	}
	.left-aside {
		flex-shrink: 0;
		width: 200upx;
		height: 100%;
		background-color: #fff;
	}
	.f-item {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100upx;
		font-size: 28upx;
		color: $font-color-base;
		position: relative;
		&.active{
			color: $base-color;
			background: #f8f8f8;
			&:before{
				content: '';
				position: absolute;
				left: 0;
				top: 50%;
				transform: translateY(-50%);
				height: 36upx;
				width: 8upx;
				background-color: $base-color;
				border-radius: 0 4px 4px 0;
				opacity: .8;
			}
		}
	}

	.right-aside{
		flex: 1;
		overflow: hidden;
		padding-left: 20upx;
	}
	.s-item{
		display: flex;
		align-items: center;
		height: 70upx;
		padding-top: 8upx;
		font-size: 28upx;
		color: $font-color-dark;
	}
	.t-list{
		display: flex;
		flex-wrap: wrap;
		width: 100%;
		background: #fff;
		padding-top: 12upx;
		&:after{
			content: '';
			flex: 99;
			height: 0;
		}
	}
	.t-item{
		flex-shrink: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		width: 176upx;
		font-size: 26upx;
		color: #666;
		padding-bottom: 20upx;
		.image-wrapper {
			width: 140upx;
			height: 140upx;
			flex-shrink: 0;
			position: relative;
		
			image {
				border-radius: 8upx;
			}
		}
		/* image{
			width: 140upx;
			height: 140upx;
		 }*/
	}
</style>
