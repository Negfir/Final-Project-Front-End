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

      <div>
      <div id="rests" class="recom">
      <div >
      <p >  </p>
      <div >
 
       
      </div>
      <div >



      </div>
      </div>
      </div>
      </div>


    <Down />
   
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

function loadJSON9()
{
  if(window.location.href=="http://localhost:8080/DownTown"){
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var myObj = JSON.parse(this.responseText);

  console.log(window.location.href);

  for (var i = 0; i< myObj[0].foods.length; i=i+1) {
    console.log(myObj[0].foods[i]);
    var txt1= myObj[i].name;
    
    
  
  var rest=document.getElementById("rests");
  var cont =document.createElement('div');
  cont.setAttribute("id", "containers");
  var p =document.createElement('p');
  cont.setAttribute("class", "boxPP");
  p.innerHTML=myObj[0].foods[i].foodSet;
  cont.appendChild(p);
  var box1 =document.createElement('div');
  var a1 =document.createElement('a');
  a1.setAttribute("href", "/DownTown");
  box1.setAttribute("class", "box");
  //box1.setAttribute("id", "pic"+i);
  box1.innerHTML=myObj[0].foods[i].name;
  a1.appendChild(box1);
  console.log("hhhhhhhhhhhhhhhhhhhhhhhhh");
  
  cont.appendChild(a1);
rest.appendChild(cont);
  }


  }
};
var url = "http://localhost:5000/api/restaurant";
console.log(url);
xmlhttp.open("GET", url, true);

xmlhttp.send(); 
}
}
loadJSON9()


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
  height: 500px;
  width:100%;
background:rgb(250,250,250);
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

.recom{

  margin-left: auto;
    margin-right: auto;
  border: 0;
  margin: 0 ;
  padding: 0 ;
  height: 1400px;
  width:100%;
  background-color: rgb(250, 250, 250);
  float:left;
clear:none;  
display:inline-block;

}

.filterContainer {
  background-color:rgb(255,255,255);
  margin-right: 100px;
  position:absolute;
  left: 100;
  right: 10px;
  margin-top: 100px;
    border: 2px plain black;
    
   margin: 100px;
    width: 200px;
    display:inline-block;
}

#containers {
  
  margin-top: 10px;
  position:relative;
  left: 0;
  right: 360px;
  margin-top: 100px;

    
    height: 125px;
    
    text-align: justify;
    -ms-text-justify: distribute-all-lines;
    text-justify: distribute-all-lines;
    
    /* just for demo */
    width: 800px;
}

.box{
  

  background-position:right;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-color: rgb(255, 255, 255);
  right: 0px;
  margin:0px;
  
  box-shadow: 3px 3px 10px 1px  #ccc;
    width: 370px;
    height: 150px;
    vertical-align: top;
    display: inline-block;
    padding:0;

    margin-right:10px;
    *display: inline;
    zoom: 1 
  
}
.box2{
  background: url(../Images/box2.png);
  height: 0.01px;
  background-position:right;
  background-repeat: no-repeat;
  background-size: 25% 70%;
  background-color: rgb(255, 255, 255);
  box-shadow: 3px 3px 10px 1px #ccc;
    width: 320px;
    height: 150px;
    vertical-align: top;

    display: inline-block;
    *display: inline;
    zoom: 1 
}

#pic0{
  background: url(../Images/DownTown.png);
  background-position:right;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-color: rgb(255, 255, 255);
}
#pic1{
  background: url(../Images/Ario.png);
  background-position:right;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-color: rgb(255, 255, 255);
}
#pic2{
  background: url(../Images/DayNight.png);
  background-position:right;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-color: rgb(255, 255, 255);
}

.box3{
  background: url(../Images/box3.png);
  height: 0.01px;
  background-position:right;
  background-repeat: no-repeat;
  background-size: 25% 70%;
  background-color: rgb(255, 255, 255);
  box-shadow: 3px 3px 10px 1px #ccc;
    width: 400px;
    height: 230px;
    vertical-align: top;
    display: inline-block;
    *display: inline;
    zoom: 1 
  
}

#containers:after {
    content: '';
    width: 100%;
    display: inline-block;
    font-size: 0;
    line-height: 0
}

.boxP{
  
  margin-top: -2.5rem;
  font-size: 1.1rem;
  line-height: 2rem;
  max-width: 100%;
  text-align: right;  
  
}

.boxPP{
  
  margin-top: -2.5rem;
  font-size: 1.1rem;
  line-height: 2rem;
  max-width: 100%;
  text-align: right;  
  color:black;
  
}

.boxContent{
  margin-top: 2.5rem;
  margin-right: 6rem;
  font-size: 0.9rem;
  line-height: 2rem;
  max-width: 100%;
  text-align: right;  
}


</style>
