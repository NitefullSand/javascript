// JavaScript Document
var chessBoard=[];//二维数组

var me=true;
for(var i=0;i<15;i++)
{ 
	chessBoard[i]=[];
	for(var j=0;j<15;j++)
	{
	chessBoard[i][j]=0;
	}
}
var chess=document.getElementById('chess');
var context=chess.getContext('2d');

context.strokeStyle="#BFBFBF";

//var logo=new Image();//水印
//logo.src="logo.jpg";
//logo.onload=function()
//{
	//context.drawImage(logo,0,0,450,450);
	//drawChessBoard();
	
	//oneStep(0,0,true);
	//oneStep(1,1,false);
//}
var drawChessBoard=function()//画格子
{
	for(var i=0;i<15;i++)
	{
		context.moveTo(15+i*30,15);
		context.lineTo(15+i*30,435);
		context.stroke();
		context.moveTo(15,15+i*30);
		context.lineTo(435,15+i*30);
		context.stroke();
	}
}
drawChessBoard();

var oneStep=function(i,j,me)
{
	context.beginPath();//棋子
	context.arc(15+i*30,15+j*30,13,0,2*Math.PI);
	context.closePath();
	var gradient=context.createRadialGradient(15+i*30+2,15+j*30-2,13,15+i*30+2,15+j*30-2,0);
	if(me)//黑子渐变
	{
		gradient.addColorStop(0,"#0A0A0A");
		gradient.addColorStop(1,"#636766");
	}
	else//白子渐变
	{
		gradient.addColorStop(0,"#D1D1D1");
		gradient.addColorStop(1,"#F9F9F9");
	}
	context.fillStyle=gradient;
	context.fill();
}
chess.onclick=function(e)//坐标
{
	var x=e.offsetX;
	var y=e.offsetY;
	var i=Math.floor(x/30);
	var j=Math.floor(y/30);
	if(chessBoard[i][j]==0)
	{
		oneStep(i,j,me);
		if(me)
		{
			chessBoard[i][j]=1;
		}
		else
		{
			chessBoard[i][j]=2;
		}
		me=!me;
	}
}
