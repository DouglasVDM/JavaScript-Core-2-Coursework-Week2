function todoList(todos) {
  // Write your code here...
  const targetDiv = document.getElementById('content');
  console.log('this is my target', targetDiv);

  let ulForList = document.createElement('ul');
  console.log('This is my ul', ulForList);

  todos.forEach(element => {
    
    let liForItems = document.createElement('li');
    console.log('This is my li', liForItems);    
    liForItems.innerText = element.todo;

    if (liForItems.addEventListener('click', addLineThrough));
      function addLineThrough () {
        liForItems.style.setProperty('text-decoration', 'line-through');
    } 
    // (liForItems.removeaddEventListener('click', removeLineThrough));
    //   function removeLineThrough () {
    //     liForItems.style.setProperty('text-decoration', 'none');
    //   }
      
    
    ulForList.appendChild(liForItems);
    targetDiv.appendChild(ulForList);
  });

}

const todos = [
  {todo: "wash the dishes"}, 
  {todo: "walk the dog"}, 
  {todo: "learn javascript"}, 
  {todo: "go shopping"}
];

todoList(todos);