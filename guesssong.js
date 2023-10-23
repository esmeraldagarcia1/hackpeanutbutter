document.addEventListener("DOMContentLoaded", function () {
    const audioPlayer = document.getElementById("audioPlayer");
    const userGuessInput = document.getElementById("userGuess");
    const startButton = document.getElementById("startButton");
    const checkButton = document.getElementById("checkButton");
    const resultDiv = document.getElementById("result");

    const songArray = [
        '1mrsand.mp3', '2allstar.mp3', '3boysaliar.mp3', '4legen.mp3', '5lovestory.mp3',
        '6strom.mp3', '7nevergonna.mp3', '8paintred.mp3', '9september.mp3', '10viva.mp3'
    ];

    let songRandom;

    startButton.addEventListener("click", function () {
        songRandom = Math.floor(Math.random() * songArray.length);
        const mp3File = `songs/${songArray[songRandom]}`;
        audioPlayer.src = mp3File;
        audioPlayer.play();
        checkButton.disabled = false;
        startButton.disabled = true;
    });

    const correctAnswers = [
        "mr. sandman", "all star", "boy's a liar pt. 2", "legends never die", "love story",
        "after the storm", "never gonna give you up", "paint the town red", "september", "viva la vida"
    ];

    checkButton.addEventListener("click", function () {
        const userGuess = userGuessInput.value.toLowerCase();
        const correctAnswer = correctAnswers[songRandom].toLowerCase();

        if (userGuess === correctAnswer) {
            resultDiv.textContent = "Well Done!";
        } else {
            resultDiv.textContent = "Incorrect. Try again.";
        }
    });
});