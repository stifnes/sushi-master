import { Storage } from "./../appstate/storage.js";
import { Products } from "./../products/products.js";
import { Constants } from "./../constants/constants.js"
// dom vars
const cartTotal = document.querySelector(Constants.CART_TOTAL);
const cartVat = document.querySelector(Constants.CART_VAT);
const cartItems = document.querySelector(Constants.CART_ITEMS);
const cartContainer = document.querySelector(Constants.CART_CONTENT);
export class Cart {
    getCartButtons() {
      const buttons = [...document.querySelectorAll(".add-item")];
      buttons.forEach((button) => {
        this.addOnClickToCartButton(button);
      });
    }
  
    addOnClickToCartButton(button) {
      let { name } = button.dataset;
      button.addEventListener("click", () => {
        let sizes = Storage.getProductsSizes();
        const itemCount = Storage.getItemCount();
        let cartItem = {
          ...Products.getProduct(name),
          itemID: itemCount,
          size: [...sizes],
        };
        cartItem.calculatedPrice = this.calculatePrice(
          cartItem.price,
          sizes[0].value
        );
        this.updateItemInCart(cartItem);
        this.addToCart(cartItem, sizes);
        Storage.updateItemCount();
      });
    }
  
    updateItemInCart(cartItem) {
      let updatedCart = Storage.getCart();
      updatedCart = [...updatedCart, cartItem];
      Storage.saveCart(updatedCart);
      this.setCartValues(updatedCart);
    }
  
    calculatePrice(price, sizeMultiplier) {
      return price * sizeMultiplier;
    }
  
    setCartValues(cart) {
      let tempTotal = 0;
      cart.forEach((item) => {
        tempTotal += item.calculatedPrice;
      });
      const vat = Storage.getVatValue();
      const calculatedVat = tempTotal * vat;
      cartTotal.innerText =
        parseFloat(tempTotal + calculatedVat).toFixed(2) + "€";
      cartVat.innerText = parseFloat(calculatedVat).toFixed(2) + "€";
      cartItems.innerText = cart.length;
    }
  
    addToCart(item, sizes) {
      cartContainer.appendChild(this.getItemHtml(item, sizes));
      const selectElement = document.querySelector(`.size-select-${item.itemID}`);
      this.addBoxSizeChangeListener(selectElement, item);
    }
  
    getItemHtml(item, sizes) {
      const div = document.createElement("div");
      div.classList.add("item");
      let options = "";
      sizes.forEach((size) => {
        options += `<option value="${size.value}">${size.name}</option>`;
      });
      const currentPrice = parseFloat((item.price * sizes[0].value).toFixed(2));
      div.innerHTML = `
              <p>${item.name}</p>
              <select class="size-select-${item.itemID}">
                  ${options}
              </select>
              <div>
                  <p id="item-price-${item.itemID}" class="item-price">${currentPrice} €</p>
                  <button data-id=${item.itemID} class="remove-item">X</button>
              </div>`;
      return div;
    }
  
    addBoxSizeChangeListener(selectElement, item) {
      selectElement.addEventListener("change", (event) => {
        let updatedPrice = item.price * event.target.value;
        document.getElementById(`item-price-${item.itemID}`).innerHTML =
          parseFloat(updatedPrice).toFixed(2) + " €";
        const cart = Storage.getCart();
        cart.forEach(function (cartItem) {
          if (cartItem.itemID === item.itemID) {
            cartItem.calculatedPrice = parseFloat(updatedPrice.toFixed(2));
          }
        });
        this.setCartValues(cart);
        Storage.saveCart(cart);
      });
    }
  
    initializeCart() {
      const cart = Storage.getCart();
      this.setCartValues(cart);
      this.populateCart(cart);
      Storage.updateItemCount();
    }
    populateCart(cart) {
      cart.forEach((item) => this.addToCart(item, Storage.getProductsSizes()));
    }
    removeCartItemEvent() {
      cartContainer.addEventListener("click", (event) => {
        if (event.target.classList.contains("remove-item")) {
          let removeitem = event.target;
          let itemID = removeitem.dataset.id;
          cartContainer.removeChild(removeitem.parentElement.parentElement);
          this.removeItem(itemID);
        }
      });
    }
    removeItem(itemID) {
      let cart = Storage.getCart();
      cart = cart.filter((item) => {
        return item.itemID != itemID;
      });
      this.setCartValues(cart);
      Storage.saveCart(cart);
    }
  }