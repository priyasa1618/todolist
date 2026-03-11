let todos = JSON.parse(localStorage.getItem("todos")) || [];

function addItem() {
  let input = document.getElementById("todoInput");
  let text = input.value;

  if (text === "") {
    alert("Please enter a task");
    return;
  }

  todos.push(text);
  localStorage.setItem("todos", JSON.stringify(todos));

  displayTodos();
  input.value = "";
}

function displayTodos() {
  let list = document.getElementById("todoList");
  list.innerHTML = "";

  todos.forEach(function(task, index) {
    let li = document.createElement("li");
    li.textContent = task;

    let button = document.createElement("button");
    button.textContent = "X";
    button.onclick = function () {
      removeItem(index);
    };

    li.appendChild(button);
    list.appendChild(li);
  });
}

function removeItem(index) {
  todos.splice(index, 1);
  localStorage.setItem("todos", JSON.stringify(todos));
  displayTodos();
}

window.onload = displayTodos;