const endpoint = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';
let listBooks = [];

getBooks();

async function getBooks() {
  listBooks = await (await fetch(endpoint)).json();
  listBooks = applyDiscount(listBooks);
  
  displayBooks(listBooks);
}
