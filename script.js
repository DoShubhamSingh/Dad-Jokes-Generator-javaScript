let btnEl = document.getElementById("btn");
let jokeEl = document.getElementById("joke");

let apiKey = "4kqGcJx8uDXo3XIskcbzokAz7rN8nWJs3PL9Mcll";

let options = {
    method: "GET",
    headers: {
      "X-Api-Key": apiKey,
    },
  };

const apiURL = "https://api.api-ninjas.com/v1/dadjokes";

async function getJoke() {
  try {
    jokeEl.innerText = "Updating...";
    btnEl.disabled = "";
    btnEl.innerText = "Loading...";
    const response = await fetch(apiURL, options);
    const data = await response.json();

    btnEl.disabled = "";
    btnEl.innerText = "Tell me a joke";

    jokeEl.innerText = data[0].joke;
  } catch (error) {
    jokeEl.innerText = "An error happened, try again later";
    btnEl.disabled = "";
    btnEl.innerText = "Tell me a joke";
   // console.log(error);
  }
}

btnEl.addEventListener("click", getJoke);