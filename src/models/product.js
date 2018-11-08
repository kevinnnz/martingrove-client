/* eslint-disable */
export default class Product { 
    constructor(productId, productName, productPrice, productQty) {
        this.productId = productId;
        this.productName = productName;
        this.productPrice = productPrice;
        this.productQty = productQty;
    }

    // setter
    setQty(productQty) {
        this.productQty = productQty;
    }

}