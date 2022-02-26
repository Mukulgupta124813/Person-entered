// document.getElementById("count-el").innerText = 4
// let count = 0;

// console.log(count);
// let myAge = 19;
// console.log(myAge);

// {let myAge = 19;
// let humanDogRatio = 7;

// let myDogAge = myAge * humanDogRatio;
// console.log(myDogAge);}



// console.log(count);

// let messageToUser = message + ", " + username + '!';

// console.log(messageToUser);

// let username = "per";
// let message = "You have three new notification";

// let welcomeEl = document.getElementById("welcome-el");
// let name = "Mukul Gupta";
// let greeting = "Hi, my name is ";
// let myGreeting = greeting + name;
// welcomeEl.innerText = myGreeting;
// console.log(myGreeting);

let countEl =  document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let count = 0;

function increment() {
   count = count + 1;
    countEl.innerText = count;
}

function save() {
    let saved = count + ' - ';
    saveEl.innerHTML += saved;
    countEl.innerText = 0;
    count = 0;
}
