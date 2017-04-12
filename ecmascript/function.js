/**
 * Created by ASUS on 2017/3/27.
 */
//函数
/*function join(p1,p2,p3,p4) {
    var result=p1+p2+p3+p4;
    return result;
}
function output(name,age) {
    var result=join(name,",",age,",");
    var hello="hello";
    console.log(hello + ":" + name + " 我今年 " + age);
    console.log(result);
}
output("angelababy",16);*/



//对象内的函数叫方法
/*var student={
    name:"小明",
    gengder:"男",
    high:"185cm",
    age:18,
    eat:function (food) {
        return this.name + "正在吃" + food;
    }
};
var result=student.eat("香蕉");
console.log(result);
student.name="王胖子";
console.log(student.eat("玻璃"));*/



//arquments
/*
function prinyMessage() {
    var result=arguments[0]+arguments[1]+arguments[2]+arguments[3]+arguments[4];
    return result;
}
var flag=prinyMessage("小俊","正在做","js","函数","练习");
console.log(flag);
*/




//函数的调用方式
//第一  直接调用
window.message = "I'm window msg";
function outputMsg() {
    console.log(this.message);
}
outputMsg();

//第二 对象中的方法调用
var order = {
    goods:["iphone","耳机"],
    totalPrice:10000,
//    商品打折
    discount:function () {
        var price = this.totalPrice*80/100;
        console.log(price);
    }
};
order.discount();
var orderFestival = {
    totalPrice:2000
};
//传递方法的定义而不是方法的调用结果
orderFestival.discount = order.discount;
orderFestival.discount();

//第三 指定this调用

window.brand = "Apple";
var lenovo = {brand:"lenovo"};
function conputerManufactrue(type,childType){
    console.log(this.brand + ":" + type + ":" + childType);
}
conputerManufactrue.apply(window,["macAir","b型"]);
conputerManufactrue.apply(lenovo,["Y系","小y"]);
conputerManufactrue.call(window,"macAir","b型");
conputerManufactrue.call(lenovo,"Y系","小y");

var rComputer = conputerManufactrue.bind(lenovo,"bind","i");
rComputer();


//第四 new关键字调用

function Room(layer,owner,size) {
    this.layer = layer;
    this.owner = owner;
    this.size = size;
}

var xiaoRoom = new Room('第一层','老王','100平米');
console.log(xiaoRoom);
console.log(typeof xiaoRoom);
//new 关键字调用函数具体做了什么
var empty = {};
//新生成一个对象
Room. call(empty);
//调用函数call方法
empty.__proto__ = Room.prototype;
//原型链属性赋值
xiaoRoom = empty;
//将新生成的对象赋值给等号左边的变量
