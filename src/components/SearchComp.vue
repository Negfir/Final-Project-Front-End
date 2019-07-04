<template>
  
    <div class="SearchComp">
		<div class="MainPage">
	    
			<img class="img1" src="../Images/Reyhoon1.png" alt="Reyhoon" >
			

			<h1 class="m1" > سفارش آنلاین غذا  از بهترین رستوران‌ها و فست‌فود‌‌ها </h1>
			
			
			<p class="m2" >برای دیدن لیست رستوران‌ها و فست‌فود‌هایی که به شما سرویس می‌دهند، منطقه خود را وارد کنید.</p>
			

			
			<div class="searchBox">
			
				<div class="s1">
				<label class="para">&nbsp; منطقه خود را وارد کنید &nbsp; </label>
					<form  action="/lists">
					<input class="m5" type="text" id="fname2" name="City" value="تهران" >
					  <input class="m4" type="text" id="fname" name="Address" placeholder="مثلا نیاوران" >
					   <button class="reySearch" type="submit"><i class="fa fa-search"></i></button>
					    
					</form>
					
		
				</div>
				
				
				
			</div>	
			<p class="m6">
				&#10226; آخرین جستجو: تهران، حافظ، دانشگاه صنعتی امیرکبیر (پلی تکنیک تهران)
				</p>	
		</div>
    </div>
    	

</template>


<style lang="scss">
.reySearch {
		background: url(../Images/search.png);
	
	background-position: right; /* Center the image */
	background-repeat: no-repeat;
	background-size: 100% 100% ;
  float: right;
  height: 4.2rem;
  width: 8%;
  padding: 10px;
  
  color: white;
  font-size: 17px;
  border: 0px solid grey;
  border-top-left-radius:4px;
  border-left: none; /* Prevent double borders */
  cursor: pointer;
  margin-top: -75px;
}

.MainPage{
	
	max-width: 100%;
    max-height: 100%;
	float:left;
	border: 0;
	margin: 0 ;
	padding: 0 ;
	height: 690px;
	width:100%;

	background-image: url(../Images/Pizza1.png), url(../Images/Pizza2.png);
	background-position: left top, right top;
	background-repeat: no-repeat, no-repeat; 
    position: relative,relative;
	object-fit: fill;
	clear: both	;
	
	
	
}

.m1{
	margin-top: 6rem;
	text-align: center;
	font-size: 2.1rem;
	line-height: 3rem;
	color: black;
	font-weight: bold;
}


.m2{
	
	margin-top: 1rem;
	font-size: 0.9rem;
	line-height: 2rem;
	max-width: 100%;
	text-align: center;	
	font-weight: bold;
}

.img1{
	margin-top: 5rem;
	border: 0;
	padding: 0;
	width: 180px;
	position: center;
	display: block;
    margin-left: auto;
    margin-right: auto;
	
}

.searchBox {
	box-shadow: 3px 3px 10px 3px #ccc;
	margin-top: 1rem;
	margin-left: auto;
    margin-right: auto;
	position: center;
	border-radius: 9px;
	background: white;
	padding: 3px; 
	width: 800px;
	height: 75px;  
}

.m3{
	outline: none;
	padding-right: 5rem;
padding-left: 0;
box-sizing: border-box;
font-size: 1.8rem;
width: 100%;
border-left: 0;
border-right: 0;
height: 6rem;
width: 24rem;
background-color: transparent;
margin-left: auto;
    margin-right: auto;
	position: center;
}

s1{
margin-right: 40px;
}

.m4[type=text] {
	background: url(../Images/Loc.png);
	height: 0.01px; /* You must set a specified height */
	background-position: right; /* Center the image */
	background-repeat: no-repeat;
	background-size:  8% 100%;
	position: relative;
	object-fit: fill;
	clear: both	;
	 position: relative;
	 top: -5.5px;
	float:right;
	z-index: +1;
  width: 67%;
  height: 4.2rem;
  padding: 15px 50px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 1px solid rgb(210, 210, 210);
 
  margin-right: 180px;
  margin-top: -70px;
  border-bottom-right-radius: 9px;
  border-top-right-radius: 9px;
  font-size:20px;
  
}
.m5[type=text] {
	background: url(../Images/drop.png);
	
	background-position: right; /* Center the image */
	background-repeat: no-repeat;
	background-size: 30% 80%;
	 position: relative;
	 top: -5.5px;
	float:right;
	z-index: +10;
  width: 20%;
  height: 4.2rem;
  padding: 0px 50px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 1px solid rgb(210, 210, 210);
 
  margin-right: -280px;
  margin-top: 10px;
 border-radius: 9px;
 color: black;
 font-size:20px;
 
  
}

.para{
	position: relative;
	top: 4px;
	z-index: +20;
	float:right;
	font-size: 0.8rem;
	line-height: 0.2rem;
	max-width: 100%;
	text-align: center;	
	background-color: white;
	margin-right: 190px;
}
.hist{
width: 0.1rem;
color: #fff;

vertical-align: middle;

height: 1.5rem;
}
  
  
.m6{
	
	margin-top: 0.8rem;
	margin-right: 24rem;
	font-size: 0.9rem;
	line-height: 2rem;
	max-width: 100%;
	text-align: right;	
	text-decoration: underline;
}
.m6:hover{
	color: rgb(212, 0, 98);
}


</style>

