//imports
import { fetchProducts, fetchVat, fetchProductSizes } from "./products/api.js";
import { Products } from "./products/products.js";
import { Storage } from "./appstate/storage.js";
import { Cart } from "./cart/cart.js";


//DOM Manipulation

function initializeApp() {
  document.addEventListener("DOMContentLoaded", () => {
    const cartObject = new Cart();
    const getProducts = new Products();
    // setup application
    cartObject.initializeCart();

    // getting all the product sizes
    fetchProductSizes().then((sizes) => {
      let sizesArray = [];
      for (const [key, value] of Object.entries(sizes)) {
        var x = {};
        x.name = key;
        x.value = value;
        sizesArray.push(x);
      }
      Storage.saveProductsSizes(sizesArray);
    });

    // getting all products
    fetchProducts()
      .then((products) => {
        getProducts.renderProducts(products);
        Products.saveProducts(products);
      })
      .then(() => {
        cartObject.getCartButtons();
        cartObject.removeCartItemEvent();
      });

    // getting tax value
    fetchVat().then((vat) => {
      Storage.saveVatValue(vat);
    });
  });
}

initializeApp();