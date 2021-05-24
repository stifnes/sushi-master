const productsDOM = document.querySelector(".products");

// getting the products
export class Products {
	renderProducts(products) {
    let result = "";
    products.forEach((product) => {
      result += `<div class="product-item">
						<div>
							<div class="product-name">
								${product.name}
							</div>
							<div class="product-description">
								${product.description}
							</div>
						</div>
						<button class="add-item" data-name=${product.name}>+</button>
					</div>`;
    });
    productsDOM.innerHTML = result;
  }
	static saveProducts(products) {
    localStorage.setItem("products", JSON.stringify(products));
  }
  static getProduct(name) {
    const products = JSON.parse(localStorage.getItem("products"));
    return products.find((product) => product.name === name);
  }
}