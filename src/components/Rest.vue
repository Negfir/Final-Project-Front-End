<template>
  <div class="Lists">
    <Top />
    <resList />
    <Down />
    <router-view></router-view>
  </div>
</template>

<script>
import Top from './Top.vue'
import Down from './Down.vue'
import resList from './resList.vue'
export default {
  name: 'app',
  components: {
    Top,Down,resList
  }
}
</script>

<style lang="scss">
*{
  font-family:"Shabnam";
  font-size:15px;
  color: rgb(127,127,127)
}

.Lists{
  margin: 0;
  direction: rtl;

padding: 0;

border: 0;

vertical-align: baseline;

font-family: Shabnam,Arial,Tahoma,serif;
}

</style>
