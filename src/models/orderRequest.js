export default class OrderRequest { 
    constructor(userId, products, subtotal, tax, gratuity, orderId) {
        this.userId = userId,
        this.products = products,
        this.subtotal = subtotal, 
        this.tax = tax, 
        this.gratuity = gratuity
        this.total = parseFloat(subtotal) + parseFloat(tax) + parseFloat(gratuity),
        this.orderId = orderId
    }
}