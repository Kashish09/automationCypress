export class OrderConfirmation {

    private invoiceDownload = "//a[contains(@href,'/download_invoice')]"
    private continue = "//a[contains(text(), 'Continue')]"

    downloadInvoice(): void {
        cy.log("Order Confirmation page entered")
        cy.xpath(this.invoiceDownload).click()
        cy.log("Invoice should be downloaded")
    }

    continueToShop(): void {
        cy.xpath(this.continue).click()
    }
}