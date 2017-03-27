/**
 * Created by ASUS on 2017/3/27.
 */
//字符串与数字
/*var str="8888";*/


//显式转换
/*var num8=Number(str);
console.log(typeof num8);
var numParse=parseInt(str);
var numParseFloat=parseFloat(str);
console.log(typeof numParseFloat);
console.log(typeof numParse);*/


//隐式转换
/*var subNum=str-0;
var multnum=str*1;
var subNumber=str/1;
console.log(typeof subNum);*/


//非数字字符串转换数字
/*var nonNumber="abc";
console.log(Number(nonNumber));
console.log(typeof Number(nonNumber));*/


//字符串类型转换
/*
var numToStr=666;
var strNumber=String(numToStr);
console.log(strNumber);
console.log(typeof strNumber);
var name="小明",
    age=18,
    gengder="女",
    comeFrom="成都",
    special="去过日本";
var source="我叫" +name+"，" +
    "来自"+comeFrom+"，" +
    "今年"+age+"，" +
    "性别:"+gengder+
    "（‘"+special+"’）";
console.log(source);*/

//布尔类型转换
var zer=0,
    emptyStr="",
    obj=null,
    un123,
    notNumber=NaN;
var zBool=Boolean(zer);
var emptyBool=Boolean(emptyStr);
var oBool=Boolean(obj);
var unBool=Boolean(un123);
var notNumBool=Boolean(notNumber);
console.log(zBool);
console.log(emptyBool);
console.log(oBool);
console.log(unBool);
console.log(notNumBool);
