	var imgbox=$(".imgbox");
    var now=1;
	var btnli=$("li",$(".btn")[0]);	
	var colorarr=["yellow","plum","green","red","blue","pink"];
	document.documentElement.scrollTop=1;
	var obj=document.documentElement.scrollTop?document.documentElement:document.body;
	window.onscroll=function(){
		for (var i = 0; i <= imgbox.length; i++) {
			
			if (imgbox[i].offsetTop<=obj.scrollTop+50) {
				for (var j = 0; j < btnli.length; j++) {
						 btnli[j].style.background="#000";
				};
				 btnli[i].style.background=colorarr[i];
                 now=i;
			} 	
		};
	}

	for (var i = 0; i <= btnli.length; i++) {

		btnli[i].index=i;
		btnli[i].onclick=function(){
			now=this.index;
			animate(obj,{scrollTop:imgbox[this.index].offsetTop-50},100);
		}

		btnli[i].onmouseover=function(){

		  for (var j = 0; j < btnli.length; j++) {
			if (now!=j) {
				btnli[j].style.background="#000";
			}
		 this.style.background=colorarr[this.index];
		}	
		  
	    }


	};


 
 //   for (var j = 0; j <= btnli.length; j++) { 
 //   	    btnli[j].aa=j
 //    	btnli[j].onmouseover=function(){ 
 //    		for (var i = 0; i < btnli.length; i++) {
	// 		 if (now!=i) {
	// 		        this.style.background="#000";
	// 		 } else{  
	// 		 	this.style.background=colorarr[this.aa];
	// 		 }			
	// 		  	};
	// 	};
         
	// }
	