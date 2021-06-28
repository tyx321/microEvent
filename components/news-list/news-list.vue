<template>
	<view>
		<view class="newsListItem" 
		v-for="(item,index) in newsList" 
		:key="index"
		@click="newsItemHander(item.id)">
			<view class="left">
				<image :src="item.img_url" mode=""></image>
			</view>
			<view class="right">
				<view class="title">
					{{item.title}}
				</view>
				<view class="">
					<text class="time">发表时间 {{item.add_time | formatTime}}</text>
					<text>浏览 {{item.click}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"news-list",
		data() {
			return {
			};
		},
		props:['newsList'],
		filters:{
			formatTime(data){
				const nNata =new Date(data)
				const Year = nNata.getFullYear()
				const Month = nNata.getMonth().toString().padStart(2,0)
				const Day = nNata.getDay().toString().padStart(2,0)			
				return `${Year}-${Month}-${Day}`
			}
		},
		methods:{
			newsItemHander(id){
				this.$emit('newsItemHander',id)
			}
		}
	}
</script>

<style lang="scss">
	.newsListItem{
		display: flex;
		border-bottom: 1px solid #DD4A68;
		padding: 10rpx 10rpx;
		margin: 0 auto;
		image{
			max-width: 200rpx;
			min-width: 200rpx;
			height: 150rpx;
		}
	}
	.right{
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		.title{
			font-size: 35rpx;
			line-height: 35rpx;
		}
		text{
			font-size: 15rpx;
			line-height: 15rpx;
		}
	}
	.time{
		margin-right: 30rpx;
	}
</style>
