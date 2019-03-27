//confire
function Aka(){
    var x ;
    var ans=confirm("Are you sure?");
    if (ans==true){
        x="you say OK! very good!";
    }
    else{
        x="you say cancel! so bad!";
    }

    document.getElementById("Demo").innerHTML=x;

}

//prompt
function Aka2(){
    var x;
    var person=prompt("Input your name","Jacky Chen");
    if (person!=null && person!=""){
        x="Hi "+person+"! How are you today?";
        document.getElementById("Demo").innerHTML= x;
    }
}

//alert
function Aka3(name,job){
    var x;
    x="Hi "+name+"!\nYou\'re " +job;
    alert(x);
    document.getElementById("Demo").innerHTML=x;

}	


//
function Aka4(txt){
    var x=txt;
    document.getElementById("Demo").innerHTML=x;
}	

//
function Aka5(){
    return ("Hello World");
}	

//While
function Aka6(){
    var x="",i=1;
	do{
        x=x + "<h" + i + ">FontSize" + "</h" + i + ">";
        i++;
    }
    while (i<5)
	document.getElementById("Demo").innerHTML=x;
}

//For
function Aka7(){
    var x="",i=1;
    for(;i<5;){
        x=x + "该数字为 " + i + "<br>";
		i++;
    }
    document.getElementById("Demo").innerHTML=x;
}

//break
function Aka8(){
    var x="",i=1;
    for(;i<5;){
        if(i==3){
            break;
        }
        x=x + "该数字为 " + i + "<br>";
        i++;
        
    }
    document.getElementById("Demo").innerHTML=x;
}

//continue
function Aka9(){
    var x="",i=1;
    for(;i<5;){
       
        x=x + "该数字为 " + i + "<br>";
        i++
        if(i==3){
            continue;
        }
        
        
    }
    document.getElementById("Demo").innerHTML=x;
}

//-------------------------HTML DOM-----------------------
//onmouseover,onmouseout
function Aka10(obj){
    obj.innerHTML="Thank You♡"
}

function Aka11(obj){
    obj.innerHTML="Mouse Over Me　←"
}


//onmousedone, onmouseup
function Aka12(){
    document.getElementById("myimage").src="./image/bulbon.gif";
}

function Aka13(){
    document.getElementById("myimage").src="./image/bulboff.gif";
}

//onfocus, onblur
function Aka14(x){
    x.style.background="yellow";
}

function Aka15(x){
    x.style.background="white";
}

//onchange(abc→ABC)
function Aka16(){
	var x=document.getElementById("urName");
	x.value=x.value.toUpperCase();
}
//-------------------------HTML DOM-----------------------







// break 用于跳出循环。 
// catch 语句块，在 try 语句块执行出错时执行 catch 语句块。 
// continue 跳过循环中的一个迭代。 
// do ... while 执行一个语句块，在条件语句为 true 时继续执行该语句块。 
// for 在条件语句为 true 时，可以将代码块执行指定的次数。  
// for ... in  用于遍历数组或者对象的属性（对数组或者对象的属性进行循环操作）。 
// function 定义一个函数 
// if ... else 用于基于不同的条件来执行不同的动作。 
// return 退出函数 
// switch 用于基于不同的条件来执行不同的动作。 
// throw 抛出（生成）错误 。  
// try 实现错误处理，与 catch 一同使用。  
// var 声明一个变量。 
// while 当条件语句为 true 时，执行语句块。   

