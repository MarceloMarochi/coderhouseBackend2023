import Producto from "./classes/Producto.js";
import ProductManager from "./classes/ProductManager.js";

const producto1 = new Producto(
  "Porco Rex",
  "Indio Solari y LFDAA",
  5000,
  ".ruta_img",
  "AA11",
  15
);
const manager1 = new ProductManager();

manager1.addProduct(producto1);
console.log(manager1.getProductById(1));
