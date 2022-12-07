var randomNumber1 = Math.floor(Math.random() * 6) + 1;

let randomDiceImage = "dice" + randomNumber1 + ".png";

let randomImageSource = "dice/" + randomDiceImage

console.log(randomImageSource);

let image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);


// second dice

let randomNumber2 = Math.floor(Math.random() * 6) + 1;

let randomDiceImage2 = "dice" + randomNumber2 + ".png";

let randomImageSource2 = "dice/" + randomDiceImage2;

console.log(randomImageSource2);

let image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageSource2);


if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🌟Player 1 Wins!"
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "🌟Player 2 Wins!";
} else if (randomNumber1 = randomNumber2) {
    document.querySelector("h1").innerHTML = "😔 Its A Draw";
}
