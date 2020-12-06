const button = document.querySelector("#btn-translate");
const inputText = document.querySelector("#text-area");
const outputDiv = document.querySelector(".output-div");

var serverUrl = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";
//var serverUrl = "https://api.funtranslations.com/translate/minion.json";

button.addEventListener("click", () => {
  //outputDiv.innerText = inputText.value;

  fetch(serverUrl + "?" + "text=" + inputText.value)
    .then((response) => response.json())
    .then((json) => (outputDiv.innerText = json.contents.translated))
    .catch((err) => console.log("something Went Wrong", err));
});
