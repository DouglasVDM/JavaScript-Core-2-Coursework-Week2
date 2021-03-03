function listOfColours(colours) {
  // Write your code here...
  const targetDiv = document.getElementById('content');
  console.log('This is my target div', targetDiv);

  let selectElement = document.createElement('select');
  targetDiv.appendChild(selectElement);
  
  colours.forEach(element => {
    console.log('Element is pointing to ', element);
    
    let paragraphElement = document.createElement('p');
    paragraphElement.innerText = element;

    let optionElement = document.createElement('option');

    optionElement.addEventListener('click', colorMatch);
    function colorMatch() {
      optionElement.children.style.color = element;
    }
    
    
    
    selectElement.appendChild(optionElement);
    optionElement.appendChild(paragraphElement);
  });

}

const colours = ["red", "blue", "green", "yellow", "pink", "brown"];

listOfColours(colours);
