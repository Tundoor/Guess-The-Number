const score = document.getElementById("score");
const rules = document.getElementById("Rules-div");
const userInput = document.getElementById("user-input")
const loading = document.querySelector(".loading");
const Ans = document.querySelector(".Answer");
const checkAns = document.querySelector(".ans-btn");

// ScoreBoard Logic
let numericalScore = parseInt(score.textContent);
// while (numericalScore >= 0 && numericalScore <= 100) {
//     numericalScore += 30
//     score.textContent = `${numericalScore}`
//     console.log(score.textContent)
// } 


// Game Logic

checkAns.addEventListener('click', () => {
    userInput.style.display = 'none';

    let randomNum = Math.floor(Math.random() * 101);
    console.log(randomNum)
    const userGuess = Number(userInput.value); // Convert input to a number
    loading.style.display = 'block';
    Ans.style.display = 'none';

    setTimeout(() => {
        userInput.style.display = 'none';

    }, 2000)

    setTimeout(() => {
        userInput.style.display = 'none';
        loading.style.display = 'none';
        Ans.style.display = 'block';

        if (userGuess === randomNum) {
            Ans.textContent = 'Correct!!!';
            setTimeout(() => {
                userInput.style.display = 'block';
                Ans.style.display = 'none';
                userInput.value = '';

            }, 1000)
        } else {
            Ans.textContent = 'Incorrect. Try Again!';
            setTimeout(() => {
                userInput.style.display = 'block';
                Ans.style.display = 'none';
                userInput.value = '';

            }, 1000)

        }
    }, 3000);

});