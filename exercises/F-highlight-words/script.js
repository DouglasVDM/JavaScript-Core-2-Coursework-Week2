const paragraph =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis massa ut sem finibus ultrices. Phasellus hendrerit placerat libero non facilisis. Etiam tincidunt ut elit id elementum. Etiam accumsan semper ipsum, ac porttitor ex tempus non. Donec vitae massa condimentum, faucibus magna non, sagittis libero. Phasellus ullamcorper malesuada tellus at egestas. Duis volutpat turpis velit, ut bibendum tellus ornare ac. Nullam feugiat nisi fringilla eleifend scelerisque. Phasellus elit nulla, sodales eget consectetur sed, tincidunt vitae velit. Fusce eget tempus magna, vitae ultrices purus. Proin ac purus tellus. Curabitur rhoncus est quis libero egestas ultrices. Proin viverra a ex sed convallis. Fusce ut orci consectetur, placerat ipsum non, commodo neque. Nulla at dui velit. In ut accumsan libero. Duis ac lacus consectetur, posuere eros nec, aliquet nisl. Quisque sodales fringilla lacinia. Donec hendrerit ornare lectus, nec iaculis justo tincidunt et. Cras a varius libero, ac bibendum est. Aliquam molestie, leo non aliquam lobortis, nulla tortor hendrerit turpis, et ullamcorper magna diam quis elit. Maecenas elit libero, tincidunt sit amet lacinia sit amet, venenatis nec est.";

const colours = ["none", "yellow", "green", "blue"];


let paragraphArray = paragraph.split(' ');
let content = document.getElementById('content');

function createPTag() {
  let pTag = document.createElement("p");
  content.appendChild(pTag);
  return pTag;
}

function createSpanTag(pTag, selectButton) {
  paragraphArray.forEach(word => {
    let span = document.createElement('span');
    span.setAttribute('id', 'span-tag');
    pTag.appendChild(span);
    span.innerText = word + " ";

    span.addEventListener('click', function () {
      let findValue = selectButton.value;
      span.style.backgroundColor = findValue;
    });

  });
}

function createSelectButton(content) {
  let selectButton = document.createElement('select');
  selectButton.setAttribute('id', 'selectID');
  content.appendChild(selectButton);
  return selectButton;
}

function createOptionElement(colours, selectButton) {
  colours.forEach(colour => {
    let option = document.createElement('option');
    selectButton.appendChild(option);
    option.innerText = colour;
  });
}

function createElements(colours) {
  // paragraphArray takes the paragraph and turns it into an array with the split method and returns each word with an index inside of the array.
  let selectButton = createSelectButton(content);
  let pTag = createPTag();
  createSpanTag(pTag, selectButton);
  createOptionElement(colours, selectButton);
  // itirating through the list of colours and returning it in the select bar as an option to choose a colour from.
  // This step returns the array with each word wraped with a span wrapped around it and styled in CSS to look like a paragraph.
}

function highlightWords(paragraph, colours) {
  // Write your code here...
  createElements(colours);
}

highlightWords(paragraph,colours);




/*
function highlightWords(paragraph, colours) {
  // Write your code here...
  const targetElement = document.getElementById('content');

  let selectElement = document.createElement('select');
  targetElement.appendChild(selectElement);
  
  let loremArray = paragraph.split(' ');
  console.log('lorem', loremArray);

  loremArray.forEach(element => {
    
    let spanElement = document.createElement('span');
    spanElement.innerText = element + ' ';

    spanElement.addEventListener('click', getValue);
    function getValue() {
      selectElement.value;
    }
    
    console.log('span element', spanElement);
    console.log('value of select item', selectElement.value);

    let paragraphElement = document.createElement('p');
    
    let optionElement = document.createElement('option');
    
    paragraphElement.appendChild(spanElement)
    optionElement.appendChild(paragraphElement);
    selectElement.appendChild(optionElement);
  });

}

const paragraph =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis massa ut sem finibus ultrices. Phasellus hendrerit placerat libero non facilisis. Etiam tincidunt ut elit id elementum. Etiam accumsan semper ipsum, ac porttitor ex tempus non. Donec vitae massa condimentum, faucibus magna non, sagittis libero. Phasellus ullamcorper malesuada tellus at egestas. Duis volutpat turpis velit, ut bibendum tellus ornare ac. Nullam feugiat nisi fringilla eleifend scelerisque. Phasellus elit nulla, sodales eget consectetur sed, tincidunt vitae velit. Fusce eget tempus magna, vitae ultrices purus. Proin ac purus tellus. Curabitur rhoncus est quis libero egestas ultrices. Proin viverra a ex sed convallis. Fusce ut orci consectetur, placerat ipsum non, commodo neque. Nulla at dui velit. In ut accumsan libero. Duis ac lacus consectetur, posuere eros nec, aliquet nisl. Quisque sodales fringilla lacinia. Donec hendrerit ornare lectus, nec iaculis justo tincidunt et. Cras a varius libero, ac bibendum est. Aliquam molestie, leo non aliquam lobortis, nulla tortor hendrerit turpis, et ullamcorper magna diam quis elit. Maecenas elit libero, tincidunt sit amet lacinia sit amet, venenatis nec est.";

const colours = ["yellow", "green", "blue", "none"];

highlightWords(paragraph, colours);
*/