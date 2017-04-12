/**
 * Created by ASUS on 2017/4/10.
 */
var demo1 = BootstrapPagination($("#demo1"), {
    //记录总数。
    total: 101,
    //当前页索引编号。从其开始（从0开始）的整数。
    pageIndex: 2,
    //当分页更改后引发此事件。
    pageChanged: function (pageIndex, pageSize) {
        alert("page changed. pageIndex:" + pageIndex + ",pageSize:" + pageSize)
    }
});


var dataBody = document.querySelector("#dataBody");
function getData() {
    var xhr = new XMLHttpRequest();
    xhr.open("get","/findUser");
    xhr.onload = function () {
        var res = null;
        if(xhr.response){
            res = JSON.parse(xhr.response);
            var html = "";
            res.contents.forEach(function (employee) {
                    html += "<tr data-uid='" + employee.id + "'>";

                    html += "<td onclick='userNameClick(this)'>";
                    html += employee.userName;
                    html += "</td>";

                    html += "<td onclick='emailClick(this)'>";
                    html += employee.email?employee.email:"";
                    html += "</td>";

                    html += "<td>";
                    html += employee.phoneNumber?employee.phoneNumber:"";
                    html += "</td>";

                    html += "<td>";
                    html += employee.realName?employee.realName:"";
                    html += "</td>";

                    html += "<td>";
                    html += employee.age?employee.age:"";
                    html += "</td>";

                    html += "<td>";
                    html += employee.qq?employee.qq:"";
                    html += "</td>";

                    html += "<td>";
                    html += employee.icon?employee.icon:"";
                    html += "</td>";

                    var createDate = new Date(employee.createAt);
                    html += "<td>";
                    html += (createDate.getMonth()+1)+
                        "-"+createDate.getDate()+
                        " "+createDate.getHours()+":"+createDate.getMinutes();
                    html += "</td>";

                    var updateDate = new Date(employee.updateAt);
                    html += "<td>";
                    html += (updateDate.getMonth()+1)+
                        "-"+updateDate.getDate()+
                        " "+updateDate.getHours()+":"+createDate.getMinutes();
                    html += "</td>";

                    html += "<td>";
                    html += "<input type='button' value='删除' onclick='deleteData(this)' />"+
                        "<input type='button' value='更新' onclick='updateData(this)' />";
                    html += "</td>";

                    html += "</tr>";
                });
            dataBody.innerHTML = html;
        }
    };
    xhr.send();
}
getData();

