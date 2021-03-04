function listOfColours(colours) {
  // Write your code here...
  const targetDiv = document.getElementById('content');
  // console.log('This is my target div', targetDiv);

  
  let paragraphElement = document.createElement('p');
  paragraphElement.innerText = 'selectAColor';
  
  targetDiv.appendChild(paragraphElement);
  
  let selectElement = document.createElement('select');
  targetDiv.appendChild(selectElement);
  
  selectElement.addEventListener('click', colorMatch);
  function colorMatch() {
      selectElement.children.style.color = element;
  }
  
  colours.forEach(element => {
    // console.log('Element is pointing to ', element);
    

    let optionElement = document.createElement('option');
    optionElement.innerText = element;

    
    
    
    selectElement.appendChild(optionElement);
  });

}

const colours = ["red", "blue", "green", "yellow", "pink", "brown"];

listOfColours(colours);
