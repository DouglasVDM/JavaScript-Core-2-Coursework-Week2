let input = document.getElementById("todoInput");
console.log("input:", input);

let ul = document.getElementById("todo-list");
console.log("ul", ul);

let btnAdd = document.getElementById("btn-add");
console.log("btnAdd", btnAdd);

let btnRemove = document.getElementById("btn-remove");
console.log("btnRemove", btnRemove);

btnAdd.addEventListener("click", addNewTodo);
btnRemove.addEventListener("click", deleteAllCompletedTodos);

//  Creating the listitem
function createListItem(item) {
  console.log("task:", item.task)
  let li = document.createElement("li");
  let span = document.createElement("span");
  let iCheck = document.createElement("i");
  let iTrash = document.createElement("i");

  li.style.listStyle = "none";
  li.textContent = item.task;

  li.className = "list-group-item d-flex justify-content-between align-items-center";
  span.className = "badge bg-primary rounded-pill";
  iCheck.className = "fa fa-check";
  iTrash.className = "fa fa-trash";

  iCheck.setAttribute("aria-hidden", true);
  iTrash.setAttribute("aria-hidden", true);

  span.appendChild(iCheck);
  span.appendChild(iTrash);
  li.appendChild(span);
  ul.appendChild(li);

  completedTodo(iCheck, li);
  removeCompletedTodo(iTrash);
}

let lineThroughTodo = [];

function completedTodo(iCheck, li) {
  iCheck.addEventListener("click", () => {
    if (li.style.textDecoration === "") {
      li.style.textDecoration = "line-through"
      lineThroughTodo.push(li.outerText);
      console.log(lineThroughTodo);
    } else if (li.style.textDecoration = "line-through") {
      li.style.textDecoration = ""
    }
  })
}

function removeCompletedTodo(iTrash) {
  iTrash.addEventListener('click', function (e) {
    let getLiParent = e.target.parentElement.parentElement
    getLiParent.remove()
  })
}

function populateTodoList(todos) {
  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.
  todos.forEach(element => createListItem(element));
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
  let newItem = { task: input.value, completed: false };
  todos.push(newItem);
  createListItem(newItem)
}
// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  // Write your code here.
  return lineThroughTodo.splice(0, lineThroughTodo.length);
}
