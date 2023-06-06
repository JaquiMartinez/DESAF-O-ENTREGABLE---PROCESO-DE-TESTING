class ProductManager {
    #id = 0;
  
    constructor() {
      this.products = [];
    }
  
    addProduct(title, description, price, thumbnail, code, stock) {
      const product = {
        title,
        description,
        price,
        thumbnail,
        code,
        stock,
      };
      product.id = this.#getId();
  
      // Verificar campos obligatorios - OK //
      if (this.validarCampos(product)) {
        // Corroborar que code no se duplique - OK //
        let codeRepe = false;
        this.products.forEach((product) => {
          if (product.code === code) {
            codeRepe = true;
          }
        });
        if (codeRepe) {
          console.log("Codigo repetido");
        } else {
          this.products.push(product);
        }
      }
    }
  
    #getId() {
      const oldId = this.#id;
      this.#id += 1;
      return oldId;
    }
  
    getProducts() {
      return this.products;
    }
  
    getProductById(id) {
      const productId = this.products.findIndex((product) => product.id === id);
      if (productId === -1) {
        console.error("Not found");
        return;
      }
      console.log(this.products[productId]);
    }
  
    validarCampos(product) {
      let validos = true;
      let values = Object.values(product);
      values.forEach((valor) => {
        if (valor === null || valor === undefined || valor.length === 0) {
          console.log("Campos obligatorios");
          validos =  false;
        }
      });
      return validos;
    }
  }
  
  
  //// TEST ////
  const pm = new ProductManager();
  pm.addProduct('Remera', 'Diseñada pensando en la comodidad y el estilo, esta prenda es perfecta para cualquier ocasión', 2000, "img", 1, 10);
  pm.addProduct('Zapatilla', 'Descubre la última tendencia en calzado con estas increíbles zapatillas', 5000, "img", 2, 8);
  pm.addProduct('Campera', 'Prepárate para enfrentar el frío con estilo con esta impresionante campera', 3000, "img", 4, 8);
  pm.addProduct('Camisa', 'Eleva tu estilo con esta elegante y sofisticada camisa', 4000, "img", 3, 8);
  console.log(pm.getProducts());
  pm.getProductById(0);
  pm.getProductById(1);
  pm.getProductById(2);