function listOfColours(colours) {
  // Write your code here...
  const targetDiv = document.getElementById('content');
  // console.log('This is my target div', targetDiv); 
 
  let selectElement = document.createElement('select');
  
  
  colours.forEach(element => {
    console.log('Element is pointing to ', element);
    
    let optionElement = document.createElement('option');
    optionElement.innerHTML = element;
    
    let paragraphElement = document.createElement('p');
    paragraphElement.innerHTML = `You have selected: ${element}`;
    
    optionElement.addEventListener('click', colorMatch);
    function colorMatch() {
      // console.log('Element is pointing to ', optionElement);
      
      // paragraphElement.style.backgroundColor = 'element';
      
    }
    console.log(paragraphElement.style.color = element);
    console.log(paragraphElement);
    targetDiv.appendChild(paragraphElement);
    targetDiv.appendChild(selectElement);
    selectElement.appendChild(optionElement);
    
    
    
    
    
    
    
  }); //(element = 0; element < colours.length; element++) {
  };



const colours = ["red", "blue", "green", "yellow", "pink", "brown"];

listOfColours(colours);
