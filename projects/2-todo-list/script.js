function populateTodoList(todos) {
  let list = document.getElementById("todo-list");
  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.

  // remove current DOM in the list
  //list.replaceChildren();
  // create a new li foe each todo, then add it to the DOM as a child of the list
  //todos.map(createTodoLi).forEach((li) => list.appendChild(li));

  todos.forEach(addTodo);
}

function addTodo(todo) {
  let list = document.querySelector("#todo-list");
  console.lod(todo.task);

  let li = document.createElement("li");

  li.innerText = todo.task;
  list.appendChild(li);
  li.className = "list-group-item";

  let span = document.createElement("span");
  span.appendChild(li);
  let check = document.createElement("i");
  check.innerHTML = '<i class="fa fa-check" aria-hidden="true"></i>';
  check.appendChild(span);
  let trash = document.createElement("i");
  trash.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>';
  trash.appendChild(span);

  console.log(check);
  span.style.backgroundColor = "blue";
}

// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];

populateTodoList(todos);

// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
function addNewTodo(event) {
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  event.preventDefault();
  // Write your code here... and remember to reset the input field to be blank after creating a todo!
}

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  // Write your code here...
}
