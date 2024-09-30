/* document.getElementById("count-el").innerText = 5

let welcomeEl = document.getElementById("welcome-el")

let myName = "Shun"
let greeting = "Hi, "

let messageToUser = greeting + myName
welcomeEl.innerText = messageToUser


welcomeEl.innerText += "😀" */

let countEl = document.getElementById("count-el")
let count = 0

let saveEl = document.getElementById("save-el")

function increment(){
  count+=1
  countEl.textContent = count
}

function save(){
  let saved = count + " - "
  saveEl.textContent += saved
  console.log(saved)
  count = 0
  countEl.textContent = count
}