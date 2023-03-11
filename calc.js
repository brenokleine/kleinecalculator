
const input = document.getElementById(`input`)

let expression = ""

document.getElementById(`clear`).addEventListener(`click`, function(){
    input.value = ``
    expression = ``
})

document.querySelectorAll(`.keys`).forEach(button => {
    button.addEventListener(`click`, function(){
        
        input.value = expression += button.id

    })
})

document.getElementById(`copy`).addEventListener(`click`, function(){
    navigator.clipboard.writeText(input.value)
})

document.getElementById(`equal`).addEventListener(`click`, function(){
    
    try {
        input.value = eval(expression)
        expression = input.value
    } catch (error) {
        input.value = `Error`
        expression = ``
    }
})






