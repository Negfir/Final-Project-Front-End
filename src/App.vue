<template>
  <div id="app">
    <Home />
    <router-view></router-view>
  </div>
</template>

<script>
import Top from './components/Top.vue'
import Down from './components/Down.vue'
import SearchComp from './components/SearchComp.vue'
import Home from './components/Home.vue'
export default {
  name: 'app',
  components: {
    Top,Down,SearchComp,Home
  }
}
</script>

<style lang="scss">
*{
  font-family:"Shabnam";
  font-size:15px;
  color: rgb(127,127,127)
}

#app{
  margin: 0;
  direction: rtl;

padding: 0;

border: 0;

vertical-align: baseline;

font-family: Shabnam,Arial,Tahoma,serif;
}

</style>
