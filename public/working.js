const wordHints = {
  apple: "A common fruit that keeps the doctor away",
  brave: "Showing courage in difficult situations",
  chair: "You sit on it, usually at a table",
  dream: "Something you see while sleeping or aim for",
  eagle: "A large bird known for sharp vision",
  flame: "Fire in its visible form",
  grain: "Used to make bread or cereal",
  heart: "Organ that pumps blood",
  index: "First finger or a list reference",
  joker: "A playful or funny person",
  knife: "A sharp kitchen tool",
  lemon: "A sour yellow fruit",
  magic: "Something mysterious or supernatural",
  nurse: "Takes care of patients",
  ocean: "A vast body of salt water",
  piano: "A musical instrument with keys",
  queen: "Female ruler or chess piece",
  river: "A natural flowing water body",
  stone: "A small piece of rock",
  tiger: "A large wild cat with stripes"
};

const words = Object.keys(wordHints);
var randomWord = words[Math.floor(Math.random() * words.length)];
const hint = wordHints[randomWord];
randomWord = randomWord.toUpperCase();

document.querySelector("h3").innerHTML = "Hint: " + hint;

console.log("Hint:", hint);
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
            console.log(currentIndex);
            if (currentIndex === 5 * n && currentIndex !== 30) {
                handle();
            } else if (currentIndex === 31) {
                if(text == randomWord)
                    handle();
                else
                    document.querySelector("h1").innerHTML = "You LOSE 🙁";
                setTimeout(() => location.reload(), 4500);
            }
        }
    });
});

document.addEventListener("keydown", function(event) {
    const keyPressed = event.key;
    if(!(/^[A-Za-z]$/.test(keyPressed))){
        return;
    }
    if (currentIndex < 5 * n) {
        text = event.key;
        text = text.toUpperCase();
        str += text;
        cells[currentIndex].innerText = text;
        currentIndex++;
        if (currentIndex === 5 * n && currentIndex !== 30) {
            handle();
        } else if (currentIndex === 30) {
            if(str === randomWord)
                handle();
            else{
                document.querySelector("h1").innerHTML = "You Lose 🙁🙁";
                for(let j=25;j<30;j++) {
                    cells[j].classList.add("red");
                }
            }
            setTimeout(() => location.reload(), 4500);
        }
    }
})

function handle() {
    const start = row * 5;
    console.log(randomWord);
    if (str === randomWord) {
        for (let j = 0; j < 5; j++) {
            cells[start + j].classList.add("green");
        }
        document.querySelector("h1").innerHTML = "You Win 🥳🥳";
        var time = 5;
        const timer = setInterval(() => {
            document.querySelector("h3").innerHTML = "Restarting the game in " + time + " seconds...";
            time--;

            if (time < 0) {
                clearInterval(timer);
                location.reload();
            }
        }, 1000); 
        // setTimeout(() => location.reload(), 5000);
        console.log("Correct word!");
    } else {
        for (let j = 0; j < 5; j++) {
            const letter = str[j];
            if (letter === randomWord[j]) {
                cells[start + j].classList.add("green");
            } else if (randomWord.includes(letter)) {
                cells[start + j].classList.add("yellow");
            } else {
                cells[start + j].classList.add("gray");
            }
        }
    }
    row++;
    str = "";
    n++
}












