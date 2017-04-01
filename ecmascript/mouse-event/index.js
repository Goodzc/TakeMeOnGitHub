/**
 * Created by ASUS on 2017/4/1.
 */
var container=document.querySelector(".container");
var pins=document.querySelectorAll(".pin");
var isRightBottomDown=false;
var conWidth=container.offsetWidth;
var conHeight=container.offsetHeight;
var maxLeft=window.innerWidth-conWidth-5;
var maxTop=window.innerHeight-conHeight-5;
var isMouseDown=false;
var subX,subY;
container.onmousedown=function (e) {
   subX=e.pageX-e.currentTarget.offsetLeft;
    subY= e.pageY-e.currentTarget.offsetTop;
    isMouseDown=true;
};
window.onmouseup=function () {
    isMouseDown=false;
    isRightBottomDown=false;
};
window.addEventListener("mousemove",function (e) {
    var mouseX=e.pageX;
    var mouseY=e.pageY;
    if(isMouseDown){
        var left=mouseX-subX;
        var top=mouseY-subY;
        if(left<=5){left=5;}
        if(top<=5){top=5;}
        if(left>=maxLeft){left=maxLeft}
        if(top>=maxTop){top=maxTop}
        container.style.left=left + "px";
        container.style.top=top + "px";
    }
    if(isRightBottomDown){
        var w=container.offsetLeft+mouseX;
        container.style.width=w + "px";
        var h=container.offsetTop+mouseY;
        container.style.height=h + "px";
        // pins[3].style.left=(mouseX-10) + "px";
        // pins[3].style.top=(mouseY-10) + "px";
    }
});
pins[3].onmousedown=function (e) {
    e.preventDefault();
    e.stopPropagation();
    isRightBottomDown=true;
};