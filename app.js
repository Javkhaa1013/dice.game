// Тоглогчын ээлжийг хадгалах хувьсагч 1дэх тоглогчыг 0, 2дох тоглогчыг 1 гэж үзье.
var activePlayer = 0;
// Тоглогчидын цуглуулсан оноог хадгалах хувьсагч 
var scores=[0,0];
// Ээлжиндээ цуглуулж байгаа оноог хадгалах 
var roundScore = 0;

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

var diceDom = document.querySelector(".dice")
diceDom.style.display = "none";

// Шоон шидэх эвент листенер
document.querySelector(".btn-roll").addEventListener( "click", function (){
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
         //  Энэ тоглогчийн ээлжиндээ цуглуулсан оноог 0  
         roundScore = 0;
         document.getElementById("current-" + activePlayer).textContent = 0;
         // Тоглогчийн ээлжийг нөгөө тоглогч руу шилжүүлнэ. 
        // Хэрэв идэвхтэй тоглогч нь 0 байвал идэвхтэй тоглогч нь 1 болго. Үгүй бол идэвхтэй тоглогчыг 0 болго. 
        
        activePlayer === 0 ? (activePlayer = 1 ) : (activePlayer = 0);
        // Улаан цэгийг хайж олно 
        document.querySelector(".player-0-panel").classList.toggle("active");
        document.querySelector(".player-1-panel").classList.toggle("active");

          //  Шоог тур алга болгоно 
          diceDom.style.display = " none";
        

        // if(activePlayer ===0){
        //     activePlayer = 1;
        // } else {
        //     activePlayer = 0;
        // }

      }
    });
