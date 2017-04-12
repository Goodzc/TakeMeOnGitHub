/**
 * Created by ASUS on 2017/4/7.
 */
var Sequelize = require("sequelize");
var baseConf = require("../configurations/database");
var mysqlConf = baseConf.mysql;

var sequelize = new Sequelize(
    mysqlConf.database,
    mysqlConf.user,
    mysqlConf.password,{
        host:mysqlConf.host,
        port:3306,
        dialect:mysqlConf.dialect,
        pool:{
            max:5,
            min:0,
            idle:10000
        },
        storage:"path/to/database.aqlite"
    });
var Document = sequelize.define(
  "article",
    {
        id:{
            type:Sequelize.STRING,
            primaryKey:true
        },
        title:{
            type:Sequelize.STRING
        },
        type:{
            type:Sequelize.STRING
        },
        content :{
            type:Sequelize.STRING
        },
        author:{
            type:Sequelize.STRING
        },
        avator:{
            type:Sequelize.STRING
        },
        remack:{
            type:Sequelize.STRING
        }
    }
);
exports.createDocument = function () {
    return Document.sync().then(function () {
        return Document.create({
            id: "id" + Math.random(),
            title:"李谨圻之春",
            author:"赵川",
            content:"这是一个春天，小李子来到了国际菁蓉广场",
            type:"0",
            avator:"www.baidu.com"
        });
    });
};
exports.updateDocument = function (document) {
    if(!document.id) return;
    return Document.sync().then(function () {
        return Document.update({
                title:document.title,
                type:document.type,
                content:document.content,
                author:document.author,
                avator:document.avator
        },{
            where:{
                id:document.id
            }
        });
    });
};
exports.getDocument = function () {
    return Document.findAll();
};

var User = sequelize.define(
    "userinfo",
    {
        id: {
            type: Sequelize.STRING,
            primaryKey: true
        },
        userName: {
            type: Sequelize.STRING,
            field: "username"
        },
        password: {
            type: Sequelize.STRING
        },
        email:{
            type:Sequelize.STRING
        },
        phoneNumber: {
            type: Sequelize.STRING,
            field: "phoneNumber"
        },
        nickName: {
            type: Sequelize.STRING
        },
        realName: {
            type: Sequelize.STRING
        },
        gender: {
            type: Sequelize.INTEGER
        },
        age: {
            type: Sequelize.INTEGER
        },
        qq: {
            type: Sequelize.STRING
        },
        remark: {
            type: Sequelize.STRING
        }
    },
    {
        freezeTableName: true
    }
);
exports.createUser = function () {
    return User.sync({force:true}).then(function () {
        return User.create({
            id: "id" + Math.random(),
            userName:"Hancock",
            password:"a121212",
            email:"11@qq.com",
            phoneNumber:"13564689797",
            realName:"逼哥",
            age:14,
            qq:13134678
        });
    });
};
exports.getUser = function () {
    return User.findAll();
};
