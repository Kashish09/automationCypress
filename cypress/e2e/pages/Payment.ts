export class Payment {

    private pageName = "//div[@class='step-one']"
    private cardName = "input[name='name_on_card']"
    private cardNumber = "input[name='card_number']"
    private cvcNumber = "input[name='cvc']"
    private expirationMonth = "input[name='expiry_month']"
    private expirationYear = "input[name='expiry_year']"
    private payAndConfirm = "#submit"

    getPageName(): void {
        cy.xpath(this.pageName).contains("Payment")
        cy.log("Payment page entered")
    }

    enterCardName(): void {
        cy.get(this.cardName).type("qwerty")
        cy.log("Card name entered")
    }

    enterCardNumer(): void {
        cy.get(this.cardNumber).type("1234567")
        cy.log("Card number entered")
    }

    enterCvcNumber(): void {
        cy.get(this.cvcNumber).type("000")
        cy.log("Cvc number entered")
    }

    enterExpirationMonth(): void {
        cy.get(this.expirationMonth).type("01")
        cy.log("Expiry month entered")
    }

    enterExpirationYear(): void {
        cy.get(this.expirationYear).type("2030")
        cy.log("Expiry year entered")
    }

    payAndConfirmButton(): void {
        cy.get(this.payAndConfirm).click()
        cy.log("Payment button clicked")
        cy.log("Payment page exited")
    }
}