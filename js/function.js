// 1.通过类名获得元素的兼容问题

function getClass(selector,father){
	father=father||document;
	if (father.getElementsByClassName) {
		return father.getElementsByClassName(selector);
	}else{
		var all=father.getElementsByTagName("*");
		var newarr=[];
		for (var i = 0; i < all.length; i++) {
			if(check(all[i].className,selector)){
                newarr.push(all[i]);
		}
			}
		return newarr;
	}
}
function check(str,selector){
    var arr=str.split(" ");
    for(var i in arr){
    	if (arr[i]==selector) {
    		return true;
    	}
    }
    return false;
}


// 2.获取样式的兼容函数
// getStyle(ele,attr)
// ele:操作的document对象
// attr：获取哪个属性的值
function getStyle(ele,attr){
	if (ele.currentStyle) {
		return ele.currentStyle[attr];
	}else{
		return getComputedStyle(ele,null)[attr];
	}
}

//4.获取元素的兼容函数
/*$(".box");
  $("#box");
  $("li");*/
 //selector:表示选择器，与CSS的选择器一样   . #
 //father:父容器
 function  $(selector,father) {
 	// 给父容器设置默认值
 	//document对现有的方法 所以需要提前将".father"转换为document对象
 	father=father||document;
 	//对selector做判断
 	if(typeof selector=="string"){//必须是字符串
 		selector.replace(/^\s*|\s*$/g,"");//前面的（/^\s*|\s*$/g）用来去除字符串左右的空格，后面的（""）为用
 		if(selector.charAt(0)=="."){//条件为真时，字符串为类名
 			//".box" 转换为"box" .slice / .substring /.substr
 			return getClass(selector.slice(1),father);
 		}else if(selector.charAt(0)=="#"){//是ID名
 			return father.getElementById(selector.slice(1));
 			//正则的规范：//
 		}else if(/^[a-zA-Z1-6]{1,10}$/.test(selector)){//标签名
 			return father.getElementsByTagName(selector);
 		}
 	}else if(typeof selector=="function"){
 		//是一个函数时，执行window.onload事件
 		window.onload=function(){
 			selector();//
 		}
 	}
 }


/*****************************************************************/
 // 2016.05.06
 //5、获取子元素的兼容函数
 //"a"只有元素节点
 //"b"文本和元素节点
 function getChilds(father,type){
 	type=type||"a";
 	var all=father.childNodes;
 	var arr=[];
 	for (var i=0;i<all.length;i++) {
 		if(type=="a"){//只获取元素子节点
	 		if(all[i].nodeType==1){
	 			arr.push(all[i]);
	 		}
	 	}else if(type=="b"){//获取元素+文本子节点
	 		if(all[i].nodeType==1 || (all[i].nodeValue.replace(/^\s*\s*$/g,"")!="" && all[i].nodeType==3)){
	 			arr.push(all[i]);
	 		}
	 	}
 	};
 	return arr;
 }


 // 6、获得子节点中的第一个
function getFirst(father){
	return getChilds(father,"b")[0];
}

 // 7、获得子节点中的最后一个
 function getLast(father){
	return getChilds(father,"b")[(getChilds(father,"b").length-1)];
}

 // 8、通过指定下标来获得子节点中的一个
 function getNum(father,num){
 	return getChilds(father)[num];
}

 //9、获得指定下标元素的下一个兄弟节点
 function getNext(ele){
 	var next=ele.nextSibling;//下一个
 	if(next==null){
 		return false;
 	}
 	while(next.nodeType==8 || (next.nodeType==3 && next.nodeValue.replace(/^\s*|\s*$/g,"")=="")){//条件满足 接着找(条件为注释节点或者文本节点)
       next=next.nextSibling;
       if(next==null){
 		return false;
 	}
 	}
    return next;
}


//10、获得指定下标元素的上一个兄弟节点
  //ele  一个元素节点
 function getUp(ele){
 	var up=ele.previousSibling;//上一个
 	if(up==null){
 		return false;
 	}
 	while(up.nodeType==8 || (up.nodeType==3 && up.nodeValue.replace(/^\s*|\s*$/g,"")=="")){//条件满足 接着找(条件为注释节点或者文本节点)
       up=up.previousSibling;
       if(up==null){
 		return false;
 	}
 	}
    return up;
}



//11、插到某一个对象之后
function insertAfter(father,newNode,node){
	var next=getNext(node);
	if(next){
		father.insertBefore(newNode,next);
	}else{
		father.appendChild(newNode)
	}
}

