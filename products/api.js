import { Constants } from "./../constants/constants.js";

/**
 *
 * @method fetchProducts
 * @returns products
 */
export async function fetchProducts() {
  try {
    const result = await fetch(Constants.PATH);
    let products = await result.json();
    return products.sushi_box;
  } catch (error) {
    console.log(error);
  }
}

/**
 *
 * @method fetchVat
 * @returns vat
 */
export async function fetchVat() {
  try {
    const result = await fetch(Constants.PATH);
    let data = await result.json();
    return data.vat;
  } catch (error) {
    console.log(error);
  }
}

/**
 *
 * @method fetchProductSizes
 * @returns sizes
 */
export async function fetchProductSizes() {
  try {
    const result = await fetch(Constants.PATH);
    let sizes = await result.json();
    return sizes.size_multipliers;
  } catch (error) {
    throw error;
  }
}
