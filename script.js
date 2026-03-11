function addItem() {
        let input = document.getElementById("todoInput");
        let text = input.value;
        if (text === "") {
          alert("Please enter a task");
          return;
        }
        let li = document.createElement("li");
        li.textContent = text;
        let button = document.createElement("button");
        button.textContent = "X";
        button.onclick = function() {
          removeItem(button);
        };
        li.appendChild(button);
        document.getElementById("todoList").appendChild(li);
        input.value = "";
      }

      function removeItem(button) {
        let li = button.parentElement;
        li.remove();
      }
let todos = [];

function addTodo(task){
    todos.push(task);
    localStorage.setItem("todos", JSON.stringify(todos));
}

function loadTodos(){
    let data = localStorage.getItem("todos");
    if(data){
        todos = JSON.parse(data);
    }
}