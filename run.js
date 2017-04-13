/**
 * Created by ASUS on 2017/4/6.
 */
//创建一个 Express 应用。引用express框架模块，将其内部的express赋值给express变量
var express = require("express");
//express() 是一个由 express 模块导出的入口（top-level）函数。
//调用express方法将返回值express对象赋值给app变量
var app = express();
//配置一个路由，调用Router方法将返回值对象赋值给router变量
var router = express.Router();
//引入自定user模块，将其exports对象赋值给userDb变量
var userDb = require('./server/proceed/user');
userDb.init(router);
userDb.userRouter(router);

app.use("/", router);
//在根目录上查找该静态资源文件
app.use("/", express.static(__dirname));
//查找80
app.listen(8121, function () {
    console.log('服务器运行在8121');
});

var ex = require("express");
var App = ex();
var rou = ex.Router();

//调用router对象的get方法，注册“/student”路由
//路由就是服务器端根据客户端的访问地址找到相应的服务器端资源，响应给客户端
//因为是get，所以该动态资源可以在浏览器的地址栏
//访问，http:/localhost:8121/students.
//也可以使用XMLHTTPRequest（"get","/student"）访问
rou.get("/students",function (req,res) {
//    req就是requsest http 客户端请求对象
//    包括了客户端信息（ip），操作系统，版本，软件信息（浏览器，http客户端等）
//     还包括客户请求传递的数据

//    res就是response,标识服务器端根据客户端传递的参数，组织的服务器端数据响应给客户端。

    // res.write("你好，我是学生数据");
    // res.end();

    var data = {
        message:"获取数据成功",
        contents:[
            {
                name:"我",
                gender:"男",
                age:18,
                address:{
                    province:"四川",
                    city:"德阳",
                    district:"罗江",
                    country:"金山"
                },
                favorites:["篮球","足球","唱歌","妹子","游泳","LOL"]
            },
            {
                name:"李谨圻",
                gender:"男",
                age:16,
                address:{
                    province:"四川",
                    city:"南充",
                    district:"仪陇",
                    country:"复兴"
                }
            },
            {
                name:"胡俊",
                gender:"男",
                age:18,
                address: {
                    province: "四川",
                    city: "德阳",
                    district: "罗江",
                    country: "金山"
                }
            },
            {
                name:"刘兵",
                gender:"男",
                age:16,
                address:{
                    province:"四川",
                    city:"南充",
                    district:"仪陇",
                    country:"复兴"
                }
            }
        ]
    };
    res.json(data);
});
//将动态资源的路径设置为静态资源路劲，可以将动态资源伪装成静态资源
rou.get("/user/details.html",function (req,res) {
    var result = "<div><h1>服务器html字符串</h1></div>";
    //设置服务器端响应内容的类型
    res.setHeader('Content-Type','text/html;charset=UTF-8');
    res.write(result);
   // 关闭本次http链接
   res.end();
//   res.json({});
});
rou.get ("/employee",function (req,res) {
   var Data = {
       message:"成功",
       contents:[
           {
               name:"李谨圻",
               age:20,
               gender:"男"
            },
           {
               name:"王尼玛",
               age:20,
               gender:"女"
           }
       ]
   };
   res.json(Data);
});

App.use("/",rou);
App.use("/",ex.static(__dirname));
App.listen(8126,function () {
    console.log('服务器运行在8126');
});


