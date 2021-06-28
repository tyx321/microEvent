<template>
	<view>
		<image class="img" src="http://image.yxtao.xyz/image/head_photo/row/6503376830177755661.jpg" mode="aspectFill"></image>
		<view class="info">
			<view @click="phone">
				联系电话：13030303000 (点击拨打)
			</view>
			<view>
				联系地址：武汉纺织大学阳光校区
			</view>
		</view>
		<map :latitude="latitude" :longitude="longitude" :markers="markers" class="map" :scale="scale"></map>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				latitude:30.382144,
				longitude:114.344906,
				scale:14,
				markers:[
					{
						latitude:30.382144,
						longitude:114.344906,
						iconPath:'../../static/dog.jpg',
						width:30,
						height:30
					}
				]
			}
		},
		methods: {
			phone(){
				uni.makePhoneCall({
					phoneNumber:'13030303000'
				})
			}
		}
	}
</script>

<style lang="scss">
	.img{
		width: 750rpx;
		height: 320rpx;
	}
	.info{
		padding: 10px 10px;
		font-size: 35rpx;
		view{
			line-height: 50rpx;
			border-bottom: 1px solid #eee;
		}
	}
	.map{
		width: 750rpx;
		height: 750rpx;
	}

</style>
