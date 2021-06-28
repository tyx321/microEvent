import Vue from 'vue'
import App from './App'
import { myRequest } from 'utils/api.js'

Vue.config.productionTip = false
Vue.prototype.$myRequest = myRequest

App.mpType = 'app'
Vue.filter('formatTime',(data)=>{
	const nNata =new Date(data)
	const Year = nNata.getFullYear()
	const Month = nNata.getMonth().toString().padStart(2,0)
	const Day = nNata.getDay().toString().padStart(2,0)			
	return `${Year}-${Month}-${Day}`
})

const app = new Vue({
    ...App
})
app.$mount()
