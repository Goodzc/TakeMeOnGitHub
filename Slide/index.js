

window.onload = function () {
    var ul = document.querySelector(".ul");
    var li = ul.querySelectorAll('li');
/*    for(var  i = 0;i <= li.length;i ++){
        li[i].onclick = function () {
            console.log(1);
        }
    }*/
    ul.onclick = function () {
     console.log(1);
 };

};
/*function click() {
    var ul = document.querySelector(".ul");
    var li = ul.querySelectorAll('li');
   for(var  i = 0;i <= li.length;i ++){
       li[i].onclick = function () {
           console.log(1);
       }
   }
}*/

