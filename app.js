// Тоглоомын бүх газарт ашиглагдах глобаль хувьсагчдыг энд зарлая.
// Тоглоом дууссан эсэхийг хадгалах төлөвийн хувьсагч 
var isNewGame;
// Аль тоглогч шоо шидэх вэ гэдгийг энд хадгална.
var activePlayer;
// хоёр тоглогчийн цуглуулсан оноонууд 
var score;
// Идэвхтэй тоглогийн цуглуулж байгаа оноо
var roundScore;
// Шооны зургийг үзүүлэх элементийг DOM хайж олоод энд хадгалъя
var diceDom = document.querySelector(".dice")
// Тоглоомыг шинээр эхлүүлнэ.
initGame( );
// Тоглоом шинээр эхлүүлэхэд бэлдэнэ.
function initGame( ){
  // Тоглоом эхэллээ гэдэг төлөвт оруулна. 
  isNewGame = true;
  // Тоглогчын ээлжийг хадгалах хувьсагч 1дэх тоглогчыг 0, 2дох тоглогчыг 1 гэж үзье.
activePlayer = 0;
// Тоглогчидын цуглуулсан оноог хадгалах хувьсагч 
scores=[0,0];
// Ээлжиндээ цуглуулж байгаа оноог хадгалах 
roundScore = 0;

// Шооны аль талаар буусныг хадгалах хувьсагч хэрэгтэй. 1-6 гэсэн утгыг энэ хувьсагчид санамсаргүйгээр үүсгэж өгнө
var diceNumber =Math.floor(Math.random()*6)+1;
// <div class="player-score" id="score-0">43</div>
// window.document.querySelector("#score-0").textContent = dice;
// document.querySelector("#score-1").innerHTML = "<em>Yes!</em>";
// Програм эхлэхэд бэлтгэе
window.document.getElementById("score-0").textContent = "0"
document.getElementById("score-1").textContent = "0";
document.getElementById("current-0").textContent= "0";
document.getElementById("current-1").textContent= "0";
// Тоглогчидын нэрийг буцааж гаргах
document.getElementById("name-0").textContent = "Player-1";
document.getElementById("name-1").textContent = "Player-2";

document.querySelector(".player-0-panel").classList.remove("winner");
document.querySelector(".player-1-panel").classList.remove("winner");

document.querySelector(".player-0-panel").classList.remove("active");
document.querySelector(".player-1-panel").classList.remove("active");

document.querySelector(".player-0-panel").classList.add("active");

diceDom.style.display = "none";
}

// Шоон шидэх эвент листенер
document.querySelector(".btn-roll").addEventListener( "click", function (){
  if (isNewGame){
    var diceNumber =Math.floor(Math.random()*6)+1;
// Шооны зургийг вэб дээр гаргаж ирнэ. 
    diceDom.style.display = "block";
    // Буусан санамсаргүй тоонд харгалгах зургийг гаргана
    diceDom.src = "dice-"+diceNumber +".png";
      // Буусан тоо нь 1 ээс ялгаатай бол идэвхтэй Тоглогчын ээлжийн оноог өөрчилнө. 
      if(diceNumber !== 1){
         // 1 ээс ялгаатай тоо буулаа. Буусан тоог тоглогчидод нэмж өгнө.
         roundScore = roundScore +diceNumber ;
         document.getElementById("current-" + activePlayer).textContent = roundScore;
      }else{
        //1 буусан тул тоглогчын ээлжийг энэ хэсэгт сольж өгнө. 
         switchToNextPlayer( );
      }
  }else{
    alert("Тоглоом дууссан байна. NEW GAME товчыг дарж шинээр эхэлнэ үү ")
  }
    });
//  HOLD Товчны эвент листнер 
document.querySelector(".btn-hold").addEventListener("click" , function(){
if(isNewGame){
  // Уг тоглогчийн цуглуулсан ээлжний оноог глобаль оноон дээр нь нэмж өгнө. 
  scores[activePlayer] = scores[activePlayer] + roundScore;

//Дэлгэц дээр оноог нь өөрчилнө 
document.getElementById("score-"+ activePlayer).textContent =   scores[activePlayer]
  //  Уг тоглогч хожсон эсэхийг %оноо нь 100-с их эсэх? шалгах 
  if(scores[activePlayer]>= 10){
    // Тоглоомыг дууссан төлөвт оруулна.
    isNewGame = false;

    // Ялагч гэсэн текстийг нэрийх нь оронд гаргана. 
    document.getElementById("name-"+ activePlayer).textContent = "Winner !!!"
    document.querySelector(".player-"+activePlayer + "-panel").classList.add("winner");
    document.querySelector(".player-"+activePlayer + "-panel").classList.remove("active");
  }else{
     //  Тоглогчийн ээлжийг солино. 
     switchToNextPlayer( );
  }
} else {
  alert("Тоглоом дууссан байна. NEW GAME товчыг дарж шинээр эхэлнэ үү ")
}
});
// энэ функц нь тоглох ээлжийг дараачийн тоглогч руу шилжүүлдэг. 
function switchToNextPlayer(){
 //  Энэ тоглогчийн ээлжиндээ цуглуулсан оноог 0  
 roundScore = 0;
 document.getElementById("current-" + activePlayer).textContent = 0;
 // Тоглогчийн ээлжийг нөгөө тоглогч руу шилжүүлнэ. 
activePlayer === 0 ? (activePlayer = 1 ) : (activePlayer = 0);
// Улаан цэгийг хайж олно 
document.querySelector(".player-0-panel").classList.toggle("active");
document.querySelector(".player-1-panel").classList.toggle("active");

  //  Шоог тур алга болгоно 
  diceDom.style.display = " none";
}
//  New game буюу Шинэ тоглоом эхлүүлэх товчний эвент листенер
document.querySelector(".btn-new").addEventListener("click", initGame);
