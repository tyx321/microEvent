<template>
	<view class="newsList">
		<news-list :newsList="newsList" @newsItemHander="navigateHander"></news-list>
		<view @click="navigateHander(5)">你好</view>
	</view>
</template>

<script>
	import newsList from '../../components/news-list/news-list.vue'
	export default {
		data() {
			return {
				newsList:[]
			}
		},
		onLoad() {
			this.getNewsList()
		},
		components:{'news-list':newsList},
		methods: {
			// 获取咨询详情
			async getNewsList(){
				const res = await this.$myRequest({
					url:'/api/getnewslist'
				})
				this.newsList = res.data.message
				//console.log(res.data.message)
			},
			navigateHander(id){
				console.log(id)
				uni.navigateTo({
					url: '/pages/news-detail/news-detail?id='+id,
					success: res => {},fail: () => {},complete: () => {}
				})
			}
		}
	}
</script>

<style lang="scss">
	
</style>
