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
function prinyMessage() {
    var result=arguments[0]+arguments[1]+arguments[2]+arguments[3]+arguments[4];
    return result;
}
var flag=prinyMessage("小俊","正在做","js","函数","练习");
console.log(flag);