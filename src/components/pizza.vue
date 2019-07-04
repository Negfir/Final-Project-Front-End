<template>
  
    <div class="pizza">
		<div class="MainPage">
	    <h class="hRes"> 170 رستوران امکان سرویس دهی به </h>
	    <hr/>

		<input type="text" id="myInput" onkeyup="myFunction()" placeholder="جست و جوی رستوران در این محدوده" title="Type in a name">

		</div>
    </div>
    	

</template>


<style lang="scss">


#myInput {
	background-color:rgb(250,250,250);
	position:relative;
	top:300px;
	right:-100px;
  background-image: url('../Images/searchicon.png');
  background-position:right;
  background-position: 450px 10px;
  background-size: 5% 50%;
  background-repeat: no-repeat;
  border-radius:8px;
  width: 50%;
  font-size: 16px;
  padding: 12px 20px 12px 40px;
  border: 1px solid #ddd;
  margin-bottom: 12px;
  
  padding-right: 50px;
  width:400px;
}

.MainPage{
	
	max-width: 100%;
    max-height: 100%;
	float:left;
	border: 0;
	margin: 0 ;
	padding: 0 ;
	height: 380px;
	width:100%;

	background-image: url(../Images/topPizza.jpg);
	background-position: top;
	background-repeat: no-repeat; 
	background-size:  100%;
    position: relative;
	object-fit: fill;
	clear: both	;
	
	
	
}


.hRes{

	margin-top: 6rem;
	text-align: center;
	font-size: 1.6rem;
	line-height: 3rem;
	color: black;
	
	position: relative;
	top:190px;
	right:200px;
}

hr {
	position:relative;
	z-index: 10;
	border: 0;
	height: 0.9px;
	width:100%;
	margin-top: 200px;
	max-width: 94000px;
	padding: 0;
	clear: both;
	background:#DCDCDC;
	float:right
}


.search-container {
  float: right;
}

input[type=text] {
  padding: 6px;
  margin-top: 8px;
  font-size: 17px;
  border: none;
}

.search-container button {
  float: right;
  padding: 6px 10px;
  margin-top: 8px;
  margin-right: 16px;
  background: #ddd;
  font-size: 17px;
  border: none;
  cursor: pointer;
}

.search-container button:hover {
  background: #ccc;
}


</style>

