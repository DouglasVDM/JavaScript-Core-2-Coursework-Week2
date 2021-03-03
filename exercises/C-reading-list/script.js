function readingList(books) {
  // Write your code here...
    const positionForParagraph = document.getElementById('content');
  // console.log(positionForParagraph);
  
  let unorderedListForBooks = document.createElement('ul');
  
  books.forEach(book => {
    
    let titleAndAuthor = document.createElement('p');
    // console.log(`${book.title} written by ${book.author}`);
    titleAndAuthor.innerText = `${book.title} written by ${book.author}`;
    
    let listedItem = document.createElement('li');
    // console.log(listedItem);
    
    let imageItem = document.createElement('img');
    console.log(imageItem);
    // imageItem.style = background-color
    
    positionForParagraph.appendChild(titleAndAuthor);  
    positionForParagraph.appendChild(unorderedListForBooks);  
    unorderedListForBooks.appendChild(listedItem);
    listedItem.appendChild(imageItem);
  });  

}

const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true
  }
];

readingList(books);