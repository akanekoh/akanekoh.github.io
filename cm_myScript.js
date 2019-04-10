

// var jpyRate =125.05;
// var twdRate =34.8;

//1 ユーロ = 125.05 日本円。
function eurToJpy(eurPrice){
    return eurPrice * 125.05;
} 

//1 ユーロ = 34.76 台湾ドール。
function eurToTwd(eurPrice){
    return eurPrice * 34.8;
} 

function changeEurPrice(){
    var eurPrice = document.getElementById("eurPriceIn").value;
    jpy=eurToJpy(eurPrice);
    twd=eurToTwd(eurPrice);
    document.getElementById("jpyPriceOutE").innerHTML=Math.round(jpy);
    document.getElementById("twdPriceOutE").innerHTML=Math.round(twd);
}

//1 日本円 = 0.0080 ユーロ。
function jpyToEur(jpyPrice){
    return jpyPrice * 0.0080;
} 

//1 日本円 = 0.28 台湾ドール。
function jpyToTwd(jpyPrice){
    return jpyPrice * 0.28;
} 

function changeJpyPrice(){
    var jpyPrice = document.getElementById("jpyPriceIn").value;
    eur=jpyToEur(jpyPrice);
    twd=jpyToTwd(jpyPrice);
    document.getElementById("eurPriceOutJ").innerHTML=eur;
    document.getElementById("twdPriceOutJ").innerHTML=Math.round(twd);
}


//1 台湾ドール = 0.029 ユーロ。
function twdToEur(twdPrice){
    return twdPrice * 0.029;
} 

//1 台湾ドール = 3.60 日本円。
function twdToJpy(twdPrice){
    return twdPrice * 3.60;
} 

function changeTwdPrice(){
    var twdPrice = document.getElementById("twdPriceIn").value;
    eur=twdToEur(twdPrice);
    jpy=twdToJpy(twdPrice);
    document.getElementById("eurPriceOutT").innerHTML=eur;
    document.getElementById("jpyPriceOutT").innerHTML=Math.round(jpy);
}
