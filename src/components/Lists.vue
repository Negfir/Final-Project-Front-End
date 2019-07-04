<template>
  <div class="Home">
    <Top />
    <Down />
  </div>
</template>

<script>
import Top from './Top.vue'
import Down from './Down.vue'
import SearchComp from './SearchComp.vue'
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
