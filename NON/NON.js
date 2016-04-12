// JavaScript Document
function topic_1btn_c(){
	var btn=document.getElementById("topic_1btn");
	
	if(btn.innerHTML.trim()=="展开")
	{
		btn.innerHTML = "收起";
	}else{
		btn.innerHTML = "展开";
	}
}
function showHidden(){
var dis=document.getElementById('id');
if(dis.style.display=='none'){
document.getElementById('a').innerHTML="Comments";
dis.style.display="block";
}
else{
	dis.style.display='none';
	}
}