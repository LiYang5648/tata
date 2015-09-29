//jQuery切换隐藏div界面
$(document).ready(function(){
	$("button").click(function(){
		$("div").toggle("slow")
	});
});

//星期
var d=new Date()
var day=d.getDate();
var month=d.getMonth()+1;
var year=d.getFullYear();
var weekday=new Array(7)
weekday[0]="Sunday 星期日"
weekday[1]="Monday 星期一"
weekday[2]="Tuesday 星期二"
weekday[3]="Wednesday 星期三"
weekday[4]="Thursday 星期四"
weekday[5]="Friday 星期五"
weekday[6]="Saturday 星期六"
document.write(year+"/"+month+"/"+day+"<br>"+weekday[d.getDay()])

//用户名 密码
function T()
	{
	var username=document.getElementById("username");
	var password=document.getElementById("password");
	if(username.value==""||password.value=="")
	{
        	alert("Username and password can't be empth");
			return;
	}
	else if((username.value=="liyang")&&(password.value=="123"))
	{
	var r=confirm("你确定要跳转到另一个网页么？");
	if(r==true)
	{
	alert("你真的确定要跳转到另一个网页么？");
	}else
	{
	alert("You pressed Cancel");
	}
      shadow.submit();	
	}
	else
	{
	 alert("Log in failed,please checkout username and password!");
	 return;
	}
	return true;
	}


//时间

	/*function startTime()
{
var today=new Date()
var h=today.getHours()
var m=today.getMinutes()
var s=today.getSeconds()
m=checkTime(m)
s=checkTime(s)
document.getElementById('txt').innerHTML=h+":"+m+":"+s
t=setTimeout('startTime()',500)
}

function checkTime(i)
{
if (i<10) 
  {i="0" + i}
  return i
}*/




