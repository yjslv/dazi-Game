
var start=document.getElementsByClassName("start")[0];
var presh=document.getElementsByClassName("presh")[0];
var new1=document.getElementsByClassName("new1")[0];
new1.onclick=function(){
	location.reload();
}
function game(){

		this.arr=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U",
        "V","W","X","Y","Z"]; 
		this.obj={A:"img/A.png",B:"img/B.png",C:"img/C.png",D:"img/D.png",E:"img/E.png",F:"img/F.png",
        G:"img/G.png",H:"img/H.png",I:"img/I.png",J:"img/J.png",K:"img/K.png",L:"img/L.png",M:"img/M.png",
        N:"img/N.png",O:"img/O.png",P:"img/P.png",Q:"img/Q.png",R:"img/R.png",S:"img/S.png",T:"img/T.png",
        U:"img/U.png",V:"img/V.png",W:"img/W.png",X:"img/X.png",Y:"img/Y.png",Z:"img/Z.png"}
		this.clientH=document.documentElement.clientHeight;
		this.clientW=document.documentElement.clientWidth;
       this.t;
		this.life=$(".life")[0];
		this.gqele=$(".gq")[0];
		this.scroneele=$(".scrone")[0];
		this.zscroneele=$(".zscrone")[0];
		this.error1=$(".error")[0];
		this.next1=$(".next")[0];
		this.speed=9;
		this.scrone=0;
		this.zscrone=0;
		this.gq=1;
		this.shengming=10;
		this.fenshu=10;
		this.currArr=[];
        this.currLetter=[];//记录挡墙页面中的数r
		this.geshu=3;
       }

        game.prototype={

            play:function(){
				that=this;
           this.createLetter(this.getRand(this.geshu));
           this.move(this.shengming);
           this.key(this.currLetter);
           },

            move:function(shengming){
         	var that=this;
         	t=setInterval(function(){
	      		for (var i = 0; i < that.currLetter.length; i++) {
	      			
                   var tops=that.currLetter[i].offsetTop+that.speed;
	      			that.currLetter[i].style.top=tops+"px";
                   if (tops>that.clientH-90) {
                      document.body.removeChild(that.currLetter[i]);//取消掉超出页面的当前字母
                      that.currLetter.splice(i,1);//新建一个span标签
                      that.currArr.splice(i,1);
                      that.getRand(1);
                      that.createLetter(that.getRand(1));
                       that.shengming--;
                       that.life.innerHTML=that.shengming;
                       if (that.shengming<=0) {
                       	that.error1.style.display="block";
                       	clearInterval(t)
                       	that.error1.onclick=function(){
                       	 location.reload();	
                       	}
                       }
                   } 
	      			
	      		};
	      	},60)
                presh.onclick=function(){
                    clearInterval(t);
                    start.style.display="block";
                }
                start.onclick=function(){
                    start.style.display="none";
                    t=setInterval(function() {
                        for (var i = 0; i < that.currLetter.length; i++) {
                            var tops = that.currLetter[i].offsetTop;
                            that.currLetter[i].style.top = tops + that.speed + "px";
                            if (tops > that.clientH-90) {
                                for (var j = 0; j < that.currArr.length; j++) {
                                    if (that.currArr[j] == that.currLetter[i].className) {
                                        that.currArr.splice(j, 1);
                                    }
                                }
                                that.currLetter[i].parentNode.removeChild(that.currLetter[i]);
                                that.currLetter.splice(i, 1);//新建一个span标签
                                that.currArr.splice(i, 1);
                                that.getRand(1);
                                that.createLetter(that.getRand(1));
                                that.shengming--;
                                that.life.innerHTML = that.shengming;
                                if (that.shengming <= 0) {
                                    that.error1.style.display = "block";
                                    clearInterval(t)
                                    that.error1.onclick = function () {
                                        location.reload();
                                    }
//                                that.getLetter(1);
//                                that.currLetter[i]=null;
                                }
                            }
                        }
                    },50)
                    // that.play();
                }
         },

       
               key:function(currLetter){
               	var that=this;
               	document.onkeydown=function(e){
        		var e=e||window.event;
        		var letter=String.fromCharCode(e.keyCode);
        		for (var i = 0; i < that.currLetter.length; i++) {
        			if(that.currLetter[i].values==letter){
        				document.body.removeChild(that.currLetter[i]);
        				      that.currArr.splice(i,1);
                      that.currLetter.splice(i,1);//新建一个span标签
                      that.getRand(1);
                      that.createLetter(that.getRand(1));
                      that.scrone++;
                      that.zscrone++;
                      that.scroneele.innerHTML=that.scrone;
                      that.zscroneele.innerHTML=that.zscrone;
                      if (that.scrone>=that.fenshu) {
                      	// alert("恭喜进入下一关啦！！！");
                      	// document.onkeydown=null
                      	that.next1.style.display="block";
                      	clearInterval(t);
                        // document.onkeydown=null
                      	that.next1.onclick=function(){
                      		this.style.display="none"
                      		that.next(that.shengming,that.zscrone);
                      	}
                      	
                      }

        			}
        				
        		};
        	}
               },

        next:function(shengming,zscrone){
          clearInterval(this.t);
          var that=this;
         for (var j = 0; j <this.currLetter.length; j++) {
           	var that=this;
            document.body.removeChild(that.currLetter[j])
          }
	      that.currArr=[];
	      that.currLetter=[];
          that.speed+=1;
          if (that.speed>10) {
            tbat.speed=10;
          }
	      that.gq+=1;
	      that.scrone=0;
	      that.scroneele.innerHTML=that.scrone;
	      that.gqele.innerHTML=that.gq;
	      that.geshu+=1;
	      that.fenshu+=5
	      if (that.geshu>=15) {
	  	   that.geshu=15;
	      } else{ 
	     	that.getRand(that.geshu);
	     	that.createLetter(that.getRand(that.geshu));
	    	that.move(that.shengming);
	    	that.key();
	    }
      },
     	getRand:function(num){
     		
     		var newarr=[];
            	for (var i = 0; i < num;i++) {
            		var letter=this.arr[Math.floor(Math.random()*this.arr.length)];
            		while (this.check(letter,this.currArr)){
                       letter=this.arr[Math.floor(Math.random()*this.arr.length)];
            		}
            		newarr.push(letter);
            		this.currArr.push(letter);
            	};
            	return newarr;
         },

     	check:function(letter,arr){
     		   for (var i = 0; i < arr.length; i++) {
               	if (letter==arr[i]) {
                      return true;
               	}
               }
               return false;
     	},

     	createLetter:function(arr){
	      		var newarr=[];
	      	for (var i = 0; i <arr.length; i++) {
	      		
	      		var span=document.createElement("span");
	      		span.innerHTML="<img src="+this.obj[arr[i]]+" style='width:60px;'>";
	      		span.values=arr[i]
	      		var lefts=(100+Math.random()*(this.clientW-200));
	      		span.lefts=lefts;
	      		var tops=(Math.random()*30-15);
            document.body.appendChild(span);

	      		while(this.checkPos(span,this.currLetter)){
	      			lefts=(100+Math.random()*(this.clientW-200));
                  span.lefts=lefts;
	      		}
	      		newarr.push(span);
	      		this.currLetter.push(span);
	      		span.style.cssText="position:absolute;left:"+lefts+"px;top:"+tops+"px;font-size:20px;"
	      
         }	return newarr;
     	},

     	 checkPos:function(ele,eleArr){
               for (var i = 0; i < eleArr.length; i++) {
               	if (ele.lefts>eleArr[i].lefts-70&&ele.lefts<eleArr[i].lefts+70) {
                      return true;
               	}
               }
               return false;
	      }
	 } 
	 