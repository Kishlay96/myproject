let textContainer1 = document.getElementById("textContainer1")
let textContainer2 = document.getElementById("textContainer2")
let btnElem = document.getElementById("convertBtn")
let errorMsg = document.getElementById("errorMsg")
let convertedMinutes = document.getElementById("timeInSeconds")

let errorMessage = "Please enter a valid number of hours"

let labelElem1 = document.createElement("label")

labelElem1.setAttribute("for", "hoursInput");
labelElem1.classList.add("hours")
labelElem1.textContent = "Hours*"
textContainer1.appendChild(labelElem1)

let inputElem1 = document.createElement("input")
inputElem1.type = "text"
inputElem1.id = "hoursInput"
inputElem1.classList.add("label", "form-control")
textContainer1.appendChild(inputElem1)

let labelElem2 = document.createElement("label")
labelElem2.setAttribute("for", "minutesInput");

labelElem2.classList.add("minutes", "mt-3")
labelElem2.textContent = "Minutes*"
textContainer2.appendChild(labelElem2)

let inputElem2 = document.createElement("input")
inputElem2.type = "text"
inputElem2.id = "minutesInput"
inputElem2.classList.add("label", "form-control")
textContainer2.appendChild(inputElem2)

function displaySecond() {
    let hoursEntered = inputElem1.value
    let mimutesEntered = inputElem2.value

    if (inputElem1.value === "") {
        errorMsg.textContent = errorMessage

    } else if (inputElem2.value === "") {
        errorMsg.textContent = errorMessage


    } else {
        let hoursValue = parseInt(hoursEntered)
        console.log(hoursValue)
        let minutesValue = parseFloat(mimutesEntered)
        console.log(minutesValue)
        let resultValue = hoursValue * 3600 + minutesValue * 60
        console.log(resultValue)
        convertedMinutes.classList.add("result")
        convertedMinutes.textContent = resultValue + "s"
        errorMsg.textContent = ""
    }



}
btnElem.addEventListener("click", displaySecond)