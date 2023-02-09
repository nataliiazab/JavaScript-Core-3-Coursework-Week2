const url = "https://dog.ceo/api/breeds/image/random";
let myArray = [];

let myList = document.querySelector(".my-list");
let createList = document.createElement("li");
myList.appendChild(createList);
let myImage = document.createElement("img");
myImage.classList.add("dog-image");
createList.appendChild(myImage);

const myButton = document.querySelector(".btn");

function changePhoto() {
  try {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        myArray = data;
        myImage.src = myArray.message;
      });
  } catch (error) {
    console.log(error);
    myImage.src =
      "https://st2.depositphotos.com/6664576/9857/v/450/depositphotos_98573408-stock-illustration-vector-404-error-page-template.jpg";
    const errorParagraph = document.querySelector("#error-placeholder");

    if (
      errorParagraph.innerText !==
      "There is no image available at the moment. Come back later :("
    ) {
      errorParagraph.innerText =
        "There is no image available at the moment. Come back later :(";
    }
  }
}

myButton.addEventListener("click", changePhoto);

if (myImage.src === "") {
  myImage.src = "https://i.ytimg.com/vi/7eoPel7v9kQ/maxresdefault.jpg";
}
