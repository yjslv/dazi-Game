var smallbox=$(".smallbox")[0];
var smallboxW=smallbox.offsetWidth;
var bigbox=$(".bigbox")[0];

var bigimgW;

var img=$("img",bigbox)[0];
smallbox.onmouseover=function(){
	bigbox.style.display="block";
	bigimgW=img.offsetWidth;
    var bigboxW=bigbox.offsetWidth;
	smallbox.onmousemove=function(e){
		var e=e||window.event;
        var ox=e.offsetX;
        var oy=e.offsetY;
        var bili=(bigimgW-bigboxW)/smallboxW;
        img.style.marginLeft=-ox*bili+"px";
        img.style.marginTop=-oy*bili+"px";
	}
}
smallbox.onmouseout=function(){
	bigbox.style.display="none";
}