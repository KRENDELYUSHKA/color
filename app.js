var back=document.querySelector('.container');
var input1=document.querySelector('.input1');
var button1=document.querySelector('.button1');
var input2=document.querySelector('.input2');
var button2=document.querySelector('.button2');
var p=document.querySelector('.text');
var button3=document.querySelector('.button3');
var input3=document.querySelector('.input3');
var a=document.querySelector('.link');

button1.onclick=function(){
    back.style.backgroundColor=input1.value;
}
button2.onclick=function(){
    p.style.color=input2.value;
}
button3.onclick=function(){
    a.href=`https://www.${input3.value}/`;
}