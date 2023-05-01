export class Checkout {

    private order = "//a[contains(@href,'/payment')]"

    placeTheOrder(): void {
        cy.log("Checkout page entered")
        cy.xpath(this.order).click()
        cy.log("Order should be placed")
        cy.log("Checkpout page exited")
    }
}