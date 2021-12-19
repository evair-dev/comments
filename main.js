// let box = document.createElement("div")
// box.style.width = "100px"
// box.style.height = "100px"
// box.style.background = "cyan"
// box.innerHTML = "Hello"
//
// document.getElementById("root").appendChild(box)


function getComment() {
    let input = document.getElementById("input")
    return input.value
}

function cleanComment() {
    document.getElementById("input").value =""
}

function addComment() {
    let button = document.getElementById("button")

    button.addEventListener('click', event => {
        // crear element
        let new_comment = document.createElement("div")
        // agregar comentario
        new_comment.innerHTML = getComment()
        // agregar clase
        new_comment.classList.add('comment')
        // agregar el nuevo elemento al document
        document.getElementById("comments").appendChild(new_comment)
        // limpiar el input
        cleanComment()
    })
}


function main() {
    addComment()
}

// Run the program
main();




