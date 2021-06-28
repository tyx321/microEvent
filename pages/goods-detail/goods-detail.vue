<template>
	<view class="goodsDetail">
		<!-- 轮播图 -->
		<swiper indicator-dots circular class="box1">
			<swiper-item v-for="(item,index) in thumimages" :key="index">
				<image :src="item.src"></image>
			</swiper-item>
		</swiper>
		
		<view class="box2">
			<view class="price">
				<text>{{ info.market_price }}</text>
				<text>{{ info.sell_price }}</text>
			</view>
			<view class="goods_name">
				{{ info.title }}
			</view>
		</view>
		<view class="line"></view>
		
		<view class="box3">
			<view>货号：{{info.goods_no}}</view>
			<view>库存：{{info.stock_quantity}}</view>
		</view>
		<view class="line"></view>
		 <view class="box4">
		 	<view>详细介绍</view>
			<view>内容</view>
			<view class="title">
				{{goodsDetail.title}}
			</view>
			<view class="content">
				<rich-text :nodes="goodsDetail.content">
				</rich-text>
			</view>
		 </view>
		 <view class="nav">
			 <uni-goods-nav :fill="true"  :options="options" :buttonGroup="buttonGroup"  @click="onClick" @buttonClick="buttonClick" />
		 </view>
	</view>
</template>

<script>
	import uniGoodsNav from '@/components/uni-goods-nav/uni-goods-nav.vue'
	export default {
		data() {
			return {
				id:0,
				goodsDetail:{},
				thumimages:[],
				info:{},
				options: [{
				            icon: 'headphones',
				            text: '客服'
				        }, {
				            icon: 'shop',
				            text: '店铺',
				            info: 2,
				            infoBackgroundColor:'#007aff',
				            infoColor:"red"
				        }, {
				            icon: 'cart',
				            text: '购物车',
				            info: 2
				        }],
				        buttonGroup: [{
				          text: '加入购物车',
				          backgroundColor: '#ff0000',
				          color: '#fff'
				        },
				        {
				          text: '立即购买',
				          backgroundColor: '#ffa200',
				          color: '#fff'
				        }
				        ]
			}
		},
		onLoad(option) {
			this.id = option.id
			this.getGoodsDetail()
			this.getinfo()
			this.getthumimages()
		},
		components: {uniGoodsNav},
		methods: {
			async getGoodsDetail(){
				const res = await this.$myRequest({
					url:'/api/goods/getdesc/'+this.id
				})
				this.goodsDetail = res.data.message[0]
				//console.log(this.goodsDetail)
			},
			async getthumimages(){
				const res = await this.$myRequest({
					url:'/api/getthumimages/'+this.id
				})
				this.thumimages = res.data.message
				//console.log(this.thumimages)
			},
			async getinfo(){
				const res = await this.$myRequest({
					url:'/api/goods/getinfo/'+this.id
				})
				this.info = res.data.message[0]
				//console.log(this.info)
			},
			onClick (e) {
				uni.showToast({
				  title: `点击${e.content.text}`,
				  icon: 'none'
				})
			  },
			  buttonClick (e) {
				console.log(e)
				this.options[2].info++
			  }
			
		}
	}
</script>

<style lang="scss">
	.title{
		font-size: 30rpx;
		text-align: center;
		margin: 20rpx auto;
		font-weight:bold;
	}
	.content{
		font-size: 25rpx;
		margin-top: 30rpx;
	}
	.line{
		width: 750rpx;
		height: 10rpx;
		background-color: #eee;
	}
	.price{
		color: $shop-color;
		font-size: 36rpx;
		text:nth-child(2){
			color: #CCCCCC; 
			font-size: 26rpx;
			margin-left: 17rpx;
			text-decoration: line-through;
		}
	}
	.goods_name{
		font-size: 28rpx;
		line-height: 30rpx;
		padding-bottom: 15rpx;
		padding-top: 10rpx;
	}
	swiper{
		height: 700rpx;
		image{
			height: 100%;
			width: 100%;
		}
	}
	.nav{
		position: fixed;
		bottom: 0;
		width: 100%;
		
	}
</style>
