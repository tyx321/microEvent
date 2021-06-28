<template>
	<view class="newsList">
		<view class="newsListItem" v-for="(item,index) in newsList" :key="index">
			<view class="left">
				<image src="item.img_url" mode=""></image>
			</view>
			<view class="right">
				<view class="">
					{{item.title}}
				</view>
				<view class="">
					<text>发表时间 {{item.add_time}}</text>
					<text>浏览 {{item.click}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				newsList:[]
			}
		},
		onLoad() {
			this.getNewsList()
		},
		methods: {
			// 获取咨询详情
			async getNewsList(){
				const res = await this.$myRequest({
					url:'/api/getnewslist'
				})
				this.newsList = res.data.message
				//console.log(res.data.message)
			}
		}
	}
</script>

<style>

</style>
