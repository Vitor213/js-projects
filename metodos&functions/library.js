const library = {
  books: [
    { id: 1, name: "Van Helsing", quantity: 3 },
    { id: 2, name: "Marley and me", quantity: 4 },
    { id: 3, name: "Hellraiser", quantity: 3 },
  ],
  listarLivros() {
    this.books.forEach((book) => {
      console.log(book.id, book.name, book.quantity);
    });
  },
  encontrarLivro(id) {
    let encontrado = this.books.find((book) => book.id === id);
    if (!encontrado) throw Error("Livro não encontrado");
    return encontrado;
  },
  addBook(id, name, quantity) {
    this.books = this.books.push(id, name, quantity);
  },
};
const cart = {
  items: [{}],

  addToCart(id) {
    const book = library.encontrarLivro(id);
    const item = this.items.find((item) => item.productId === id);
  },
};

library.listarLivros();
library.encontrarLivro(11);
