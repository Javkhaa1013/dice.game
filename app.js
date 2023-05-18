// Тоглогчын ээлжийг хадгалах хувьсагч 1дэх тоглогчыг 0, 2дох тоглогчыг 1 гэж үзье.
var activePlayer = 1;
// Тоглогчидын цуглуулсан оноог хадгалах хувьсагч 
var scores=[0,0];
// Ээлжиндээ цуглуулж байгаа оноог хадгалах 
var roundScore = 0;

// Шооны аль талаар буусныг хадгалах хувьсагч хэрэгтэй. 1-6 гэсэн утгыг энэ хувьсагчид санамсаргүйгээр үүсгэж өгнө
var dice =Math.floor(Math.random()*6)+1;
// <div class="player-score" id="score-0">43</div>
// window.document.querySelector("#score-0").textContent = dice;
// document.querySelector("#score-1").innerHTML = "<em>Yes!</em>";
// Програм эхлэхэд бэлтгэе

window.document.getElementById("#score-0").textContent = 0;
document.getElementById("#score-1").textContent = 0;
 document.querySelector(".dice").style.display = "none";
document.getElementById("#current-0").textContent= 0;
document.querySelector("#current-1").textContent= 0;

console.log( "Шоо :"+ dice);
