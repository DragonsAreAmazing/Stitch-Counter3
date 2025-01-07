let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0
let count2 = 0

function increment() {
    count += 5
    countEl.textContent = count = count2
}

function increment290 {
    count2++
    countEl.textContent = count + count2
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}
