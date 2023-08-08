const discout = 0.1;

function applyDiscount(books) {
  return books.map(book => {
    return {...book, preco: book.preco - (book.preco * discout)}
  });
}