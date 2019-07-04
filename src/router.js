import Vue from 'Vue'
import Router from 'Vue-router'
import SearchComp from './components/Lists.vue'
import Home from './components/Home.vue'

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