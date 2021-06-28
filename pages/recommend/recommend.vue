<template>
	<view>
		<goods-list :hotGoods="hotGoods" @goodsHander="goodsHander"></goods-list>
		<view v-if="flag" class="endLine">--我是有底线的--</view>
	</view>
</template>

<script>
	import goodsList from '../../components/goods-list/goods-list.vue'
	export default {
		data() {
			return {
				indexNum:1,
				hotGoods:[],
				flag:false
			}
		},
		components:{"goods-list":goodsList},
		methods: {
			// 获取热门数据
			async getHotGoods(callBack){
				const res = await this.$myRequest({
					url:'/api/getgoods?pageindex=' + this.indexNum
				})
				this.hotGoods = [...this.hotGoods, ...res.data.message]
				callBack && callBack()
				//console.log(res.data.message)
			},
			goodsHander(id){
				uni.navigateTo({
					url:'/pages/goods-detail/goods-detail?id='+id
				})
			}
		},
		onLoad() {
			this.getHotGoods()
		},
		//上拉加载更多
		onReachBottom() {
			if(this.hotGoods.length<this.indexNum*10) return this.flag = true
			this.indexNum++
			this.getHotGoods()
		},
		//下拉刷新
		onPullDownRefresh() {
			this.hotGoods = []
			this.indexNum = 1
			this.flag = false
			setTimeout(() => {
				this.getHotGoods(() => {
					uni.stopPullDownRefresh()
				})
			},1000)
			
		},
		
		
	}
</script>

<style lang="scss">
	.endLine{
		width: 100%;
		height: 50px;
		line-height: 50px;
		text-align: center;
		color: #007AFF;
	}

</style>
