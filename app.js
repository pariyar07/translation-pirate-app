var input = document.querySelector("#txt-input");
var btn = document.querySelector("#btn-translate");
var output = document.querySelector("#output");

var serverUrl = "https://api.funtranslations.com/translate/pirate.json"

function errorHandler(error) {
    console.log("error❌", error);
    alert("Something's wrong! Try again later.")
}

function convertText() {
    var inputText = input.value;
    if(inputText=""){
        alert("Please enter some text");
        return;
    }
       
    const url = `${serverUrl}?text=${inputText}`;
    fetch(url)
        .then(res => res.json())
        .then(json => {
            var outputText = json.contents.translated
            output.innertext = outputText;
        })
        .catch(errorHandler)
}

btn.addEventListener("click", convertText);