export class Cart {

    private cartRows = "//table[@id='cart_info_table']/descendant::a[@data-product-id]"
    private checkout = "//a[contains(text(),'Proceed To Checkout')]"

    deleteOneTshirtFromCart(): void {
        cy.log("CArt page entered")
        cy.xpath(this.cartRows).eq(0).click()
        cy.log("One tshirt deleted from cart")
    }

    proceedToCheckout(): void {
        cy.xpath(this.checkout).click()
        cy.log("User proceeds to checkout")
        cy.log("Cart page exited")
    }
}