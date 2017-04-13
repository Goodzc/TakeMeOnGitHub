/**
 * Created by ASUS on 2017/4/13.
 */
//变量作用域：表示变量定义、赋值、能被访问到的区域
//在es5中，一般只有全局作用域和函数作用域
//全局作用域中的变量相当于全局对象的属性，在浏览器环境中全局对象是window，在node.js中全局对象是global
//程序运行到某个作用域之外时，该作用域将会被系统垃圾回收机制清除掉，此事在访问作用域中的变量，程序就会报错

//声明全局变量
var g = "全局变量g";
console.log(window.g);

//声明函数变量（也叫局部变量或临时变量）
function fnScope() {
    //函数内部不用var声明变量，该函数会成为全局变量
    gFnvar = "函数内部的全局变量";
    var fnVar = "函数变量";
    console.log(fnVar)
}
fnScope();

console.log(window.gFnvar);

/*
//全局作用域访问函数作用域
console.log(fnVar);
*/

//变量作用域提升
//在作用域内部的任意位置声明变量时，该声明语句会被提升到该作用域顶部并将变量值设为undefined，直到程序运行到声明语句编写的位置时
//才会被赋真正的值
function scopeImprove() {
    console.log(message);
    var message = "scope improve";
}
scopeImprove();

/*//面试题（变量作用域提升）
var gOutput = "g out put";
function gOutput() {
    console.log(gOutput);
    var gOutput = "fn out put";
}
gOutput();*/

//面试题（返回值）
function calculate() {
    var result = 20 * "2";
}
var f = calculate();
console.log(f);


//时间函数
function output1() {
    for(var i = 0;i<4;i++){
        setTimeout(function () {
            console.log(i);
        },500)
    }
}
output1();


function mathOperate() {
    console.log(1+1+"2");
    console.log("2"+1+1);
    console.log("2"*1+1);
    console.log(1*"2"+1);
    var a = 100;
    var b = "100";
    console.log(a+b-a);
    console.log(a+b-b);
    //得到0.1999999999.因为计算机智能识别二进制，不能精确的表示十进制小数，所以等不到0.2
    console.log(0.3-0.1);
}
mathOperate();

//判断两个浮点数是否相等
function  floatEqual() {
    var a = 0.927323232;
    var b = 0.927323231;
    console.log(a == b);
    if(a-b<0.00000001){
        console.log("a == b");
    }
}
floatEqual();