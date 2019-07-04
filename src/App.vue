<template>
  <div id="app">
    <Top />
    <Down />
  </div>
</template>

<script>
import Top from './components/Top.vue'
import Down from './components/Down.vue'
export default {
  name: 'app',
  components: {
    Top,Down
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
