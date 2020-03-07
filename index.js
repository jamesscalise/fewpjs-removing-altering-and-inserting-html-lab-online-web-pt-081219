// Write your code here!

let doc = document


let main = doc.querySelector('main')

main.remove()

let newHeader = document.createElement('h1')

newHeader.id = "victory"

document.body.appendChild(newHeader)

newHeader.innerHTML = "James is the champion"