import Vue from 'Vue'
import Router from 'Vue-router'
import SearchComp from './components/Lists.vue'
import Home from './components/Home.vue'
import Lists from './components/Lists.vue'


export const routes=[
    {
      path: '/' , component: Home
    },
    {
     path:'/list',component:Lists
    }
]