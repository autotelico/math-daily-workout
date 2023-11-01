document.addEventListener("DOMContentLoaded", () => {
    const foretext = document.querySelector("#foretext");
    const startButton = document.querySelector("#start-button");
    const textResponse = document.querySelector("#text-response");
    const userAnswerLabel = document.querySelector("label");
    
    function startGame() {
        foretext.textContent = "";
        startButton.style.display = "none";
        userAnswerLabel.style.display = "none";
        textResponse.textContent = "Memorize the result for the next operation...";
    }

    startButton.addEventListener('click', () => {
        startGame();
    })
})