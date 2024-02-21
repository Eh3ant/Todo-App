const form = document.querySelector('#form');
const ul = document.querySelector('ul');
const todo = document.querySelector('#todo');
const todos = JSON.parse(localStorage.getItem('todos')) || [];

// Function to render todos from local storage
function renderTodos() {
    todos.forEach(todoText => {
        const newLi = document.createElement('li');
        newLi.innerText = todoText;

        const checkBox = document.createElement('input');
        checkBox.type = "checkbox";

        ul.appendChild(newLi);
        newLi.appendChild(checkBox);

        checkBox.addEventListener('click', function (e) {
            e.target.parentElement.className = 'crossOut';
            const removeBtn = document.createElement('button');
            removeBtn.innerText = "Remove Todo";
            newLi.appendChild(removeBtn);


            checkBox.style.display = "none";

            removeBtn.addEventListener('click', function (e) {
                e.target.parentElement.remove();
                updateLocalStorage();
            });
        });
    });
}

// Function to update local storage
function updateLocalStorage() {
    const todoItems = ul.querySelectorAll('li');
    const todosText = Array.from(todoItems).map(item => item.innerText);
    localStorage.setItem('todos', JSON.stringify(todosText));
}

// Event listener for form submission
form.addEventListener('submit', function (e) {
    e.preventDefault();

    const newLi = document.createElement('li');
    newLi.innerText = todo.value;

    const checkBox = document.createElement('input');
    checkBox.type = "checkbox";

    ul.appendChild(newLi);
    newLi.appendChild(checkBox);

    checkBox.addEventListener('click', function (e) {
        e.target.parentElement.className = 'crossOut'; // Apply the "crossOut" class
        const removeBtn = document.createElement('button');
        removeBtn.innerText = "Remove Todo";
        newLi.appendChild(removeBtn);

        // Hide the checkbox
        checkBox.style.display = "none";

        removeBtn.addEventListener('click', function (e) {
            e.target.parentElement.remove();
            updateLocalStorage();
        });
    });

    // Update local storage
    todos.push(todo.value);
    updateLocalStorage();


    todo.value = "";
});

// Render todos from local storage when the page loads
renderTodos();