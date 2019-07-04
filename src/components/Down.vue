<template>
  
    <div class="Down">
    			<div class="footer">
			<p class="footP1"> مراقبت و محافظت از حساب کاربری و رمزعبور هر کاربر بر </br> عهده کاربر است. ریحون سریعترین راه سفارش آنلاین غذا </br> است. منوی عکس‌دار رستوران‌های اطرافتان را بر اساس مکان </br> خود به راحتی مشاهده کنید و سفارش دهید. </p>
			<p class="footList"> لیست رستوران ها </p>
			<hr class="purple"/>
			<h1 class="footH1"> تماس با ریحون </h1>
			<p class="footP11"> درباره ریحون </p>
			<p class="footP12"> تماس با ما </p>
			<p class="footP13"> وبلاگ ریحون </p>
			<hr class="pink"/>
			<h1 class="footH2"> رستوران‌ها </h1>
			<p class="footP21"> ثبت رستوران </p>
			<hr class="red"/>
			<h1 class="footH3"> پشتیبانی ریحون </h1>
			<p class="footP31"> سوالات متداول </p>
			<p class="footP32"> تماس با پشتیبانی </p>
			<p class="footP33"> قوانین و مقررات </p>
			<hr class="yellow"/>
			<h1 class="footH4"> اپلیکیشن‌های موبایل </h1>
			<div id="Footbar">
				<div class="foot1">
				</div>
				<div class="foot2">
				</div>
				<div class="foot3">
				</div>
			</div>
			
			<img class="nemadImg" src="../Images/nemad.png">
			<img class="senfImg" src="../Images/senf.png">
			
		</div>

		<div class="end">
		<p class="endP1"> © 2017, Reyhoon, All Rights Reserved. </p>
		
		<div id="social">
				<div class="soc1">
				
				</div>
				<div class="soc2">
				</div>
				<div class="soc3">
				</div>
				<div class="soc4">
				</div>
				<div class="soc5">
				</div>
		</div>
		</div>
    </div>
    	

</template>


<style lang="scss">


.footer{
	margin-left: auto;
    margin-right: auto;
	max-width: 100%;
    max-height: 100%;
	border: 0;
	margin: 0 ;
	padding: 0 ;
	height: 580px;
	width:100%;
	background-color: rgb(32, 32, 32);
	float:left;
clear:none;  
}


hr.purple {
	position:absolute;
	z-index: 10;
	border: 0;   /* in order to override TWBS stylesheet */
	height: 3px;
	width:170px;
	margin-right:550px;
	margin-top:50px;
	
	max-width: 94000px;
	padding: 0;
	clear: both;
	background:rgb(139, 0, 175);
	float:right
}

hr.pink {
	position:absolute;
	z-index: 10;
	border: 0;   /* in order to override TWBS stylesheet */
	height: 3px;
	width:170px;
	margin-right:750px;
	margin-top:50px;
	
	max-width: 94000px;
	padding: 0;
	clear: both;
	background:rgb(212, 0, 98);
	float:right
}

hr.red {
	position:absolute;
	z-index: 10;
	border: 0;   /* in order to override TWBS stylesheet */
	height: 3px;
	width:170px;
	margin-right:950px;
	margin-top:50px;
	
	max-width: 94000px;
	padding: 0;
	clear: both;
	background:rgb(255, 6, 19);
	float:right
}

hr.yellow {
	position:absolute;
	z-index: 10;
	border: 0;   /* in order to override TWBS stylesheet */
	height: 3px;
	width:170px;
	margin-right:1150px;
	margin-top:50px;
	
	max-width: 94000px;
	padding: 0;
	clear: both;
	background:rgb(255, 195, 0);
	float:right
}

.footP1{
	position:absolute;
	margin-top: 6rem;
	margin-right: 9rem;
	font-size: 1rem;
	line-height: 1.6rem;
	color: #909090;	
}
.footList{
	position:absolute;
	margin-top: 14rem;
	margin-right: 9rem;
	font-size: 1rem;
	line-height: 1.6rem;
	color: rgb(88, 144, 241);	
}

.footH1{
	position:absolute;
	margin-top: 5rem;
	margin-right: 36.8rem;
	font-size: 1rem;
	line-height: 1.5rem;
	color: white;	
	font-weight: bold;
}

.footH2{
	position:absolute;
	margin-top: 5rem;
	margin-right: 50.2rem;
	font-size: 1rem;
	line-height: 1.5rem;
	color: white;	
	font-weight: bold;
}

.footH3{
	position:absolute;
	margin-top: 5rem;
	margin-right: 63.3rem;
	font-size: 1rem;
	line-height: 1.5rem;
	color: white;	
	font-weight: bold;
}

.footH4{
	position:absolute;
	margin-top: 5rem;
	margin-right: 76.8rem;
	font-size: 1rem;
	line-height: 1.5rem;
	color: white;	
	font-weight: bold;
}


.footP11{
	position:absolute;
	margin-top: 8rem;
	margin-right: 36.8rem;
	font-size: 1rem;
	line-height: 1.5rem;
	color: #909090;	
}

.footP12{
	position:absolute;
	margin-top: 10rem;
	margin-right: 36.8rem;
	font-size: 1rem;
	line-height: 1.5rem;
	color: #909090;	
}

.footP13{
	position:absolute;
	margin-top: 12rem;
	margin-right: 36.8rem;
	font-size: 1rem;
	line-height: 1.5rem;
	color: #909090;	
}

.footP21{
	position:absolute;
	margin-top: 8rem;
	margin-right: 50.2rem;
	font-size: 1rem;
	line-height: 1.5rem;
	color: #909090;	
}

.footP31{
	position:absolute;
	margin-top: 8rem;
	margin-right: 63.3rem;
	font-size: 1rem;
	line-height: 1.5rem;
	color: #909090;	
}
.footP32{
	position:absolute;
	margin-top: 10rem;
	margin-right: 63.3rem;
	font-size: 1rem;
	line-height: 1.5rem;
	color: #909090;	
}
.footP33{
	position:absolute;
	margin-top: 12rem;
	margin-right: 63.3rem;
	font-size: 1rem;
	line-height: 1.5rem;
	color: #909090;	
}


#Footbar {
	margin-top: 125px;
	margin-right: 1150px;
	left: 0;
	right: 0;
	width: 200px;
    height: 125px;
    text-align: justify;
    -ms-text-justify: distribute-all-lines;
    text-justify: distribute-all-lines;
    
}



.foot1{
	border:0.01px solid #606060;
	background-color: rgb(32, 32, 32);	
	margin-bottom:10px;
	background: url(../Images/foot1.png);
	background-position:center;
	background-repeat: no-repeat;
	background-color: rgb(255, 255, 255);
	background-size: 100% 100%;
    width: 140px;
    height: 42px;    
	border-radius: 3px;
    vertical-align: top;
	display: inline-block;
    *display: inline;
    zoom: 1	
}


.foot2{	
	border:0.5px solid #606060;
	background: url(../Images/foot2.png);
	background-position:center;
	background-repeat: no-repeat;
	background-color: rgb(255, 255, 255);
	background-size: 100% 100%;
    width: 140px;
    height: 42px;
	margin-bottom:10px;
	border-radius: 3px;
    vertical-align: top;
	display: inline-block;
    *display: inline;
    zoom: 1	
}



.foot3{	
	border:0.5px solid #606060;
	background: url(../Images/foot3.png);
	height: 0.01px;
	background-position:center;
	background-repeat: no-repeat;
	background-color: rgb(255, 255, 255);
	background-size: 100% 100%;
    width: 140px;
    height: 42px; 
	margin-bottom:10px;
	border-radius: 3px;
    vertical-align: top;
	display: inline-block;
    *display: inline;
    zoom: 1	
}


#Foootbar:after {
    content: '';
    width: 100%;
    display: inline-block;
    font-size: 0;
    line-height: 0
}


.nemadImg{
	position: absolute;
	z-index: +10;
	margin-right:620px;
	margin-top:140px;
	height:160px;
	width:125px;
}

.senfImg{
	position: absolute;
	z-index: +10;
	margin-right:770px;
	margin-top:150px;
}

.end{
	margin-left: auto;
    margin-right: auto;
	max-width: 100%;
    max-height: 100%;
	border: 0;
	margin: 0 ;
	padding: 0 ;
	height: 90px;
	width:100%;
	background-color: rgb(25, 25, 25);
	float:left;
	clear:none;  
}

.endP1{
		direction: ltr;
	position:absolute;
	margin-top: 2rem;
	margin-right: 10rem;
	font-size: 1rem;
	line-height: 1.6rem;
	color: #909090;	
}

#social {
	margin-top: 25px;
	margin-right: 1050px;
	left: 0;
	right: 0;
	width: 250px;
    height: 40px;
    text-align: justify;
    -ms-text-justify: distribute-all-lines;
    text-justify: distribute-all-lines;
    
}

</style>

