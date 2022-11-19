alert("Добро пожаловать на сайт по изучению..");

function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// добавить нуль перед числами <10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);
}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}

window.onload = function(){
    var image = document.getElementById("image");
    var maxWidth = "75px";
    var minWidth = "50px";
    image.onmouseover = function(){
        this.style.width = maxWidth;
    };
    image.onmouseout = function(){
        this.style.width = minWidth;
    };
};