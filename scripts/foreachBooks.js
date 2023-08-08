const booksSection = document.getElementById('livros');
const totalPriceSection = document.getElementById('valor_total_livros_disponiveis');

function displayBooks(booksToDisplay) {
  clearDisplayBooks();

  booksToDisplay.forEach(book => {
    let availability = book.quantidade > 0 ? 'livro__imagens' : 'livro__imagens indisponivel';

    booksSection.innerHTML += `
    <div class="livro">
      <img class="${availability}" src="${book.imagem}" alt="${book.alt}" />
      <h2 class="livro__titulo">
        ${book.titulo}
      </h2>
      <p class="livro__descricao">${book.autor}</p>
      <p class="livro__preco" id="preco">R$${book.preco.toFixed(2)}</p>
      <div class="tags">
        <span class="tag">${book.categoria}</span>
      </div>
    </div>
    `;
  });

  let totalPrice = calculateTotalPrice(filterByAvailability(booksToDisplay));
  
  displayTotalPrice(totalPrice);
}

function displayTotalPrice(totalPrice) {
  clearDisplayTotalPrice();

  totalPriceSection.innerHTML += `
  <div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$ <span id="valor">${totalPrice.toFixed(2)}</span></p>
  </div>
  `;
}

function clearDisplayBooks() {
  booksSection.innerHTML = '';
}

function clearDisplayTotalPrice() {
  totalPriceSection.innerHTML = '';
}