/**
 * Created by ASUS on 2017/4/6.
 */
//创建一个 Express 应用。
var express = require("express");
//express() 是一个由 express 模块导出的入口（top-level）函数。
var app = express();
//配置一个路由
var router = express.Router();

var userDb=require('./server/proceed/user');
userDb.init(router);
userDb.userRouter(router);

app.use("/",router);
//在根目录上查找该静态资源文件
app.use("/",express.static(__dirname));
//查找80
app.listen(8121,function(){
    console.log('服务器运行在8121');
});

/*var ex = require("express");
var App = ex();
var rou = ex.Router();

router.get("/students",function (req,res) {
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
router.get ("/employee",function (req,res) {
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
});*/

/*App.use("/",rou);
App.use("/",ex.static(__dirname));
App.listen(8119);*/


