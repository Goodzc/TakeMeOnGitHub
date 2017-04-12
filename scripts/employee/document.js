/**
 * Created by ASUS on 2017/4/10.
 */
var gpageIndex = 0;
var gpageSize = 10;
var container = document.querySelector(".container");
var dataBody = document.querySelector("#dataBody");
function setContainerHeight(height) {
    container.style.height = height + "px";
     function setContainerHeight() {

    }
}
function get(currentPageIndex) {
    var xhr = new XMLHttpRequest();
    xhr.open("get","/findDocument?pageIndex="+currentPageIndex + "&pageSize=" + gpageSize);
    xhr.onload = function () {
        var res = null;
        if(xhr.response){
            res = JSON.parse(xhr.response);
            BootstrapPagination($("#demo1"), {
                //记录总数。
                total: res.total,
                //当前页索引编号。从其开始（从0开始）的整数。
                pageIndex: gpageIndex,
                //指示分页导航栏中最多显示的页索引数量。
                pageGroupSize:6,
                //位于导航条左侧的输出信息格式化字符串
                leftFormateString: "{count}/{total}",
                //位于导航条右侧的输出信息格式化字符串
                rightFormateString: "{pageNumber}/{totalPages}",
                //分页尺寸输出格式化字符串
                pageSizeListFormateString: "每页{pageSize}条",
                pageSize:gpageSize,
                //当分页更改后引发此事件。
                pageChanged: function (pageIndex, pageSize) {
                    gpageIndex = pageIndex;
                    get(gpageIndex);
                }
            });

            var html = "";
            res.contents.forEach(function (document) {
                html += "<tr data-uid='" + document.id + "'>";

                html += "<td onclick='titleClick(this)'>";
                html += document.title;
                html += "</td>";

                html += "<td onclick='typeClick(this)'>";
                html += document.type;
                html += "</td>";

                html += "<td onclick='contentClick(this)'>";
                html += document.content;
                html += "</td>";

                html += "<td onclick='authorClick(this)'>";
                html += document.author;
                html += "</td>";

                html += "<td onclick='avatorClick(this)'>";
                html += document.avator;
                html += "</td>";

                // html += "<td>";
                // html += employee.qq?employee.qq:"";
                // html += "</td>";
                //
                // html += "<td>";
                // html += employee.icon?employee.icon:"";
                // html += "</td>";

                var createDate = new Date(document.createAt);
                html += "<td>";
                html += (createDate.getMonth()+1)+
                    "-"+createDate.getDate()+
                    " "+createDate.getHours()+":"+createDate.getMinutes();
                html += "</td>";

                var updateDate = new Date(document.updateAt);
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
            setContainerHeight(container.offsetHeight) ;
        }
    };
    xhr.send();
}
// var mailInput = $("#updateEmail");
var uTitleEle = $("#title");
var uTypeEle = $("#type");
var uContentEle = $("#content");
var uAuthorEle = $("#author");
var uAvatorEle = $("#avator");
function updateData(element) {
    var tr = $(element).parents("tr");
    var tds = tr.children();
    var title = tds.eq(0).text();
    uTitleEle.val(title);
    var type = tds.eq(1).text();
    uTypeEle.val(type);
    var content = tds.eq(2).text();
    uContentEle.val(content);
    var author = tds.eq(3).text();
    uAuthorEle.val(author);
    var avator = tds.eq(4).text();
    uAvatorEle.val(avator);
    var id = tr.attr("data-uid");
    $("#idInput").val(id);
    // mailInput.val(id);
    $(".modal").modal();
}
get(gpageIndex);