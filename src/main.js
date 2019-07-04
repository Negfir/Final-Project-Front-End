import Vue from 'vue'
import App from './App.vue'
import Top from './components/Top.vue'
import Down from './components/Down.vue'
import SearchComp from './components/SearchComp.vue'
import Lists from './components/Lists.vue'
import Home from './components/Home.vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
	mode: 'history',
	base:process.env.BASE_URL,
	routes:[
	{
		path:'/',
		name:'Home',
		component: Home
	},
	{
		path:'/lists',
		name:'lists',
		component: Lists
	}
	]
})

new Vue({
  el: '#app',
  render: h => h(App)
})