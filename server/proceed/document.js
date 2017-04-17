/**
 * Created by ASUS on 2017/4/17.
 */
var dataBase = require("../sequelize-mysql/data-base");
exports.init = function (router) {
    router.get("/createReportUnit",function (req,res) {
        var unit = {
            name:req.query.name,
            status:0
        };
        dataBase.createReportUnit(unit).then(function (result) {
            res.json(result);
        })
    });
    router.get("/getUnits",function (req,res) {
        dataBase.getUnits().then(function (result) {
            res.json(result)
        })
    });

    //请求updateDocument文件和function（req，res）函数
    //    req就是requsest http 客户端请求对象
    //    包括了客户端信息（ip），操作系统，版本，软件信息（浏览器，http客户端等）
    //     还包括客户请求传递的数据
    //    res就是response,标识服务器端根据客户端传递的参数，组织的服务器端数据响应给客户端。
    router.get("/updateDocument",function (req,res) {
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
            dataBase.updateDocument(userData).then(function (r) {
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
            dataBase.createDocument(userData).then(function (r) {
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
    router.get("/findDocument",function (req,res){
        var pIndex = req.query.pageIndex;
        var pSize = req.query.pageSize;
        if(!pIndex){
            pIndex = 0;
        }
        if(!pSize){
            pSize = 8;
        }
        pIndex = Number(pIndex);
        pSize = Number(pSize);

        console.log(pIndex+":is page index");
        dataBase.getDocument().then(function(r){
            var result = {
                status:0,
                message:"",
                contents:[],
                total:r.length
            };
            var start = 0;
            var end = 0;
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
