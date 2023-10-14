import { ProductManager } from "./ProductManager.mjs";
import { Product } from "./Product.mjs";

/* CREACION DE PRODUCTOS */
const producto1 = new Product(
  "Porco Rex",
  "Indio Solari y LFDAA",
  5000,
  "./ruta_img",
  "AA11",
  10
);

const producto2 = new Product(
  "El tesoro de los inocentes",
  "Indio Solari y LFDAA",
  6500,
  "./ruta_img2",
  "AA12",
  15
);

const producto3 = new Product(
  "El perfume de la tempestad",
  "Indio Solari y LFDAA",
  4000,
  "./ruta_img3",
  "AA11",
  5
);

const producto4 = new Product(
  "Pajaritos, Bravos Muchachitos",
  "Indio Solari y LFDAA",
  7000,
  "AA13",
  5
);

const producto5 = new Product(
  "El Ruiseñor, el Amor y la Muerte",
  "Indio Solari y LFDAA",
  8000,
  "./ruta_img5",
  "AA15",
  20
);

/* CREACION DEL MANAGER */
const manager1 = new ProductManager();

/* PRUEBAS */
manager1.addProduct(producto1);
manager1.addProduct(producto2);
manager1.addProduct(producto3); // Producto con codigo repetido
manager1.addProduct(producto4);
manager1.addProduct(producto5); // Producto con campos incompletos

manager1.getProducts();

manager1.getProductById(1);
manager1.getProductById(7); // ID inexistente
