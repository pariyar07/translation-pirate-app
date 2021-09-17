var txtInput = document.querySelector("#txt-input");
var btnTranslate = document.querySelector("#btn-translate");
var outputText = document.querySelector("#output");

var serverUrl = "https://api.funtranslations.com/translate/pirate.json"

function getTranslationUrl(input) {
    return serverUrl + "?" + "text=" + input
}

function errorHandler(error) {
    console.log("error occured", error);
    alert("Something's wrong! Try again after sometime.")
}

function clickHandler() {
    var inputText = txtInput.value;
    fetch(getTranslationUrl(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innertext = translatedText;
        })
        .catch(errorHandler)
}

btnTranslate.addEventListener("click", clickHandler);