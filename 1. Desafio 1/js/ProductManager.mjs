// CREACION DE PRODUCT MANAGER
class ProductManager {
  constructor() {
    this.products = [];
  }

  // Método addProduct()
  addProduct(producto) {
    // Condicional para validar que tenga todos los campos
    if (
      producto.title &&
      producto.description &&
      producto.price &&
      producto.thumbnail &&
      producto.code &&
      producto.stock
    ) {
      // Condicional para ver si ya exite el 'code'
      const codigoRepetido = (prod) => prod.code === producto.code;
      if (!this.products.some(codigoRepetido)) {
        this.products.push(producto);
      } else {
        console.log(
          `\naddProduct()\nEl disco "${producto.title}" tiene un código "${producto.code}" ya existente. \nNO AGREGADO AL ARREGLO.\n`
        );
      }
    } else {
      console.log(
        `\naddProduct()\nEl producto "${producto.title}" no tiene todos los campos completos.\n`
      );
    }
  }
  // Método getProducts()
  getProducts() {
    console.log("\ngetProducts()\nLISTADO DE PRODUCTOS: \n", this.products);
  }

  // Método getProductsById()
  getProductById(paramId) {
    const prodBuscado = this.products.find((disco) => disco.id === paramId);
    if (!prodBuscado) {
      console.log(
        "\ngetProductsById()\nNo se encontró producto con el ID: " +
          paramId +
          "\n"
      );
    } else {
      console.log(
        "\ngetProductsById()\nProducto buscado por ID: " + paramId + "\n",
        prodBuscado
      );
    }
  }
}

export { ProductManager };
