const form = document.querySelector('#form')
const ul = document.querySelector('ul')
const todo = document.querySelector('#todo')



form.addEventListener('submit', function (e) {
    e.preventDefault()
    const newLi = document.createElement('li')

    newLi.innerText = todo.value

    const checkBox = document.createElement('input')
    checkBox.type = "checkbox"
    ul.appendChild(newLi)
    newLi.appendChild(checkBox)
    checkBox.addEventListener('click', function (e) {
        e.target.parentElement.className = 'crossOut'
        //checkBox.style.display = "none"
        const removeBtn = document.createElement('button')
        removeBtn.innerText = "Remove Todo"
        newLi.appendChild(removeBtn)
        checkBox.style.display = "none"

        removeBtn.addEventListener('click', function (e) {
            e.target.parentElement.remove()
        });
    });
    todo.value = ""
});