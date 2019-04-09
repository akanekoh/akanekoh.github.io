
//var ルート, 1 ユーロ = 125.05 日本円。
var jpyRate =125.05;
//var ルート, 1 ユーロ = 34.76 台湾ドール。
var twdRate =34.8;

//function EurToJpy(), ユーロから日本円にの計算。
function eurToJpy(price){
    return price * jpyRate;
} 

function eurToTwd(price){
    return price * twdRate;
} 

function printPrice(){
    var price = document.getElementById("price").value;
    x=eurToJpy(price);
    y=eurToTwd(price);
    document.getElementById("jpyPrice").innerHTML=Math.round(x);
    document.getElementById("twdPrice").innerHTML=Math.round(y);
}


　
