class ProductManager {
  constructor() {
    this.products = [];
  }

  // Metodos
  addProduct(product) {
    this.products.push(product);
  }

  getProductById(id) {
    const product = this.products.find((product) => product.id === id);
    return product ? product : "Product Not found";
  }
}
