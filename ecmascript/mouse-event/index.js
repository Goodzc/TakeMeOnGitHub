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
var isRightTopDown=false;
var isLeftBottomDown=false;
var isLeftTopDown=false;
var subX,subY;
container.onmousedown=function (e) {
   subX=e.pageX-e.currentTarget.offsetLeft;
    subY= e.pageY-e.currentTarget.offsetTop;
    isMouseDown=true;
};
window.onmouseup=function () {
    isMouseDown=false;
    isRightBottomDown=false;
    isRightTopDown=false;
    isLeftBottomDown=false;
    isLeftTopDown=false;
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
        var w3=mouseX-container.offsetLeft;
        container.style.width=w3 + "px";
        var h=mouseY-container.offsetTop;
        container.style.height=h + "px";
        // pins[3].style.left=(mouseX-10) + "px";
        // pins[3].style.top=(mouseY-10) + "px";
    }
    if(isRightTopDown){
        var w1=mouseX-container.offsetLeft;
        container.style.width=w1 + "px";
        var subTop=container.offsetTop-mouseY;
        var h1=container.offsetHeight+subTop;
        container.style.height=h1 + "px";
        container.style.top=(container.offsetTop-subTop) + "px";
    }
    if(isLeftBottomDown){
        var subLeft=container.offsetLeft-mouseX;
        var w2=container.offsetWidth +subLeft;
        container.style.width=w2 + "px";
        container.style.left=(container.offsetLeft-subLeft) + "px";
        var h2=mouseY-container.offsetTop;
        container.style.height=h2 + "px";
    }
    if(isLeftTopDown){
        var subleft=container.offsetLeft-mouseX;
        var w0=container.offsetWidth +subleft;
        container.style.width=w0 + "px";
        container.style.left=(container.offsetLeft-subleft) + "px";
        var subtop=container.offsetTop-mouseY;
        var h0=container.offsetHeight+subtop;
        container.style.height=h0 + "px";
        container.style.top=(container.offsetTop-subtop) + "px";
    }
});
pins[3].onmousedown=function (e) {
    e.preventDefault();
    e.stopPropagation();
    isRightBottomDown=true;
};
pins[1].onmousedown=function (e) {
    e.preventDefault();
    e.stopPropagation();
    isRightTopDown=true;
};
pins[2].onmousedown=function (e) {
    e.preventDefault();
    e.stopPropagation();
    isLeftBottomDown=true;
};
pins[0].onmousedown=function (e) {
    e.preventDefault();
    e.stopPropagation();
    isLeftTopDown=true;
};