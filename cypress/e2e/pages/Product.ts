export class Product {

    private searchProduct = "#search_product"
    private searchClick = "#submit_search"
    private tshirtCollection = "//*[@class='productinfo text-center']//a[@data-product-id]"
    private continueShop = "//button[@data-dismiss='modal']"
    private viewCart = "//div[@id='cartModal']/descendant::div/descendant::a[contains(.,'View Cart')]"


    searchProductFromSearchBar(value: string): void {
        cy.log("Product page entered")
        cy.get(this.searchProduct).type(value)
        cy.log("Tshirts searched from search bar")
    }

    clickSearchButton(): void {
        cy.get(this.searchClick).click()
        cy.log("Search button is clicked")
    }

    addTshirtsToCart(): void {
        // let size = cy.xpath(this.tshirtCollection).its("length")
        cy.xpath(this.tshirtCollection).eq(0).click()
        cy.xpath(this.continueShop).click()
        cy.xpath(this.tshirtCollection).eq(1).click()
        cy.xpath(this.viewCart).click()
        cy.log("Tshirts added to cart")
        cy.log("Leaving Product page")
        
    }
}

