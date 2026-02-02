const words = [
    "APPLE", "BRICK", "CROWN", "DREAM", "FLAME",
    "GRASP", "HOUSE", "JELLY", "KNIFE", "LAUGH",
    "PLANT", "SHINE", "STONE", "VIRAL", "WAVES",
    "CLOUD", "BLEND", "TRUST", "SWEET", "HONEY",
    "PRIDE", "LEMON", "SMILE", "SLICK", "MOUNT",
    "FROST", "GLASS", "CHAIR", "THING", "PEACH"
];

var randomWord = words[Math.floor((Math.random()) * words.length)];
console.log(randomWord);
const keys = document.querySelectorAll(".keys");
const cells = document.querySelectorAll(".cell");
var row = 0;
var n = 1;
var text = "";
let str = "";
let currentIndex = 0;



keys.forEach(key => {
    key.addEventListener("click", function () {
        if (currentIndex < 5 * n) {
            text = this.innerText;
            str += text;
            cells[currentIndex].innerText = text;
            currentIndex++;
            if (currentIndex === 5 * n && currentIndex !== 30) {
                handle();
            } else if (currentIndex === 30) {
                document.querySelector("h1").innerHTML = "You Lose ☹️☹️";
                setTimeout(() => location.reload(), 4500);
            }
        }
    });
});

function handle() {
    const start = row * 5;

    if (str === randomWord) {
        for (let j = 0; j < 5; j++) {
            cells[start + j].classList.add("green");
        }
        document.querySelector("h1").innerHTML = "You Win 🥳🥳";
        setTimeout(() => location.reload(), 4500);
        console.log("Correct word!");
    } else {
        for (let j = 0; j < 5; j++) {
            const letter = str[j];
            if (letter === randomWord[j]) {
                cells[start + j].classList.add("green");
                keys.forEach(key => {
                    if (key.innerText === letter) {
                        key.classList.add("green");
                    }
                });
            } else if (randomWord.includes(letter)) {
                cells[start + j].classList.add("yellow");
                keys.forEach(key => {
                    if (key.innerText === letter) {
                        key.classList.add("yellow");
                    }
                });
            } else {
                cells[start + j].classList.add("gray");
                keys.forEach(key => {
                    if (key.innerText === letter) {
                        key.classList.add("gray");
                    }
                });
            }
        }
    }
    row++;
    str = "";
    n++
}












