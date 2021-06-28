<template>
	<view class="pics">
		<scroll-view scroll-y="true" class="left">
			<view :class="index===active?'active':''" 
			v-for="(item,index) in picType"
			:key="index"
			@click="leftItemHander(index, item.id)">
				{{item.title}}
			</view>
		</scroll-view>
		<scroll-view scroll-y="true" class="right">
			<view class="" v-for="(item,index) in secPic" :key="index">
				<image :src="item.img_url" mode="" @click="picClick(index)"></image>
				<text>
					{{item.title}}
				</text>
			</view>
			<text v-if="secPic.length === 0">
				暂无数据
			</text>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				picType:[],
				active:1,
				secPic:[]
			}
		},
		onLoad() {
			this.getPicItem()
		},
		methods: {
			async getPicItem(){
				const res = await this.$myRequest({
					url:'/api/getimgcategory'
				})
				this.picType = res.data.message
				// console.log(res.data.message)
				this.leftItemHander(0,this.picType[0].id)
			},
			async leftItemHander(index, id){
				this.active = index
				
				// 获取左侧类型数据
				const res = await this.$myRequest({
					url:'/api/getimages/' + id
				})
				this.secPic = res.data.message
				//console.log(res)
			},
			// 点击预览图片
			picClick(current){
				// TYX:此处的写法很精妙
				const urls = this.secPic.map((item)=>{
					return item.img_url
				})
				uni.previewImage({
					current,
					urls
				})
			},
		}
	}
</script>

<style lang="scss">
	page{
		height: 100%;
		.pics{
			height: 100%;
			display: flex;
			.left{
				width: 200rpx;
				border-right: 1px solid #eee;
				height: 100%;
				view{
					height: 60px;
					line-height: 60px;
					width: 200rpx;
					text-align: center;
					font-size: 35rpx;
					border: {
						top: 1px solid #eee;
					};
				}
				.active{
					background-color: $shop-color;
					color: #FFFDEF;
				}
			}
			.right{
				width: 530rpx;
				margin: 10rpx auto;
				image{
					width: 530rpx;
					height: 530rpx;
					border-radius: 20rpx;
				}
				text{
					display: block;
					font-size: 30rpx;
					line-height: 40rpx;
					margin-bottom: 30rpx;
				}
			}
		}
	}
	
</style>
