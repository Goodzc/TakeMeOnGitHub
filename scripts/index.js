/**
 * Created by ASUS on 2017/3/30.
 */
var carousels = document.querySelectorAll(".carousel") ;
var carouselIndex=carousels.length - 1;
var lastIndex = carousels.length - 1;
var wInterval;
function runningCarousel() {
    var cW = carousels[carouselIndex].offsetWidth;
    function transitionWidth(step){
        cW = cW - step;
        carousels[carouselIndex].style.width = cW + "px";
    }
  wInterval =  setInterval(function(){
      if(cW < 2){
          clearInterval(wInterval);
          transtionEnd({
              index:carouselIndex
          });
          return;
      }
      transitionWidth(2);
  },8);
    carousels[carouselIndex - 1].style ["z-index"] = carousels.length;
}
setTimeout(runningCarousel,1000);
for( var i = carousels.length-1;i>0;i--) {
    carousels[i].addEventListener("transitionend", function () {
        carouselIndex = carouselIndex - 1;
        setTimeout(runningCarousel, 1000);
    });
}







    var container =
        document.querySelector(".container");
var itemWrapper=document.querySelector(".item-wrapper");
var mainItem=document.querySelector(".main-item");
    var animationIsRunning=false;
    container.onmousewheel=function (e) {
        console.log(e.deltaY);
        // console.log(e.wheelDeltaY);
        if(animationIsRunning){
            return;
        }
        animationIsRunning=true;
        if(e.deltaY>0){
            var ele=itemWrapper;
            var subTop=ele.offsetTop-mainItem.offsetHeight;
            // ele.offsetTop=subTop;
            ele.style.top=subTop+"px";
        }
        else{
                var ele=itemWrapper;
                var subTop=ele.offsetTop+mainItem.offsetHeight;
                // ele.offsetTop=subTop;
                ele.style.top=subTop+"px";
            }
    };
    itemWrapper.addEventListener("transitionend",function () {
        animationIsRunning=false;
    });

    container.addEventListener("DOMMouseScroll",function () {
        console.log("兼容firefox");
    });


// document.body.onload=function () {
//     alert("document.body.onload")
// };

// window.addEventListener("load",
//     function () {
//         alert("addEventListener");
//
// });