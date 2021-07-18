let timer = document.getElementById("timer")
let quoteDisplay = document.getElementById("quoteDisplay")
let quoteInput = document.getElementById("quoteInput")
let submitBtn = document.getElementById("submitBtn")
let resetBtn = document.getElementById("resetBtn")
let spinner = document.getElementById("spinner")
let result = document.getElementById("result")
let speedTypingTest = document.getElementById("speedTypingTest")

let initalTimer = 0
let uiqueId = null
let jsonDataText = null
timer.textContent = initalTimer + " seconds"
let quoteInputText = quoteInput.value
let successMsg = "You typed in "
let errorMsg = "You typed incorrect sentence"

let options = {
    method: "GET"
}


fetch("https://apis.ccbp.in/random-quote", options)
    .then(function(response) {
        return response.json()
    })
    .then(function(jsonData) {
        jsonDataText = jsonData
        quoteDisplay.textContent = jsonDataText.content
        result.textContent = "";
    });

function displaytext() {
    clearInterval(uiqueId)
    initalTimer = 0
    spinner.classList.remove("d-none")
    timer.classList.add("d-none")

    fetch("https://apis.ccbp.in/random-quote", options)
        .then(function(response) {
            return response.json()
        })
        .then(function(jsonData) {
            spinner.classList.add("d-none")
            timer.classList.remove("d-none")
            jsonDataText = jsonData
            quoteDisplay.textContent = jsonDataText.content
            result.textContent = "";
        });

    uiqueId = setInterval(function() {
        initalTimer = initalTimer + 1
        timer.textContent = initalTimer + " seconds"

    }, 1000);
    result.textContent = ""
    quoteInputText.textContent = ""

}

function showResult() {
    let quoteText = quoteDisplay.textContent
    let enteredText = quoteInput.value
    if (enteredText === quoteText) {
        clearInterval(uiqueId)
        initalTimer = 0
        timer.textContent = initalTimer + " seconds"
        result.textContent = successMsg + initalTimer + 'seconds'

    } else {
        result.textContent = errorMsg
    }
}

submitBtn.addEventListener("click", showResult)
resetBtn.addEventListener("click", displaytext)