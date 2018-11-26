function turn() {
    if (turnOne === false) {
        turnOne = true;
        targetOne = this;
    } else if (turnTwo === false) {
        turnTwo = true;
        targetTwo = this;
    }

    if (this.classList.contains("back")) {
        this.classList.replace("back", "front");
    } else if (this.classList.contains("front")) {
        this.classList.replace("front", "back");
    }
    
    if (turnOne === true && turnTwo ===true && targetOne.classList.item(3) === targetTwo.classList.item(3)) {
        targetOne.classList.replace("cardShow", "cardHide");
        targetTwo.classList.replace("cardShow", "cardHide");
        count--;
        init();
    } else if (turnOne === true && turnTwo ===true) {
        setTimeout(turnBack, 500, targetOne, targetTwo);
        init();
    }
    if (!count) {
        document.getElementById("p").innerHTML = 'Good job!';
    }
}

function turnBack(one, two) {
    one.classList.replace("front", "back");
    two.classList.replace("front", "back");
}

function init() {
    turnOne = turnTwo = false;
    targetOne = targetTwo = null;
}

let card = document.getElementsByClassName("card");
let turnOne = false;
let turnTwo = false;
let targetOne = null;
let targetTwo = null;
let count = card.length / 2;
let arr = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6];
arr.sort(function(a, b){return 0.5 - Math.random()});

for (let i = 0; i < card.length; i++) {
    card[i].addEventListener('click', turn);
    card[i].classList.add(`card${arr[i]}`);
}