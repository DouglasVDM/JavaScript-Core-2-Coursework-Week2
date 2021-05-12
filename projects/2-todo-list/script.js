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



// -----simple todo list-----//
/*
let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');

addToDoButton.addEventListener('click', function(){
    var paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputField.value;
    toDoContainer.appendChild(paragraph);
    inputField.value = "";
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through";
    })
    paragraph.addEventListener('dblclick', function(){
        toDoContainer.removeChild(paragraph);
    })
})
 */



//-----example-----//
/*
function populateTodoList(todoList) {
  let list = document.getElementById("todo-list");

  for (let i=0; i<todoList.length; i++){

    let liItem = document.createElement('li');
    liItem.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center");

    let span = document.createElement('span')
    span.classList.add("badge", "bg-primary", "rounded-pill");

    let iCheck = document.createElement('i');
    iCheck.classList.add("fa", "fa-check")
    iCheck.setAttribute("aria-hidden", "true");

    let iTrash = document.createElement('i')
    iTrash.classList.add("fa", "fa-trash")
    iTrash.setAttribute("aria-hidden", "true");

    liItem.innerText = todoList[i].task;
    span.append(iCheck);
    span.append(iTrash);
    liItem.append(span);
    list.append(liItem);

    iCheck.addEventListener('click', () => {
        if (liItem.style.textDecoration === "") {
          liItem.style.textDecoration = "line-through";
        } else if (liItem.style.textDecoration === "line-through") {
          liItem.style.textDecoration = "";
        }
      });

    iTrash.addEventListener('click', function(e){
      let getLiParent = e.target.parentElement.parentElement;
      getLiParent.remove()
    })

    }
}

let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
  { task: "Cook dinner", completed: false },
  { task: "Hoover", completed: false },
  { task: "Do laundry", completed: false },
  { task: "Clean oven", completed: false },
];

populateTodoList(todos);

function addNewTodo(event) {

  event.preventDefault();

  let newTodo = [];
  let newTodoObj = new Object();

  let input = document.getElementById('todoInput').value;
  let form = document.getElementsByTagName('form')[0];

  newTodoObj.task = input;
  newTodo.push(newTodoObj);
  form.reset();

  populateTodoList(newTodo);
}


function deleteAllCompletedTodos() {

  let list = document.getElementById("todo-list");
  let listDiv = list.parentElement;
  let listItemHTMLC = document.getElementsByClassName('list-group-item');
  let listItem = [...listItemHTMLC];


  let deleteDiv = document.createElement('div');
  deleteDiv.classList.add("col-md", "offset-1");
  let deleteCompletedBtn = document.createElement('button')
  deleteCompletedBtn.innerText = "Delete Completed";
  deleteCompletedBtn.classList.add("btn", "btn-primary", "mb-3");

  deleteDiv.append(deleteCompletedBtn);
  listDiv.append(deleteDiv);

  deleteCompletedBtn.addEventListener('click', () => {

    for(let i=0; i<listItem.length; i++){
      if (listItem[i].style.textDecoration === "line-through") {
        listItem[i].remove();
      }
    }
  });

};

deleteAllCompletedTodos();
*/