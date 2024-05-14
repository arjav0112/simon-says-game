let gameseq = [];
let user = [];
let btns = ["red","yellow","indigo","blue"];
let started = false;
let level = 0;
let max1=0;
let heading = document.querySelector("h2");
let score = document.querySelector(".score");
let title = document.querySelector("h1"); 
document.addEventListener("keypress",function(){
    title.innerText = "";
    if(started == false){
    console.log("game started");
    score.innerText = "";
    started = true;

    levelup();
    }
});

function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
       btn.classList.remove("flash");
    },250);
}

function delflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
       btn.classList.remove("flash");
    },500);
}

let body = document.querySelector("body");
function endgame(){
    body.classList.add("end")
    setTimeout(function(){
        body.classList.remove("end");
     },250);
}
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
       btn.classList.remove("userflash");
    },200);
}

function levelup(){
    user = [];
    level++;

    heading.innerText = `level ${level}`;
    let randind = Math.floor(Math.random() * 4);
    console.log(randind);
    let randcol = btns[randind];
    let randbtn = document.querySelector(`.${randcol}`);
    let n= gameseq.length;
    if(randcol === gameseq[n-1]){
        delflash(randbtn);
        gameseq.push(randcol);
        console.log(gameseq);
    }
    else{
        gameseq.push(randcol);
        console.log(gameseq);
        btnflash(randbtn);
    }
   
}

function score1(level){
    let temp = level;
    if(max1<temp){
      max1 = temp;
    }
    return max1;

}

let allbtns = document.querySelectorAll(".box");

function checkans(curr){
     let indx = curr;
     if(user[indx] === gameseq[indx]){
        if(user.length == gameseq.length){
            levelup();
        }
     }else{
        
        heading.innerText = "GAME Over!! press any key to restart";
        endgame();
        title.innerText = "Simon Says";
        let highscore = score1(level);
        score.innerText = `Your highest score is ${highscore} || Current Score is ${level} `; 
        started = false;
        level =0;
        gameseq = [];
     }
}

function btnpress(){
    let btn = this;
    userflash(btn);
    let colors = btn.getAttribute("id");
    user.push(colors);

    checkans(user.length-1);
}
for (btn of allbtns){
    btn.addEventListener("click",btnpress);
}

