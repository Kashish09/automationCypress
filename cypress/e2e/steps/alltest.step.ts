import { DataTable, Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import { Login } from "../pages/Login";
import { Product } from "../pages/Product";
import { Cart } from "../pages/Cart";
import { Checkout } from "../pages/Checkout";
import { Payment } from "../pages/Payment";
import { OrderConfirmation } from "../pages/OrderConfirmation";

let login: any
let product: any
let cart: any
let checkout: any
let payment: any
let orderConfirmation: any

Given("user is on login page", () => {
    login = new Login()
    login.load()
})

When("user enters valid id and password", (table: DataTable) => {
    table.hashes().forEach(row => {
        login.setLoginEmailAddress(row.username)
        login.setLoginPassword(row.password)
    })
})

When("click on login button", () => {
    login.submit()
})

Then("user should land on home page", () => {
    login.loggedUserNameVisible()
})

Then("user go to Product Page", () => {
    login.openProductPage()
})

When("search tshirts", (table: DataTable) => {
    product = new Product()
    table.hashes().forEach(row => {
        product.searchProductFromSearchBar(row.product)
    })
    product.clickSearchButton()
})

When("add two tshirts to cart", () => {
    product.addTshirtsToCart()
})

Then("user is able to remove one tshirt", () => {
    cart = new Cart()
    cart.deleteOneTshirtFromCart()
})

Then("user is able to proceed to checkout and place the order", () => {
    cart.proceedToCheckout()
    checkout = new Checkout()
    checkout.placeTheOrder()
})

When("user is redirected to Payments page after placing order", () => {
    payment = new Payment()
    payment.getPageName()
})

Then("user is able to fill the card details", () => {
    payment.enterCardName()
    payment.enterCardNumer()
    payment.enterCvcNumber()
    payment.enterExpirationMonth()
    payment.enterExpirationYear()
})

Then("user is able to click the Pay and Confirm button", () => {
    payment.payAndConfirmButton()
})

Then("user downloads the invoice", () => {
    orderConfirmation = new OrderConfirmation()
    // cy.window().document().then(function (doc) {
    //     doc.addEventListener('click', () => {
    //       setTimeout(function () { doc.location.reload() }, 5000)
    //     })
    //     orderConfirmation.continueToShop()
    //   })
    cy.window().document().then(function (doc) {
        doc.addEventListener('click', () => {
          setTimeout(function () { doc.location.reload() }, 2000)
        })
        
        /* Make sure the file exists */
        cy.intercept('/', (req) => {
          req.reply((res) => {
            expect(res.statusCode).to.equal(200);
          });
        });
      
        // cy.get('[ng-click="vm.export()"]').click()
        // orderConfirmation.continueToShop()
      })
    orderConfirmation.downloadInvoice()
    // orderConfirmation.continueToShop()
})