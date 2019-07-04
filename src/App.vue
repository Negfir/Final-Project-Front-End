<template>
  <div id="app">
    <Top />
    <SearchComp  />
    <Down />
  </div>
</template>

<script>
import Top from './components/Top.vue'
import Down from './components/Down.vue'
import SearchComp from './components/SearchComp.vue'
export default {
  name: 'app',
  components: {
    Top,Down,SearchComp
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
