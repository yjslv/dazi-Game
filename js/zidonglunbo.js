// 思路
// 1.获取元素 img btn
// 2.开启setInterval();
// 3.双下标控制图片的左移
// now 图片在可视区域中，移动到可视区域的左边
// next 图片在可视区域的右边，移动到可视区域中
// now=next


var box=$(".box");
alert(box.length)
var btn=$(".btn")[0];
var btn=btn.getElementsByTagName("li");
for (var i = 1; i < box.length; i++) {
	box[i].style.left="610px";
}
var now=0;
var next=0;
function moveleft(){
	next++;
	if (next>=box.length) {
		next=0;
	}
	animate(box[now],{left:-610},500);
	box[next].style.left="610px";
	animate(box[next],{left:0},500);
	btn[now].id="";
	btn[next].id="active";
	now=next;
}
function moveright(){
	next--;
	if (next<=-1) {
		next=box.length-1;
	}
	animate(box[now],{left:610},500);
	box[next].style.left="-610px";
	animate(box[next],{left:0},500);
	btn[now].id="";
	btn[next].id="active";
	now=next;
}
var t=setInterval(moveleft,2000);
var banner=getClass("banner")[0];
banner.onmouseover=function(){
	leftbtn.style.display="block";
	rightbtn.style.display="block";
	clearInterval(t);
}
banner.onmouseout=function(){
	leftbtn.style.display="none";
	rightbtn.style.display="none";
	t=setInterval(moveleft,2000);
}

var leftbtn=getClass("leftbtn")[0];
var rightbtn=getClass("rightbtn")[0];
leftbtn.onclick=function(){
	moveleft();
}
rightbtn.onclick=function(){
	moveright();
}

for (var i = 0; i < btn.length; i++) {
	btn[i].bb=i;
	btn[i].onclick=function(){
		next=this.bb;
        box[next].style.left="1190px";
        animate(box[next],{left:0});
        box[now].style.zIndex=0;
        box[next].style.zIndex=5;
        btn[now].id="";
        btn[next].id="active";
        now=next;

	}
}
