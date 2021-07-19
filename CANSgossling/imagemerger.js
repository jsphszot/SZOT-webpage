var c=document.getElementById("BeerTeamCans");
var img = new Image();
var xcans;

var cans = [
   "CANSgossling/MasTurbioChela.png",
   "CANSgossling/DaddyDanky.png",
   "CANSgossling/DazeyHazy.png",
   "CANSgossling/Cali.png",
   "CANSgossling/Colorado.png",
   "CANSgossling/ChoraMailaxia.png",
   "CANSgossling/TurbioChela.png",
];


function createImage(path){
   var nImg = new Image();
   nImg.src = path;
   nImg.className = "BeerCanImg";
   // nImg.style.flex = 1/cans.length;
   // nImg.style.height = '40vh';
   nImg.style.width = 'auto';
   nImg.style.maxWidth = `${(1 / xcans * 100)*0.9}vw`;
   nImg.style.maxHeight = `40vh`;
   c.appendChild(nImg);
};

// var xcans = 5; //cans.length
// var xcans = cans.length;
if (window.innerWidth < 400) {xcans = 5} else {xcans = cans.length}

console.log(window.innerWidth)

for (var i = 0; i < xcans; i++) {
   createImage(cans[i]);
};

