const sortBooksByPrice = document.getElementById('btnOrdenarPorPreco');
sortBooksByPrice.addEventListener('click', sortByPrice);

function sortByPrice() {
  let booksOrdered = listBooks.sort((a,b) => b.preco - a.preco);
  displayBooks(booksOrdered);
}