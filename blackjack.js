// let age = 10;

// if (age < 21) {
//   console.log("You cannot enter this club");
// } else if (age === 21) {
//   console.log("You can enter");
// } else {
//   console.log("You are above 21, but i'll let you in");
// }

// let birthdayAge = 900;

// if (birthdayAge < 100) {
//   console.log("You're not eligible for the kings prize");
// } else if (birthdayAge === 100) {
//   console.log("You're the one we are looking for");
// } else {
//   console.log("You got one when you turned 100 some years back");
// }

let Player = {
  name: "Peter",
  chips: 43,
};

let sum = 0;
let cards = [];
let hasBlackJack = false;
let isAlive = false;

let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el");
let cardEl = document.querySelector("#card-el");
let playerEl = document.querySelector("#player-el");

// console.log(Player.name, Player.chips);
playerEl.textContent = Player.name + ":  $" + Player.chips;

console.log(cards);

function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber > 10) {
    return 1;
  } else if (randomNumber === 1) {
    return 11;
  } else {
    return randomNumber;
  }
}

function startGame() {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}

function renderGame() {
  if (sum <= 20) {
    message =
      "You are below the black jack number, you have a chance to draw a new card";
  } else if (sum === 21) {
    message = "Whoooo you got BlackJack";
    hasBlackJack = true;
  } else {
    message = "Now You're out of the game";
    isAlive = false;
  }
  messageEl.textContent = message;
  sumEl.textContent = `Sum: ${sum}`;
  cardEl.textContent = "Cards: ";
  for (i = 0; i < cards.length; i += 1) {
    cardEl.textContent += cards[i] + " ";
  }
}

function newCard() {
  // console.log("Drawing out a new card");
  if (isAlive === true && hasBlackJack === false) {
    let addedCard = getRandomCard();
    sum += addedCard;
    cards.push(addedCard);
    console.log(cards);
    renderGame();
  }
}

// let dadcards = [1, 3, 6, 7, 2];

// dadcards.push(6);

// for (i = 1; i < dadcards.length; i += 1) {
//   console.log(dadcards[i]);
// }

// let sentence = ["Hello", "my", "name", "is", "Peter"];
// let sentenceEl = document.querySelector("#sentence-el");

// for (i = 0; i < sentence.length; i++) {
//   sentenceEl.textContent += sentence[i] + " ";
// }

// let player1Time = 330;
// let player2Time = 1130;
// let player3Time = 730;
// let player4Time = 630;
// let player5Time = 130;

// function totalRacetime() {
//   return player1Time + player2Time + player3Time + player4Time + player5Time;
// }

// let newTime = totalRacetime();

// console.log(newTime);

// let dodo = Math.floor(Math.random() * 6);

// console.log(dodo);

// let dodo = Math.floor(-3.67812);
// console.log(dodo);

// let completedCourse = true;
// let givesCertificate = false;

// function generateCertficate() {
//   console.log("Generating Certficate..........");
// }

// function noCertficate() {
//   console.log("this course does not offer certficate");
// }

// if (completedCourse === true && givesCertificate === true) {
//   generateCertficate();
// } else if (completedCourse === true && givesCertificate === false) {
//   noCertficate();
// }

// let likeDocumentaries = true;
// let likeStartups = true;

// function recommendMovies() {
//   console.log("Hey check out this new film, you'd love it");
// }

// if (likeDocumentaries === true || likeStartups === true) {
//   recommendMovies();
// }

// let AirBnbCastle = {
//   isAvailable: true,
//   price: 480,
//   country: "Dominica Republic",
//   ResortList: ["MalabuSki", "whiteWaterBeach", "reefsAndCraters", "wineRiver"],
// };
// console.log(
//   AirBnbCastle.isAvailable,
//   AirBnbCastle.price,
//   AirBnbCastle.country,
//   AirBnbCastle.ResortList
// );

// let chidike = {
//   name: "Chidike Shadrach Peter",
//   age: 19,
//   country: "Nigeria",
// };

// function logData() {
//   return (
//     chidike.name + " is " + chidike.age + ", and lives in " + chidike.country
//   );
// }

// let displayData = logData();
// console.log(displayData);

// let trainDiscount = Math.floor(Math.random() * 57) + 1;

// if (trainDiscount < 6) {
//   console.log("The train ticket price is free for your baby");
// } else if (trainDiscount === 6 || trainDiscount <= 17) {
//   console.log("You activated a Child Discount");
// } else if (trainDiscount === 18 || trainDiscount <= 26) {
//   console.log("You activated a Student Discount");
// } else if (trainDiscount === 27 || trainDiscount <= 66) {
//   console.log(`You are to pay Full Price of $${trainDiscount}`);
// } else {
//   console.log("You activated a Senior Citizen Discount");
// }

// let largestCountries = ["China", "India", "Indonesia", "USA", "Pakistan"];

// for (i = 0; i < largestCountries.length; i++) {
//   console.log("- " + largestCountries[i]);
// }

// let largestCountries = ["Tuvalu", "India", "Indonesia", "USA", "Monaco"];

// largestCountries.pop();
// largestCountries.push("Pakistan");
// largestCountries.shift();
// largestCountries.unshift("China");

// console.log(largestCountries);

// let dayofMonth = 13;
// let weekday = "friday";

// if (dayofMonth === 13 && weekday === "friday") {
//   console.log("You qualified to watch the movie Spooky face");
// }

let hands = ["rocks", "paper", "scissors"];

function playDrill() {
  let randomIndex = Math.floor(Math.random() * 3);
  return hands[randomIndex];
}

console.log(playDrill());
