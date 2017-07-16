var box=$(".box")[0];
var flagdown=1;
var flagup=1;
	window.onscroll=function(){
	  
	    var obj=document.documentElement.scrollTop?document.documentElement:document.body; 
	     console.log(obj.scrollTop);

	if (obj.scrollTop>=608) {
		if (flagdown==1) {
        // box.style.display="block";
         animate(box,{height:50},400);
         flagdown=2;
         flagup=1;
        }

	  }
	  else{
	  	if (flagup==1)
		// box.style.display="none";
         animate(box,{height:0},400)
         flagup=2;
         flagdown=1;
	     }  
}