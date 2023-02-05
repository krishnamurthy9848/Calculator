let screen=document.getElementById("scr");
function bts(x){
    if(screen.innerHTML!=0){
    screen.innerHTML+=x;
    }else{
        screen.innerHTML=x;
    }
    
}

function Clear(){

screen.innerHTML=0;
}
function Back(){
    if(screen.innerHTML.length>1){
    screen.innerHTML=screen.innerHTML.slice(0,-1);
    }else{
        screen.innerHTML=0;
    }
}

function Add(){
    screen.innerHTML+='+';
}
function sub1(){
    screen.innerHTML+='-';
}
function mul(){
    screen.innerHTML+='*';
}
function div1(){
    screen.innerHTML+='/';
}

function Eq(){
   let i= screen.innerHTML.indexOf('+');
   screen.innerHTML=eval(screen.innerHTML);
}
