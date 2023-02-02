
let myLeads = []
const inputBtn = document.querySelector("#input-btn")
const inputEl = document.querySelector("#input-el")
let ulEl = document.querySelector("#ul-el")

inputBtn.addEventListener("click", saveInput)

function saveInput() {
    myLeads.push(inputEl.value)
    userInput()
    console.log(myLeads)
}

function userInput(){
for (i = 0; i < myLeads.length; i++) {
    ulEl.textContent += myLeads[i] + " "
}
}