/**
 * Created by ASUS on 2017/4/1.
 */
var container=document.querySelector(".container");
var subX,subY;
var isMouseDown=false;
container.onmouseup=function () {
    isMouseDown=false;
};
container.onmousedown=function (e) {
    subX=e.pageX-container.offsetLeft;
    subY=e.pageY-container.offsetTop;
    isMouseDown=true;
};
window.addEventListener("mousemove",function (e) {
    if(isMouseDown){
       container.style.left=(e.pageX - subX)+"px";
       container.style.top=(e.pageY - subY)+"px";
    }
});
