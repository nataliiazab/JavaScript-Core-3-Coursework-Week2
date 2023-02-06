/*
Use fetch to load a greeting from the API and display it 
in the HTML element with the id "greeting-text".

API: https://codeyourfuture.herokuapp.com/api/greetings
Response: A greeting in a random language

To learn more about fetch, refer to the doc:
https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch


================
Expected result
================

Open index.html in your browser. Every time you refresh the page,
a different greeting should be displayed in the box.
*/

const element = document.getElementById("greeting-text");

//refresh the page

fetch("https://holy-snow-6805.fly.dev/api/greetings")
  .then(function (response) {
    return response.json(); //changed to .json so I can use objects rather than strings
  })
  .then(function (greeting) {
    element.innerHTML = "Greeting: " + greeting.hello;

    const newP = document.createElement("p");
    newP.innerHTML = "Language: " + greeting.language;
    element.appendChild(newP);
  });

//for button, async function
const button = document.getElementById("greeting-btn");

async function updateGreeting() {
  const response = await fetch("https://holy-snow-6805.fly.dev/api/greetings");
  const greeting = await response.json();
  element.innerHTML = "Greeting: " + greeting.hello;

  const newP = document.createElement("p");
  newP.innerHTML = "Language: " + greeting.language;
  element.appendChild(newP);
}

button.addEventListener("click", updateGreeting);
