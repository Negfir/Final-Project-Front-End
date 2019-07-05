<template>
  <div class="DownTown">
    <Top />

    <div class="topPic">
      <div class="name">
        <img id="pic" src="../Images/down.png">
        <p id="resName"> داون تاون </p>
        <div class="ratings" >
          <div class="empty-stars"></div>
          <div class="full-stars" id="star1"></div>

        </div>
        <p id="cat"> فست فود  &bull; پیتزا</p>
        <p id="addr">تهران، جردن، نبش خیابان ایرج، پلاک ۱۱۷</p>
      </div>
    </div>



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

.DownTown{
  margin: 0;
  direction: rtl;

padding: 0;

border: 0;

vertical-align: baseline;

font-family: Shabnam,Arial,Tahoma,serif;
}


.topPic{
  
  max-width: 100%;
    max-height: 100%;
  float:left;
  border: 0;
  margin: 0 ;
  padding: 0 ;
  height: 800px;
  width:100%;

  background-image: url(../Images/hamb.jpg);
  background-position: top;
  background-repeat: no-repeat; 
  background-size:  100%;
    position: relative;
  object-fit: fill;
  clear: both ;
  
}

.name{
  box-shadow: 0px 0px 3px 0px #ccc;

  border-radius: 3px;

    margin-top: 140px;
  position:absolute;
  left: 0;
right: 0;
      margin-left: auto;
    margin-right: auto;
  position: center;
    height: 277px;
    width: 744px;
    background: rgb(250,250,250);
}

#pic{
   border: 1px solid white;
  margin-top: -20px;
    height: 80px;
    width: 80px;
      position:absolute;
  left: 0;
right: 0;
          margin-left: auto;
    margin-right: auto;
  position: center;
}
#resName{
  font-weight: bold;
  text-align: center;
  font-size: 1.9rem;
  line-height: 3rem;
  margin-top:80px;
  color: black;
  background-color: transparent;
}

#cat{
  
  text-align: center;
  font-size: 1.5rem;
  line-height: 0.4rem;
  margin-top:1px;
  color: black;
  background-color: transparent;
}

#addr{
  
  text-align: center;
  font-size: 1.2rem;
  line-height: 0.4rem;
  margin-top:1px;
  background-color: transparent;
}

.ratings {
  direction: ltr;
    position: relative;
    vertical-align: middle;
    display: inline-block;
    color: #b1b1b1;
    overflow: hidden;
  top:-27px;
  right:330px;
  
}
.full-stars {
  direction: ltr;
    position: absolute;
    left: 0;
    top: 0px;
    white-space: nowrap;
    overflow: hidden;
    color: #fde16d;
  width:50%;
}
.empty-stars:before, .full-stars:before {
    content:"\2605\2605\2605\2605\2605";
    font-size: 14pt;
}
.empty-stars:before {
    -webkit-text-stroke: 1px #848484;
}
.full-stars:before {
    -webkit-text-stroke: 1px orange;
}
/* Webkit-text-stroke is not supported on firefox or IE */

/* Firefox */
 @-moz-document url-prefix() {
    .full-stars {
        color: #ECBE24;
    }
}



</style>
