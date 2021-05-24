import { Constants } from "./../constants/constants.js"
export class Storage {
    static saveCart(cart) {
      localStorage.setItem(Constants.CART, JSON.stringify(cart));
    }
    static getCart() {
      return localStorage.getItem(Constants.CART)
        ? JSON.parse(localStorage.getItem(Constants.CART))
        : [];
    }
    static saveProductsSizes(sizes) {
      localStorage.setItem(Constants.SIZES, JSON.stringify(sizes));
    }
    static saveVatValue(vat) {
      localStorage.setItem(Constants.VAT, vat);
    }
    static getItemCount() {
      return localStorage.getItem(Constants.ITEM_COUNT);
    }
    static updateItemCount() {
      if (!Storage.getItemCount()) {
        localStorage.setItem(Constants.ITEM_COUNT, 0);
      } else {
        const count = parseInt(Storage.getItemCount()) + 1;
        localStorage.setItem(Constants.ITEM_COUNT, count);
      } 
    }
    static getVatValue() {
      return localStorage.getItem(Constants.VAT);
    }
    static getProductsSizes() {
      return JSON.parse(localStorage.getItem(Constants.SIZES));
    }
  }