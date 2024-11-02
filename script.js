var timer = 60;
var score = 0;
var hit;

function incScore(){
    score += 10;
    document.querySelector("#score").innerHTML = score;
};

function makebubble() {
    var clutter = "";

for(let i=1; i<=85; i++){
    var rep = Math.floor(Math.random()*10);
    clutter += `<div class="btn">${rep}</div>`
}

document.querySelector(".bottom").innerHTML = clutter;
};

function runTimer(){
    var timerint = setInterval(function(){
        if(timer > 0){
            timer--;
            document.querySelector("#time").innerHTML = timer;
        }
        else{
            clearInterval(timerint);
            document.querySelector(".bottom").innerHTML = `<h1>Game Over</h1>`;
        }
        
    }, 1000)
};

function getHit(){
    hit = Math.floor(Math.random()*10);
    document.querySelector("#hit").innerHTML = hit;
};

document.querySelector(".bottom").addEventListener("click",
function (dets){
    var clickednum = Number(dets.target.textContent);
    if(hit ===  clickednum){
        incScore();
        makebubble();
        getHit();
    }

}
);

makebubble()
runTimer()
getHit()