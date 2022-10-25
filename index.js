let clickBtn = document.getElementById("click-btn")
let saveEl = document.getElementById("save-el")


let count = 0

function increment() {
    count += 1
    clickBtn.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    clickBtn.textContent = 0
    count = 0
    
}
function reset() {
    clickBtn.textContent = 0
    count = 0 
}