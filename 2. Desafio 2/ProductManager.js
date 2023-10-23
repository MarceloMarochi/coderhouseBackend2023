const fs = require("fs");

class ProductManager {
  constructor(path) {
    this.path = path;
  }

  async create(data) {
    const { title, description, price, thumbnail, code, stock } = data;
    if (!title || !description || !price || !thumbnail || !code || !stock) {
      throw new Error("Todos los campos son requeridos!");
    }

    // Leer los productos del archivo
    const products = await getJsonFromFile(this.path);
    const newProduct = {
      id: products.length + 1,
      title,
      description,
      price,
      thumbnail,
      code,
      stock,
    };

    // Agregar nuevo producto
    products.push(newProduct);

    // Escribir los productos en el archivo
    await saveJsonInFile(this.path, products);
    console.log("Se creo el producto correctamente");
  }

  getProducts() {
    return getJsonFromFile(this.path);
  }

  async getProductsById(index) {
    const arrayProducts = await getJsonFromFile(this.path);
    const prodBuscado = arrayProducts.find((disco) => disco.id === index);
    if (!prodBuscado) {
      return (
        "\ngetProductsById()\nNo se encontró producto con el ID: " +
        index +
        "\n"
      );
    } else {
      return (
        "\ngetProductsById()\nProducto buscado por ID: " + index + "\n",
        prodBuscado
      );
    }
    // return getJsonFromFile(this.path);
  }

  // Metodo para cambiar algun campo del objeto
  async updateProduct(id, data) {
    const { title, description, price, thumbnail, code, stock } = data;
    const products = await getJsonFromFile(this.path);
    const index = products.findIndex((u) => u.id === id);
    if (index === -1) {
      throw new Error("Producto no encontrado.");
    }

    if (title) {
      products[index].title = title;
    }
    if (description) {
      products[index].description = description;
    }
    if (price) {
      products[index].price = price;
    }
    if (thumbnail) {
      products[index].thumbnail = thumbnail;
    }
    if (code) {
      products[index].code = code;
    }
    if (stock) {
      products[index].stock = stock;
    }
    await saveJsonInFile(this.path, products);
    console.log("Producto actualizado con exito.");
  }

  // Borrar producto
  async deleteProduct(id) {
    const products = await getJsonFromFile(this.path);
    const index = products.findIndex((u) => u.id === id);
    if (index === -1) {
      throw new Error("Producto no encontrado.");
    } else {
      products.splice(index, 1);
      await saveJsonInFile(this.path, products);
      console.log("Producto borrado con exito.");
    }
  }
}

const getJsonFromFile = async (path) => {
  if (!fs.existsSync(path)) {
    return [];
  }
  const content = await fs.promises.readFile(path, "utf-8");
  return JSON.parse(content);
};

/* No hace falta el async-await ya que solo entrega la 
escritura sobre el archivo y no hace falta convertirlo 
como en el caso anterior, podriamos borrarlos y reemplazar
el await por un return ↓*/
const saveJsonInFile = (path, data) => {
  const content = JSON.stringify(data, null, "\t");
  return fs.promises.writeFile(path, content, "utf-8");
};

async function test() {
  const productManager = new ProductManager("./Products.json");
  const data = {
    title: "Porco Rex",
    description: "Indio Solari y LFDAA",
    price: 4000,
    thumbnail: "./img",
    code: "AA11",
    stock: 10,
  };
  const data2 = {
    title: "El tesoro de los inocentes",
    description: "Indio Solari y LFDAA",
    price: 6500,
    thumbnail: "./ruta_img2",
    code: "AA12",
    stock: 15,
  };
  const data3 = {
    title: "El perfume de la tempestad",
    description: "Indio Solari y LFDAA",
    price: 4000,
    thumbnail: "./ruta_img3",
    code: "AA11",
    stock: 10,
  };

  // Retorno de array de productos
  await productManager.create(data);
  await productManager.create(data2);
  await productManager.create(data3);
  console.log(await productManager.getProducts());

  // Prueba para cambiar el code
  await productManager.updateProduct(1, { code: "BB22" });
  console.log(await productManager.getProducts());

  // ProductoById
  console.log(await productManager.getProductsById(2));

  // Prueba borrar un producto
  await productManager.deleteProduct(1);
  console.log(await productManager.getProducts());
}

test();
