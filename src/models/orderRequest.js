export default class OrderRequest { 
    constructor(userId, productIds, subtotal, tax, gratuity, token) {
        this.userId = userId,
        this.productIds = productIds,
        this.subtotal = subtotal, 
        this.tax = tax, 
        this.gratuity = gratuity
        this.total = subtotal + tax + gratuity,
        this.token = token
    }
}