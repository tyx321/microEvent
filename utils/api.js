const BASE_URL = 'http://test.yxtao.xyz'
const LOCAL_URL = 'http://127.0.0.1:8082'

export const myRequest = (options) =>{
	return new Promise((resolve, reject)=>{
		uni.request({
			url:BASE_URL + options.url,
			method:options.method || 'GET',
			data:options.data || {},
			success:(res)=>{
				if(res.data.status !== 0){
					uni.showToast({
						title:"获取数据失败"
					})
				}else{
					// uni.showToast({
					// 	title:"获取数据成功"
					// })
				}
				resolve(res)
			},
			fail: (err) => {
				uni.showToast({
					title:"请求接口失败"
				})
				reject(err)
			}
		})
	})
}

// myRequest({
// 	url:'/api/getlunbo',
// 	method:'POST',
// 	data:{}
// })