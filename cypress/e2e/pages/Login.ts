export class Login {
    private loginEmailAddress = ".login-form input[name='email']"
    private loginPassword = ".login-form input[name='password']"
    private loginLogInButton = "button[data-qa='login-button']"
    private loginName = "//*[contains(text(),'Logged in as')]"
    private productPageLink = "//*[contains(text(),'Products')]"

    load(): void {
        cy.log("Login page entered")
        cy.visit("https://www.automationexercise.com/login")
        cy.log("On Login page")
    } 

    setLoginEmailAddress(value: string): void {
        cy.get(this.loginEmailAddress).type(value)
        cy.log("Entered email address")
    }

    setLoginPassword(value: string): void {
        cy.get(this.loginPassword).type(value)
        cy.log("Entered password")
    }

    submit(): void {
        cy.get(this.loginLogInButton).click()
        cy.log("Login submit button clicked")
    }

    loggedUserNameVisible(): void {
        cy.xpath(this.loginName).should("have.text", " Logged in as qwerty123")
    }

    openProductPage(): void {
        cy.xpath(this.productPageLink).click()
        cy.log("Login page exited")
        cy.log("Product page should open")
    }

}