class hookahandwaiterPage {
    visit() {
        cy.visit('https://ring-n-bring-resto-qa.web.app/#/orders?restoID=JILZq2fzSlGLjapt6o8i&table=3&tablelabel=')

    }

    hookahButton = "//span[text()=' Hookah ']";
    plusButton = ".calendar > :nth-child(1) > img";
    orderButton = ".largeButton";
    cancelButton = ".customBackground";
    waiterButton = "//span[text()=' WAITER ']";




    hookahandwaiter() {
        cy.xpath(this.hookahButton).click()
        cy.get(this.plusButton).click()
        cy.get(this.orderButton).click()
        cy.xpath(this.hookahButton).click()
        cy.get(this.cancelButton).click()
        cy.xpath(this.waiterButton).click()
        cy.xpath(this.waiterButton).click()
        cy.get(this.cancelButton).click()


    }

}

export default new hookahandwaiterPage