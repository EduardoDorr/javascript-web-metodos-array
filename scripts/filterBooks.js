const filterButtons = document.querySelectorAll('.btn');
filterButtons.forEach(button => button.addEventListener('click', filterBooks));

function filterBooks() {
  const button = document.getElementById(this.id);
  let booksFiltered = button.value === 'disponivel' ? filterByAvailability(listBooks) : filterByCategory(listBooks, button);
  displayBooks(booksFiltered);
}

function filterByCategory(booksToFilter, button) {
  return booksToFilter.filter(book => book.categoria === button.value);
}

function filterByAvailability(booksToFilter) {
  return booksToFilter.filter(book => book.quantidade > 0);
}
