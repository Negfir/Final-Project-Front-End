<template>
  
    <div class="Top">
  
		<div class="navbar">
  
  		<p> <span id="span1">&nbsp; &nbsp; &nbsp; &nbsp; ورود </span> &nbsp;  |  &nbsp;   <span id="span1">عضویت </span> &nbsp; &nbsp;  &nbsp; <span id="span1"> راهنما </span> </p>
		
		
		
		
		</div>
		<hr class="colored" />
    </div>
    	

</template>


<style lang="scss">


.navbar {
  
    direction: rtl;
    font-size: 1.4rem;
    text-align: right;
    position: relative;
    color: #fff;
    margin-top: 0;
    z-index: 160;
    margin-right: 5%;
	float:right
}

#span1:hover{
	color: rgb(212, 0, 98);
}

hr.colored {
	z-index: 10;
	box-shadow: 3px 3px 3px 3px #ccc;
	border: 0;   /* in order to override TWBS stylesheet */
	height: 5px;
	width:100%;
	margin: 0 auto;
	max-width: 94000px;
	padding: 0;
	clear: both;
	background: linear-gradient(90deg, red, purple);
	float:right
}

</style>

