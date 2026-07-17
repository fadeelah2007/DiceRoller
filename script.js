const rollBtn = document.getElementById("rollBtn");
const answer = document.getElementById("answer");
const min = 1;
const max = 6;

let randomNum;

rollBtn.onclick = function(){

    randomNum = Math.floor(Math.random() * max) + min;

    answer.textContent = `You rolled a ${randomNum}!`;
}