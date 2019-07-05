import Vue from 'vue'
import App from './App.vue'
import Top from './components/Top.vue'
import Down from './components/Down.vue'
import SearchComp from './components/SearchComp.vue'
import Lists from './components/Lists.vue'
import Home from './components/Home.vue'
import Rest from './components/Rest.vue'
import DownTown from './components/DownTown.vue'


// snip

const routes = {
  '/': Home,
  '/lists': Lists,
  '/rest': Rest,
  '/DownTown': DownTown
}



new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent () {
      return routes[this.currentRoute]
    }
  },
  render (h) { return h(this.ViewComponent) }
})

