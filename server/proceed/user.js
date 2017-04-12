/**
 * Created by forli on 2017/4/6.
 */
//引入模块
var dbSequelize = require('../sequelize-mysql/data-base');

exports.userRouter = function (router) {
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

//对外提供init方法
exports.init = function (rout) {
    //请求updateDocument文件和function（req，res）函数
    //    req就是requsest http 客户端请求对象
    //    包括了客户端信息（ip），操作系统，版本，软件信息（浏览器，http客户端等）
    //     还包括客户请求传递的数据
    //    res就是response,标识服务器端根据客户端传递的参数，组织的服务器端数据响应给客户端。
    rout.get("/updateDocument",function (req,res) {
        var userData = {
            title:req.query.userTitle,
            type:req.query.userType,
            content:req.query.userContent,
            author:req.query.userAuthor,
            avator:req.query.userAvator,
            id:req.query.id
        };
        if(userData.id){
            dbSequelize.updateDocument(userData).then(function (r) {
                res.json({
                    flag:0,
                    message:"",
                    container:r
                })
            });
        }
        else {
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
