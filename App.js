var dcoin = 0;
var dminer = 0;
var facts = 0;
var pbooster = 1;
var cbooster = 1;

if(null != localStorage.getItem("myData")){
var retrievedDataString = localStorage.getItem("myData");
console.log("hi data"+retrievedDataString);
var retrievedData = JSON.parse(retrievedDataString);
var splitSave = retrievedData.split('*');
dcoin = Number(splitSave[0]);
dminer = Number(splitSave[1]);
facts = Number(splitSave[2]);
}


//wallpaper
e = document.createElement("div"); 
e.innerHTML += '<img src= Photos/Wallpaper.jpg />';
e.style.width = "300px"; 
e.style.height = "300px"; 
e.style.position = "absolute"; 
e.style.left = "0px"; 
e.style.top = "0px"; 
e.id = 'background'; 
document.body.append(e); 
//check / useful functions
function abbreviateNumber(value) {
    var newValue = value;
    if (value >= 1000) {
        var suffixes = ["", "k", "m", "b","t"];
        var suffixNum = Math.floor( (""+value).length/3 );
        var shortValue = '';
        for (var precision = 2; precision >= 1; precision--) {
            shortValue = parseFloat( (suffixNum != 0 ? (value / Math.pow(1000,suffixNum) ) : value).toPrecision(precision));
            var dotLessShortValue = (shortValue + '').replace(/[^a-zA-Z 0-9]+/g,'');
            if (dotLessShortValue.length <= 2) { break; }
        }
        if (shortValue % 1 != 0)  shortValue = shortValue.toFixed(1);
        newValue = shortValue+suffixes[suffixNum];
    }
    return newValue;
}
function makeButton(dx, dy, left, top, right, bottom, text, id, func){  
    b = document.createElement("button"); 
    b.style.border = "black solid thin"; 
    b.style.width = dx+"px"; 
    b.style.height = dy+"px"; 
    b.style.backgroundColor = "#063970"; 
    b.style.position = "absolute"; 
    b.style.left = left+"px"; 
    b.style.top = top+"px"; 
    b.style.right = right+"px"; 
    b.style.bottom = bottom+"px"; 
    b.innerHTML = text;
    b.id = id; 
    b.style.fontSize = "2em";
    b.addEventListener("click", func); 
    document.body.append(b); 
}
function saveGame(){
    myData =dcoin +"*"+ dminer +"*"+ facts;
    localStorage.setItem("myData", JSON.stringify(myData));
    savebut = document.getElementById("savebut");
    savebut.innerHTML = "Game Saved";
    setTimeout(saveOdd, 2000);
}
function saveOdd(){
    savebut = document.getElementById("savebut");
    savebut.innerHTML = "Save Game";
}
function pRun(){
    var abdcoin = abbreviateNumber(dcoin);
    c.innerHTML = "DogeCoin     "+ abdcoin;
    var miner = document.getElementById('0');
    var price = (dminer + 1)*5
    var abprice = abbreviateNumber(price);
    miner.innerHTML = "Miners     "+dminer+" $"+abprice;
    var fact = document.getElementById('factbut');
    price = (facts + 1)*50
    abprice = abbreviateNumber(price);
    fact.innerHTML = "Factories "+facts+" $"+abprice;
}
function gboost(){
    var gdoge = document.getElementById('gdoge');
    gdoge.parentNode.removeChild(gdoge);
    pbooster = 20;
    cbooster = 100;
    setTimeout(boostStop, 10000);
    c.style.backgroundColor = "gold";
}
function boostStop(){
    pbooster = 1;
    cbooster = 1;
    c.style.backgroundColor = "#063970";
}
function gRemove(){
    var gdoge = document.getElementById('gdoge');
    if(gdoge != undefined){
        gdoge.parentNode.removeChild(gdoge);
    }
}
//reset functions
function reset(){
    resetNo.style.visibility = null;
    resetYes.style.visibility = null;
    var reset = document.getElementById('reset');
    reset.innerHTML = "Are You Sure?";
}
function resetYes(){
    resetNo.style.visibility = 'hidden';
    resetYes.style.visibility = 'hidden';
    var reset = document.getElementById('reset');
    reset.innerHTML = "Reset Progress";
    dcoin = 0;
    dminer = 0;
    facts = 0;
    pRun();
}
function resetNo(){
    resetNo.style.visibility = 'hidden';
    resetYes.style.visibility = 'hidden';
    var reset = document.getElementById('reset');
    reset.innerHTML = "Reset Progress";
}
//utility check functions
function minerUp(){
    var price = (dminer + 1) * 5;
    if (price <= dcoin){
        dminer += 1;
        var b = document.getElementById(0);
        dcoin -= price;
        price = (dminer + 1) * 5;
        var abprice = abbreviateNumber(price);
        b.innerHTML = "Miners     " + dminer +"     $"+abprice;
        pRun();
    }
}
function dogeUp(){
    dcoin += cbooster * (dminer + 1);
    var abdcoin = abbreviateNumber(dcoin);
    c.innerHTML = "DogeCoin     "+ abdcoin;
}
function factUp(){
    var price = (facts + 1) * 50;
    if (price <= dcoin){
        facts += 1;
        var b = document.getElementById("factbut");
        dcoin -= price;
        price = (facts + 1) * 50;
        var abprice = abbreviateNumber(price);
        b.innerHTML = "Factories " + facts +" $"+ abprice;
        pRun();
    }
}
//background loop for passive stuff
setInterval(function() {
    var doge = facts * 10;
    dcoin += doge * pbooster;
    pRun();
}, 1000);
setInterval(function(){
    var x = Math.floor(Math.random()*1310);
    var y = Math.floor(Math.random()*650);
    goldDoge = document.createElement("div"); 
    goldDoge.style.position = "absolute"; 
    goldDoge.style.left = x+"px"; 
    goldDoge.style.top = y+"px"; 
    goldDoge.id = 'gdoge'; 
    goldDoge.innerHTML +='<img src= Photos/GDoge.png />';
    goldDoge.addEventListener("click", gboost); 
    document.body.append(goldDoge); 
    setTimeout(gRemove, 15000)
},100000)
makeButton(300, 50,null, 100, 0,null,"Miners     "+dminer+"     $5", 0, minerUp);
makeButton(300, 50, null, 150, 0, null, "Factories "+facts+" $50", "factbut",factUp);

//doge click button
d = document.createElement("div"); 
d.innerHTML += '<img src= Photos/Doge.png />';
d.style.width = "400px"; 
d.style.height = "400px"; 
d.style.position = "absolute"; 
d.style.left = "100px"; 
d.style.top = "100px"; 
d.id = 1; 
d.addEventListener("click", dogeUp); 
document.body.append(d); 

//dcoin counter
c = document.createElement("div"); 
c.style.border = "black solid thin"; 
c.style.width = "500px"; 
c.style.height = "80px"; 
c.style.backgroundColor = "#063970"; 
c.style.position = "absolute"; 
c.style.left = "100px"; 
c.style.top = "0px"; 
c.innerHTML = "DogeCoin     " + dcoin;
c.id = 3; 
c.style.textAlign = "center";
c.style.fontSize = "4em";
c.addEventListener("click", minerUp); 
document.body.append(c);

makeButton(300, 50, null, 0, 0, null, "Save Game", "savebut", saveGame);
makeButton(300, 50, null, 0, 300, null, "Reset Progress", "reset", reset);
makeButton(150, 50, null, 50, 450, null, "Yes", "resetYes", resetYes);
makeButton(150, 50, null, 50, 300, null, "No", "resetNo", resetNo);
var resetYes = document.getElementById("resetYes");
resetYes.style.visibility = "hidden";
var resetNo = document.getElementById('resetNo');
resetNo.style.visibility = "hidden";