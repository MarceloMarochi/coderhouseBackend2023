// CREACION CLASE PRODUCT
class Product {
  constructor(title, description, price, thumbnail, code, stock) {
    this.id = Product.creacionId();
    this.title = title;
    this.description = description;
    this.price = price;
    this.thumbnail = thumbnail;
    this.code = code;
    this.stock = stock;
  }

  // Función para hacer el ID incremental
  static firstId = 0;
  static vuelta = 0;
  static creacionId() {
    if (this.vuelta === 0) {
      this.vuelta += 1;
      return (this.firstId = 1);
    } else {
      return (this.firstId += 1);
    }
  }
}

export { Product };
