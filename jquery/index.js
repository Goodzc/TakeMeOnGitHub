/**
 * Created by ASUS on 2017/4/5.
 */
var isMouseDown=false;
var subX,subY,w,h,subLeft,subTop;
var isRightbottomDown=false;
var pins=$(".pin");
$(document).ready(function () {
   var container=$(".container");
   container.mousedown(function (e) {
       isMouseDown=true;
       // var oSet=ele.offset();
       var ele=e.currentTarget;
       subX=e.pageX-ele.offsetLeft;
       subY=e.pageY-ele.offsetTop;
   });

$(window).mouseup(function () {
    isMouseDown=false;
    isRightbottomDown=false;
    downEle=null;

}).mousemove(function (e) {
    if(isMouseDown) {
        var left = e.pageX-subX;
        var top = e.pageY-subY;
        if(left<=10){left=10;}
        if(top<=10){top=10;}
        container.offset({
            left:left,
            top:top
        });
    }
    if(isRightbottomDown){
        if(downEle.index==3){
            w=e.pageX-container.offset().left;
            h=e.pageY-container.offset().top;
        }
        if(downEle.index==2){
            subLeft=container.offset().left-e.pageX;
            w=subLeft+container.width();
            container.offset({
                left:container.offset().left-subLeft
            });
            h=e.pageY-container.offset().top;
        }
        if(downEle.index==1){
            w=e.pageX-container.offset().left;
            subTop=container.offset().top-e.pageY;
            h=subTop+container.height();
            container.offset({
                top:container.offset().top-subTop
            });
        }
        if(downEle.index==0){
            subLeft=container.offset().left-e.pageX;
            w=container.width()+subLeft;
            subTop=container.offset().top-e.pageY;
            h=container.height()+subTop;
            container.offset({
                left:container.offset().left-subLeft,
                top:container.offset().top-subTop
            })
        }
        container.width(w);
        container.height(h);
    }
});
});
var downEle=null;
pins.mousedown(function (e) {
    e.preventDefault();
    e.stopPropagation();
    isRightbottomDown=true;
    downEle={};
    var target=e.currentTarget;
    downEle.index=pins.index($(target));
    console.log(downEle.index);
});
