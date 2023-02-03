//chrome://extensions/

let myLeads = []
const inputBtn = document.querySelector("#input-btn")
const inputEl = document.querySelector("#input-el")
let ulEl = document.querySelector("#ul-el")

inputBtn.addEventListener("click", function (){
    myLeads.push(inputEl.value)
    renderLeads()
    inputEl.value = ""
})

function renderLeads() {
let listItems = ""
for (let i = 0; i < myLeads.length; i++) {
    //listItems += "<li><a href=' " +  myLeads[i] + "' target='_blank'>" +  myLeads[i] + "</a></li>" 
    listItems += `
    <li>
        <a target='_blank' href = '${myLeads[i]}'>
        ${myLeads[i]}
        </a>  
    </li>` 
}
ulEl.innerHTML = listItems
}