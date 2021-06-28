<template>
	<view>
		<view class="goods_list">
			<view class="goods_item" 
			v-for="(item,index) in hotGoods" 
			:key="index"
			@click="goodsHander(item.id)">
				<image :src="item.img_url"></image>
				<view class="price">
					<text>{{ item.market_price }}</text>
					<text>{{ item.sell_price }}</text>
				</view>
				<view class="goods_name">
					{{ item.title }}
				</view>
			</view>
		</view>		
	</view>
</template>

<script>
	export default {
		name:"goods-list",
		data() {
			return {
				
			};
		},
		props:['hotGoods'],
		methods:{
			goodsHander(id){
				this.$emit('goodsHander',id)
			}
		}
	}
</script>

<style lang="scss">
	.goods_list{
		padding: 0 15rpx;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		.goods_item{
			background:#FFFFFF;
			width: 355rpx;
			margin: 10rpx 0;
			image{
				width: 90%;
				height: 430rpx;
				display: block;
				margin: 10rpx auto;
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
		}
	}
</style>
