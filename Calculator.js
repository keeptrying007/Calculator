let num1El = document.getElementById("num1-el")
let num2El = document.getElementById("num2-el")
let addBtn = document.getElementById("add-btn")
let subtractBtn = document.getElementById("subtract-btn")
let multipleBtn = document.getElementById("multiply-btn")
let divideBtn = document.getElementById("divide-btn")

let sumEl = document.getElementById("sum-el")


addBtn.addEventListener("click", function(){
    sumEl.textContent += Number(num1El.value) + Number(num2El.value)
    num1El.value = ""
    num2El.value = ""

})

subtractBtn.addEventListener("click", function(){
    sumEl.textContent += Number(num1El.value) - Number(num2El.value)
    num1El.value = ""
    num2El.value = ""

})


divideBtn.addEventListener("click", function(){
    sumEl.textContent += Number(num1El.value) / Number(num2El.value)
    num1El.value = ""
    num2El.value = ""

})


multipleBtn.addEventListener("click", function(){
    sumEl.textContent += Number(num1El.value) * Number(num2El.value)
    num1El.value = ""
    num2El.value = ""

})

num1El.addEventListener("click", function(){
    sumEl.textContent = "Sum:  "
})

num2El.addEventListener("click", function(){
    sumEl.textContent = "Sum:  "
})