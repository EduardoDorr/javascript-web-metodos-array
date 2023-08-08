function calculateTotalPrice(booksToTotalPrice) {
  return booksToTotalPrice.reduce((acc, book) => acc + book.preco, 0);
}