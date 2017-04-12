/**
 * Created by ASUS on 2017/4/6.
 */
function  getEmployee() {
    var xm = new XMLHttpRequest();
    xm.open("get","../employee");
    xm.onload = function (res) {
        var Data = JSON.parse(xm.response);
        var header = document.querySelector(".header");
        var html = "";
        for(var i=0;i<Data.contents.length;i++){
            var content = Data.contents[i];
            html += "<div class='header'>" ;
            html += "<div class='row'>" + content.name + "</div>";
            html += "<div class='row'>" + content.age + "</div>";
            html += "<div class='row'>" + content.gender + "</div>";
            html +=  "</div>";
        }
        header.innerHTML += html;
    };
    xm.send();
}
getEmployee();
