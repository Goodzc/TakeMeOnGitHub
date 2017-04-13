/**
 * Created by ASUS on 2017/4/7.
 */
//
var Sequelize = require("sequelize");
//引入数据库配置，比如数据库主机，端口号，数据库名，登录用户名，密码，端口类型
//每个连接池的最大连接数
var baseConf = require("../configurations/database");
var mysqlConf = baseConf.mysql;
//调用Sequelize函数，设置数据库主机信息
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
//创建与数据库中数据表对应的orm对象（）
//（orm Object Relational Mapping 对象映射）
//sequelize.define方法，
// 第一个参数，数据库表名 数据类型 string；
// 第二个参数 数据表字段的定义 数据类型 object
//第三个参数 同步数据表的行为参数 数据类型 object
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
exports.createDocument = function (document) {
    return Document.sync().then(function () {
        return Document.create({
            id: "id" + Math.random(),
            title:document.title,
            author:document.author,
            content:document.content,
            type:document.type,
            avator:document.avator
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
        //默认为false，修改表名为复数，true不能修改表名与数据库表名一致
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
