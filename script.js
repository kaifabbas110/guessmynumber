let randomNumber = Math.floor(Math.random()*20+1);
let score = 20;
let hiScore = 0;
document.querySelector('.guess').value = '';

//function for repetative "section__right__h4" code.
const displayMsg = (message) =>{
    document.querySelector('.section__right__h4').textContent = message;
}

//function for repetative "score" code.
const displayScore = (score) =>{
    document.querySelector('.score__span').textContent = score;
}

//function for repetative "background-color" code.
const bgColor = (color) =>{
    document.querySelector('body').style.backgroundColor = color;
}

//function for repetative "main-block" code.
const mainBlock = (value) =>{
    document.querySelector('.main__block').textContent = value;
}

document.querySelector('.check').addEventListener('click',() =>{
    const guess = Number.parseInt(document.querySelector('.guess').value);

    if (!guess || guess<0) {
        displayMsg("⚠️ No number");
    }
    else if (guess === randomNumber) {
        displayMsg("🎉 Correct number");
        mainBlock(randomNumber);
        bgColor('green');
        if (score > hiScore) {
            hiScore = score;
            document.querySelector('.hiscore__span').textContent = hiScore;
        }
        
    }

    else if (guess !== randomNumber) {
        if (score > 1) {
            //used ternary operation to reduce code.
            displayMsg(guess > randomNumber ? "📈 Too high" : "📉 Too low");
            score--;
            displayScore(score);
        }
        else{
            displayMsg("💥 You lost the game!");
            displayScore(0);
        }
    }

    // else if(guess > randomNumber){
    //     if (score > 1) {
    //         document.querySelector('.section__right__h4').textContent = "📈 Too high"
    //         score--;
    //         document.querySelector('.score__span').textContent = score;
    //     }
    //     else{
    //         document.querySelector('.section__right__h4').textContent = "💥 You lost the game!"
    //         document.querySelector('.score__span').textContent = 0;
    //     }

    // }
    // else if(guess < randomNumber){
    //     if (score > 1) {
    //         document.querySelector('.section__right__h4').textContent = "📉 Too low"
    //         score--;
    //         document.querySelector('.score__span').textContent = score;
    //     }
    //     else{
    //         document.querySelector('.section__right__h4').textContent = "💥 You lost the game!"
    //         document.querySelector('.score__span').textContent = 0;
    //     }
    // }

});

let again = document.querySelector('.header__btn').addEventListener('click',() =>{
    randomNumber = Math.floor(Math.random()*20+1);
    score = 20;
    bgColor('black');
    mainBlock('?');
    displayScore(20);
    document.querySelector('.guess').value = '';
    displayMsg("Start guessing....");


});