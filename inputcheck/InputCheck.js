// JavaScript Document
//错误或提示消息
var errorMessage ;
//检查长度是否够6位
function isLengthThanSix(input)
{	
	if(input.length>=6)
	{
		return true;
	}
	return false;
}
//alert (isLengthThanSix("111111"));
//检查是否为空
function isNull(input)
{
	if(input==null || input.length==0)
	{
		return true;
	}
	return false;
}
//alert (isNull(undefined));
//检查是否是合法的邮箱地址
function isEmailAddress(input)    
{    
 var email = obj.email.value;    
 var pattern =/^([a-zA-Z0-9]+[_|\-|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\-|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/gi;   
 var isOk = pattern.test(email);    
 if(isOk)    
 {    
  return true;    
 }    
 else    
 {    
  return false;    
 }    
}
//检查邮箱地址
function checkEmail(input) {
    if(isNull(input)){
        errorMessage = "请输入邮箱地址";
        return false;
    }
    if(!isEmailAddress(input)) {
        errorMessage = "请输入正确的邮箱地址"
        return false;
    }
    return true;
}
