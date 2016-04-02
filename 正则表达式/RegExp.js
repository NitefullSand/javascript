// JavaScript Document
//test() 方法检索字符串中的指定值。返回值是 true 或 false
var pattern=new RegExp("mn");
var str="I like java.";
alert(pattern.test(str));

//exec() 方法检索字符串中的指定值。返回值是被找到的值。如果没有发现匹配，则返回 null。
var pattern = /java/ig;
var str="I like java,also like javascript";
alert(pattern.exec(str));

//找到第一个 "e"，并存储其位置
//如果再次运行 exec()，则从存储的位置开始检索，并找到下一个 "e"，并存储其位置
var patt1=new RegExp("e","g");

do
{
result=patt1.exec("The best things in life are free");
document.write(result);
}
while (result!=null)