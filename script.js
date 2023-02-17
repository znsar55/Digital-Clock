
function showtime(){
var date =new Date();
var h = date.getHours() ;
var m = date.getMinutes();
var s = date.getSeconds();
var session="AM";

if(h >12){
    h=h-12;
    session="PM";
}
if(m <10){
    m="0" + m;
}
if(s <10){
    s="0" + s;
}
if(h <10){
    h="0" + h;
}
var time = h +":"+ m +":"+ s +" ::"+ session;
document.getElementById("dclock").innerText=time;
document.getElementById("dclock").textContent=time;

setTimeout(showtime,1000);
}
showtime();




