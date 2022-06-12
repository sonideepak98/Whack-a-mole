let rat1 = document.querySelector("#rat1");
let rat2 = document.querySelector("#rat2");
let rat3 = document.querySelector("#rat3");
let rat4 = document.querySelector("#rat4");
let rat5 = document.querySelector("#rat5");
let rat6 = document.querySelector("#rat6");
let game = document.querySelector("#game");
let youwin = document.querySelector("#youwin");
let score = document.querySelector("#score");
let count = 0;

setInterval(function(){
    const random = (Math.floor(Math.random()*6) +1 );
    const rat = "rat" + random;
    const ra = eval(rat);
    ra.classList.add("animate");
    setTimeout(()=>ra.classList.remove("animate"),1000);
    ra.onclick = function(){
        count++;
        score.innerText = count;
    }
}, 1000)

setInterval(function(){
    if(count > 4){
        youwin.style.display = "block";
        game.style.display = "none";
    }
})