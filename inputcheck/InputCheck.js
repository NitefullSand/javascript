// JavaScript Document
function isLengthThanSix(input)
{	
	if(input.length>=6)
	{
		return true;
	}
	return false;
}
//alert (isLengthThanSix("111111"));
function isNull(input)
{
	if(input==null || input.length==0)
	{
		return true;
	}
	return false;
}
//alert (isNull(undefined));
function verifyAddress(obj)    
{    
 var email = obj.email.value;    
 var pattern =/^([a-zA-Z0-9]+[_|\-|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\-|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/gi;   
 flag = pattern.test(email);    
 if(flag)    
 {    
  alert("恭喜您！您填写的邮箱地址是正确的！");   
  return true;    
 }    
 else    
 {    
  alert("请再试一次");    
  return false;    
 }    
}
alert(verifyAddress());