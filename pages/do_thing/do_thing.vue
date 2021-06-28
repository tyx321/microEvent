<template>
	<view class="home">
		<swiper indicator-dots circular>
			<swiper-item v-for="item in swippers" :key="item.id">
				<image :src="item.img"></image>
			</swiper-item>
		</swiper>
		<!-- 导航区域 -->
		<view class="nav">
			<view class="nav-item" v-for="(item,index) in navs" :key="index" @click="iconClick(item.path)">
				<view :class="item.icon"></view>
				<text>{{item.title}}</text>
			</view>
		</view>	
		<!-- 推荐商品区域 -->
		<view class="hot_goods">
			<view class="title">推荐图片</view>
			<goods-list :hotGoods="hotGoods" @goodsHander="goodsHander"></goods-list>
		</view>
	</view>
</template>

<script>
	import goodsList from '../../components/goods-list/goods-list.vue'
	export default {
		data() {
			return {
				swippers:[],
				number:1,
				hotGoods:[],
				navs:[
					{
						icon:'iconfont icon-ziyuan',
						title:'推荐',
						path:'/pages/recommend/recommend'
					},
					{
						icon:'iconfont icon-guanyuwomen',
						title:'我的',
						path:'/pages/my/my'
					},
					{
						icon:'iconfont icon-tupian',
						title:'图片',
						path:'/pages/picture/picture'
					},
					{
						icon:'iconfont icon-shipin',
						title:'视频',
						path:'/pages/video/video'
					}
				]
			}
		},
		components:{"goods-list":goodsList},
		onLoad() {
			this.getSwipper(),
			this.getHotGoods()
		},
		methods: {
			// 获取轮播图
			async getSwipper(){
				const res = await this.$myRequest({
					url:'/api/getlunbo'
				})
				this.swippers = res.data.message
				//console.log(this.swippers) 
			},
			
			// 获取热门数据
			async getHotGoods(){
				const res = await this.$myRequest({
					url:'/api/getgoods?pageindex=1'
				})
				this.hotGoods = res.data.message
				//console.log(res.data.message);
			},
			
			//
			iconClick(url){
				//console.log(url);
				uni.navigateTo({
					url
				})
			},
			
			goodsHander(id){
				uni.navigateTo({
					url:'/pages/goods-detail/goods-detail?id=' + id
				})
			}
		}
	}
</script>

<style lang="scss">
	.home{
		swiper{
			width: 750rpx;
			height: 500rpx;
			image{
				width: 100%;
				height: 100%;
			}
		}
		.nav{
			display: flex;
			align-items: center;
			// justify-content: space-around;
			.nav-item{
				width: 25%;
				text-align: center;
				.text{
					font-size: 30rpx;
				}
				.icon-tupian{
					font-size: 45rpx;
				}
				view{
					width: 120rpx;
					height: 120rpx;
					background-color: $shop-color;
					border-radius: 60rpx;
					margin: 10rpx auto;
					line-height: 120rpx;
					color: #FFFFFF;
					font-size: 50rpx;
				}
			}
		}
		.hot_goods{
			background-color: #EEEEEE;
			overflow: hidden;
			margin-top: 10px;
			.title{
				height: 50px;
				line-height: 50px;
				color: $shop-color;
				text-align: center;
				letter-spacing: 20px;
				background-color: #FFFFFF;
				margin: 7rpx 0;
			}
		}
	}
</style>
