<template>
	<view class="newsDetail">
		<view class="title">
			{{news.title}}
		</view>
		<view class="demo">
			<view class="date">
				发表时间： {{news.add_time | formatTime}}
			</view>
			<view class="times">
				浏览： {{news.click}}
			</view>
		</view>
		
		<view class="content">
			<rich-text :nodes="news.content"></rich-text>
			{{news.content}}
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id:0,
				news:{}
			}
		},
		onLoad(option) {
			this.id = option.id
			this.getNewsDetail()
		},
		methods: {
			async getNewsDetail(){
				const res = await this.$myRequest({
					url:'/api/getnew/' + this.id
				})
				this.news = res.data.message[0]
				console.log(this.news)
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
	.demo{
		display: flex;
		font-size: 20rpx;
		justify-content: space-between;
	}
	.content{
		font-size: 25rpx;
		margin-top: 30rpx;
	}
</style>
