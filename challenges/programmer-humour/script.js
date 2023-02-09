// - Inside the same file write a program that gets the `json` using Fetch.
// - A function should make an API call to the given endpoint: `https://xkcd.now.sh/?comic=latest`
// - Log the received data to the console
// - Render the `img` property into an `<img>` tag in the DOM
// - Incorporate error handling

const URL = "https://xkcd.now.sh/?comic=latest";
const container = document.querySelector("#comicContainer");

async function getJSON() {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data);

    const comicImage = document.createElement("img");
    comicImage.classList.add("comic-image");
    comicImage.alt = data.alt;
    comicImage.src = data.img;
    container.appendChild(comicImage);

    const comicTitle = document.createElement("h1");
    comicTitle.innerHTML = data.safe_title;
    container.appendChild(comicTitle);

    const comicYear = document.createElement("h2");
    comicYear.innerHTML = data.year;
    container.appendChild(comicYear);
  } catch (error) {
    console.log(error);
    document.querySelector("#errorMessage").textContent =
      "There is a technical issue here:( Please try again later.";
  }
}

getJSON();
