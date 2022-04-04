console.log('A fun doodle of a game made by Kolby Strang')
var dcoin = 0;
var dminer = 0;
var facts = 0;
var pups = 0;
var pbooster = 1;
var cbooster = 1;
var purchmult = 1;
var musks = 0;
var rebirths = 0;
var doge = 0;

if(null != localStorage.getItem("myData")){
    var retrievedDataString = localStorage.getItem("myData");
    var retrievedData = JSON.parse(retrievedDataString);
    var splitSave = retrievedData.split('*');
    if(0 < Number(splitSave[0])){
        dcoin = Number(splitSave[0]);
    }
    if(0 < Number(splitSave[1])){
        dminer = Number(splitSave[1]);
    }
    if(0 < Number(splitSave[2])){
        facts = Number(splitSave[2]);
    }
    if(0 < Number(splitSave[3])){
        pups = Number(splitSave[3]);
    }
    if(0 < Number(splitSave[4])){
        musks = Number(splitSave[4]);
    }
    if(0 < Number(splitSave[5])){
        rebirths = Number(splitSave[5]);
    }
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
function settingsOpen(){
    if('pissword' == prompt("Whats the admin password?"))
        b = document.getElementById("settingsBackground");
        b.style.visibility = null;
        b = document.getElementById('XSettings');
        b.style.visibility = null;
}
function rebirth(){
    var doge = ((facts * 10) + (pups * 100) + (musks * 1000)) * (1 + (rebirths / 2));
    if(doge > (1+rebirths) * 20000){
        dcoin = 0;
        dminer = 0;
        facts = 0;
        pups = 0;
        musks = 0;
        rebirths++;
        pRun();
        b = document.getElementById("rebirthBackground");
        var rebirthmult = 1+(rebirths/2);
        var doge = ((facts * 10) + (pups * 100) + (musks * 1000)) * (1 + (rebirths / 2));
        b.innerHTML = "You have "+rebirths+" rebirths! <br> <br> Your cash multiplier is x"+ rebirthmult +"<br> <br> You need to earn "+(1+rebirths) * 20000+" DogeCoin per second to rebirth. <br> <br> You have are earning "+ doge +" DogeCoin per second.";

    }
}
function openRebirth(){
    b = document.getElementById("rebirthBackground");
    b.style.visibility = null;
    var rebirthmult = 1+(rebirths/2);
    var doge = ((facts * 10) + (pups * 100) + (musks * 1000)) * (1 + (rebirths / 2));
    var abdoge = abbreviateNumber(doge);
    b.innerHTML = "You have "+rebirths+" rebirths! <br> <br> Your cash multiplier is x"+ rebirthmult +"<br> <br> You need to earn "+abbreviateNumber((1+rebirths) * 20000)+" DogeCoin per second to rebirth. <br> <br> You are earning "+ abdoge +" DogeCoin per second.";
    b = document.getElementById('XRebirth');
    b.style.visibility = null;
    b = document.getElementById('rebirthButton')
    b.style.visibility = null;
}
function closeSettings(){
    b = document.getElementById("settingsBackground");
    b.style.visibility = 'hidden';
    b = document.getElementById('XSettings');
    b.style.visibility = 'hidden';
}
function closeRebirth(){
    b = document.getElementById("rebirthBackground");
    b.style.visibility = "hidden";
    b = document.getElementById('XRebirth');
    b.style.visibility = "hidden";
    b = document.getElementById('rebirthButton')
    b.style.visibility = 'hidden';
}
function multi1(){
    var purch1 = document.getElementById("multi1");
    var purch10 = document.getElementById("multi10");
    var purch100 = document.getElementById("multi100");
    purch1.style.backgroundColor = "green";
    purch10.style.backgroundColor = "grey";
    purch100.style.backgroundColor = "grey";
    purchmult = 1;
    pRun();
}
function multi10(){
    var purch1 = document.getElementById("multi1");
    var purch10 = document.getElementById("multi10");
    var purch100 = document.getElementById("multi100");
    purch1.style.backgroundColor = "grey";
    purch10.style.backgroundColor = "green";
    purch100.style.backgroundColor = "grey";
    purchmult = 10;
    pRun();
}
function multi100(){
    var purch1 = document.getElementById("multi1");
    var purch10 = document.getElementById("multi10");
    var purch100 = document.getElementById("multi100");
    purch1.style.backgroundColor = "grey";
    purch10.style.backgroundColor = "grey";
    purch100.style.backgroundColor = "green";
    purchmult = 100;
    pRun();
}
function abbreviateNumber(value) {
    //NOT MY CODE
    var newValue = value;
    if (value >= 1000) {
    var suffixes = ["", "k", "m", "b","t", "AF", "AG", "AH", "AI", "AJ", "AK", "AL", "AM"];
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
    b.style.backgroundColor = "grey"; 
    b.style.position = "absolute"; 
    b.style.left = left+"px"; 
    b.style.top = top+"px"; 
    b.style.right = right+"px"; 
    b.style.bottom = bottom+"px"; 
    b.innerHTML = text;
    b.id = id; 
    b.style.fontSize = "1.9em";
    b.addEventListener("click", func); 
    document.body.append(b);
    return(b); 
}
function saveGame(){
    myData = +dcoin +"*"+ dminer +"*"+ facts +"*"+pups+"*"+musks+"*"+rebirths;
    //NOT MY CODE
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
    var abdminer = abbreviateNumber(dminer)
    var abprice = abbreviateNumber(price * purchmult);
    miner.innerHTML = "Miners     "+abdminer+" $"+abprice;
    var fact = document.getElementById('factbut');
    price = (facts + 1)*50
    abprice = abbreviateNumber(price * purchmult);
    var abfacts = abbreviateNumber(facts);
    fact.innerHTML = "Factory "+abfacts+" $"+abprice;
    var pup = document.getElementById('pupbut');
    price = (pups + 1)* 1000
    abprice = abbreviateNumber(price* purchmult);
    var abpups = abbreviateNumber(pups);
    pup.innerHTML = "Puppies "+abpups+" $"+abprice;
    var musk = document.getElementById('muskbut');
    price = (musks + 1)* 300000
    abprice = abbreviateNumber(price* purchmult);
    var abmusks = abbreviateNumber(musks);
    musk.innerHTML = "Elon Musk "+abmusks+" $"+abprice;
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
    c.style.backgroundColor = "grey";
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
    pups = 0;
    musks = 0;
    rebirths = 0;
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
    var price = purchmult*((dminer + 1) * 5);
    if (price <= dcoin){
        dminer += purchmult;
        var b = document.getElementById(0);
        dcoin -= price;
        price = (dminer + 1) * 5;
        var abdminer = abbreviateNumber(dminer);
        var abprice = abbreviateNumber(price);
        b.innerHTML = "Miners     " + abdminer +"     $"+abprice;
        pRun();
    }
}
function dogeUp(){
    dcoin += (rebirths+1)*(cbooster * (dminer + 1));
    var abdcoin = abbreviateNumber(dcoin);
    c.innerHTML = "DogeCoin     "+ abdcoin;
    d.innerHTML = '<img src= Photos/DogeClicked.png />';
    d.style.position = "absolute"; 
    d.style.left = "105px"; 
    d.style.top = "105px"; 
    setTimeout(dogeButtonRevert, 10);
}
function dogeButtonRevert(){
    d.innerHTML = '<img src= Photos/Doge.png />';
    d.style.position = "absolute"; 
    d.style.left = "100px"; 
    d.style.top = "100px"; 
}
function factUp(){
    var price = purchmult*((facts + 1) * 50);
    if (price <= dcoin){
        facts += purchmult;
        var b = document.getElementById("factbut");
        dcoin -= price;
        price = (facts + 1) * 50;
        var abprice = abbreviateNumber(price);
        var abfacts = abbreviateNumber(facts);
        b.innerHTML = "Factory " + abfacts +" $"+ abprice;
        pRun();
    }
}
function pupUp(){
    var price = purchmult*((pups + 1) * 1000);
    if (price <= dcoin){
        pups += purchmult;
        var b = document.getElementById("pupbut");
        dcoin -= price;
        price = (pups + 1) * 1000;
        var abprice = abbreviateNumber(price);
        var abpups = abbreviateNumber(pups);
        b.innerHTML = "Puppies " + abpups +" $"+ abprice;
        pRun();
    }
}
function muskUp(){
    var price = purchmult*((musks + 1) * 300000);
    if (price <= dcoin){
        musks += purchmult;
        var b = document.getElementById("muskbut");
        dcoin -= price;
        price = (musks + 1) * 300000;
        var abprice = abbreviateNumber(price);
        var abmusks = abbreviateNumber(musks);
        b.innerHTML = "Elon Musks " + abmusks +" $"+ abprice;
        pRun();
    }
}
//background loop for passive stuff
setInterval(function() {
    var doge = facts * 10;
    doge += pups * 100;
    doge += musks * 1000;
    doge *= 1 + (rebirths / 2) 
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

makeButton(300, 50, null, 300, 0, null, "Puppies "+pups+" $1k", "pupbut", pupUp);
makeButton(300, 50, null, 200, 0, null, "Miners "+dminer+" $5", 0, minerUp);
makeButton(300, 50, null, 250, 0, null, "Factory "+facts+" $50", "factbut",factUp);
makeButton(300, 50, null, 350, 0, null, "Elon Musk "+musks+" $1m", "muskbut", muskUp);

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
c.style.backgroundColor = "grey"; 
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
makeButton(300, 50, null, 50, 0, null, "Reset Progress", "reset", reset);
makeButton(150, 50, null, 100, 150, null, "Yes", "resetYes", resetYes);
makeButton(150, 50, null, 100, 0, null, "No", "resetNo", resetNo);
var resetYes = document.getElementById("resetYes");
resetYes.style.visibility = "hidden";
var resetNo = document.getElementById('resetNo');
resetNo.style.visibility = "hidden";
makeButton(100, 50, null, 150, 0, null, "1x", "multi1", multi1);
makeButton(100, 50, null, 150, 100, null, "10x", "multi10", multi10);
makeButton(100, 50, null, 150, 200, null, "100x", "multi100", multi100);
var purch1 = document.getElementById("multi1");
purch1.style.backgroundColor = "green";
//rebirth button
makeButton(448, 82, 600, 0, null, null, 'Rebirths', 'rebirthmenubutton', openRebirth);
b.style.backgroundColor = 'gold';
b.style.fontSize = "4em";
//rebirth menu builder
makeButton(500, 600, 400, 25, null, null, null, 'rebirthBackground', null);
b.style.visibility = "hidden";
makeButton(25, 25, 870, 30, null, null, "X", "XRebirth", closeRebirth);
b.style.backgroundColor = "red";
b.style.fontSize = ".5em";
b.style.visibility = "hidden";
makeButton(150, 50, 575, 5, null, null, "Rebirth!", "rebirthButton", rebirth);
b.style.backgroundColor = "gold";
b.style.visibility = "hidden";

//settings button
s = document.createElement("div"); 
s.innerHTML += '<img src= Photos/Settings.png />';
s.style.width = "100px"; 
s.style.height = "100px"; 
s.style.position = "absolute"; 
s.style.left = "0px"; 
s.style.top = "0px"; 
s.id = 'settingsButton'; 
s.addEventListener("click", settingsOpen); 
document.body.append(s); 

//settings menu builder
makeButton(500, 600, 400, 25, null, null, null, 'settingsBackground', null);
b.style.visibility = "hidden";
makeButton(25, 25, 870, 30, null, null, "X", "XSettings", closeSettings);
b.style.backgroundColor = "red";
b.style.fontSize = ".5em";
b.style.visibility = "hidden";

//for updates and notices
alert('This is a game made by Kolby Stang in Timberline high school and im just playing around, if youd like to suggest something to be added just come tell me and ill work on it and im going to be making changelogs in this alert everytime you refresh the browser, i just added a settings menu that is for me and some other dev tools so its password protected Version 0.1')