var red=0;
var green=0;
var blue=0;

function changered(val){
    red=val;
    var m=document.getElementById("screen");
    m.style.backgroundColor='rgb('+red+','+green+','+blue+')';
}
function changegreen(val){
    green=val;
    var m=document.getElementById("screen");
    m.style.backgroundColor='rgb('+red+','+green+','+blue+')';
}
function changeblue(val){
    blue=val;
    var m=document.getElementById("screen");
    m.style.backgroundColor='rgb('+red+','+green+','+blue+')';
}