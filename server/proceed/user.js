/**
 * Created by forli on 2017/4/6.
 */
//引入data-base模块，使用sequlize操作数据库
var dbSequelize = require('../sequelize-mysql/data-base');

exports.userRouter = function (router) {
    //以get方式注册更新用户信息的路由
    router.get("/updateUser", function (req, res) {
        dbSequelize.createUser().then(function (r) {
            var result = {
                id: r.dataValues.id,
                userName: r.dataValues.userName,
                password:r.dataValues.password,
                email:r.dataValues.email,
                phoneNumber:r.dataValues.phoneNumber,
                realName:r.dataValues.realName,
                age:r.dataValues.age,
                qq:r.dataValues.qq,
                createAt: r.dataValues.createdAt,
                updateAt: r.dataValues.updatedAt
            };
            res.json(result);
        });
    });

  /*  router.post("/updateUser", function (req, res) {
        dbSequelize.createUser().then(function (r) {
            var result = {
                id: r.dataValues.id,
                userName: r.dataValues.userName,
                createAt: r.dataValues.createdAt,
                updateAt: r.dataValues.updatedAt
            };
            res.json(result);
        });
    });*/

    router.get("/findUser", function (req, res) {
        dbSequelize.getUser().then(function (r) {
            var result = {
                status: 0,
                message: "",
                contents: []
            };
            r.forEach(function (rTemp) {
                var data = {
                    id: rTemp.dataValues.id,
                    userName: rTemp.dataValues.userName,
                    email:rTemp.dataValues.email,
                    phoneNumber:rTemp.dataValues.phoneNumber,
                    realName:rTemp.dataValues.realName,
                    age:rTemp.dataValues.age,
                    qq:rTemp.dataValues.qq,
                    createAt: rTemp.dataValues.createdAt,
                    updateAt: rTemp.dataValues.updatedAt
                };
                result.contents.push(data);
            });
            res.json(result);
        });
    });
};

//exports暴露init方法给引用本模块的模块
//init方法的作用是使用传递进来的rout对象，注册用户相关的操作的路由
exports.init = function (rout) {
    //请求updateDocument文件和function（req，res）函数
    //    req就是requsest http 客户端请求对象
    //    包括了客户端信息（ip），操作系统，版本，软件信息（浏览器，http客户端等）
    //     还包括客户请求传递的数据
    //    res就是response,标识服务器端根据客户端传递的参数，组织的服务器端数据响应给客户端。
    rout.get("/updateDocument",function (req,res) {
        //创建临时对象userData，接收客户端传递的参数
        //req.query,接收地址最后的？传递的参数
        var userData = {
            title:req.query.userTitle,
            type:req.query.userType,
            content:req.query.userContent,
            author:req.query.userAuthor,
            avator:req.query.userAvator,
            id:req.query.id
        };
        //判断客户端是否传递userid，如果传了userid是表示数据库已存在用户的信息，要去更新这条数据
        if(userData.id){
            //修改已存在的用户数据
            dbSequelize.updateDocument(userData).then(function (r) {
                //更新数据操作是由node.js发起请求，由数据库执行，当数据库执行完成后，会通过then方法传递的函数，来告诉node.js
                //数据库更新完成，更新完成返回的数据由r参数传递
                res.json({
                    flag:0,
                    message:"",
                    container:r
                })
            });
        }
        //如果没有传userid表示要在数据库新建一条数据
        else {
            //创建新的用户数据
            dbSequelize.createDocument(userData).then(function (r) {
                var result = {
                    id:r.dataValues.id,
                    title:r.dataValues.title,
                    type:r.dataValues.type,
                    content:r.dataValues.content,
                    author:r.dataValues.author,
                    avator:r.dataValues.avator,
                    createAt:r.dataValues.createdAt,
                    updateAt:r.dataValues.updatedAt
                };
                res.json(result);
            });
        }
    });
 /*   rout.post("/updateDocument",function (req,res) {
        dbSequelize.createDocument().then(function (r) {
            var result = {
                id:r.dataValues.id,
                title:r.dataValues.title,
                type:r.dataValues.type,
                content:r.dataValues.content,
                author:r.dataValues.author,
                avator:r.dataValues.avator,
                createAt:r.dataValues.createdAt,
                updateAt:r.dataValues.updatedAt
            };
            res.json(result);
        });
    });*/
    rout.get("/findDocument",function (req,res){
        var pIndex = Number(req.query.pageIndex);
        console.log(pIndex+":is page index");
        dbSequelize.getDocument().then(function(r){
            var result = {
                status:0,
                message:"",
                contents:[],
                total:r.length
            };
            var start = 0;
            var end = 0;
            var pSize = Number(req.query.pageSize);
            start = pIndex * pSize;
            end = start + pSize;
            if(end>r.length){
                end = r.length;
            }
            for(i = start;i<end;i++){
                var rTemp = r[i];
                var data = {
                    id:rTemp.dataValues.id,
                    title:rTemp.dataValues.title,
                    type:rTemp.dataValues.type,
                    content:rTemp.dataValues.content,
                    author:rTemp.dataValues.author,
                    avator:rTemp.dataValues.avator,
                    createAt:rTemp.dataValues.createdAt,
                    updateAt:rTemp.dataValues.updatedAt
                };
                result.contents.push(data);
            }
            // r.forEach(function(rTemp){
            //     var data = {
            //         id:rTemp.dataValues.id,
            //         title:rTemp.dataValues.title,
            //         type:rTemp.dataValues.type,
            //         content:rTemp.dataValues.content,
            //         author:rTemp.dataValues.author,
            //         avator:rTemp.dataValues.avator,
            //         createAt:rTemp.dataValues.createdAt,
            //         updateAt:rTemp.dataValues.updatedAt
            //     };
            //     result.contents.push(data);
            // });
            res.json(result);
        });
    });
};
