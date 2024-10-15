class valetPage {
    valetButton = "//span[text()=' Valet ']";
    ticketnumberInput = "//input[@placeholder='Enter Ticket Number']"
    mobilenumbeInput = "//input[@placeholder='Enter mobile number']"
    sendButton = ".largeButton ";
    cancelOrder = ".cancelOrder";
    okayButton = "//button[text()=' OK ']"

    visit() {
        cy.visit('https://ring-n-bring-resto-qa.web.app/#/orders?restoID=JILZq2fzSlGLjapt6o8i&table=3&tablelabel=')

    }

    valet() {
        cy.xpath(this.valetButton).click()
        cy.xpath(this.ticketnumberInput).type('test');
        cy.xpath(this.mobilenumbeInput).type('70998877');
        cy.get(this.sendButton).click();
        cy.get(this.cancelOrder).contains('Cancel');
        cy.xpath(this.valetButton).click();
        cy.xpath(this.okayButton).click();


    }



}

export default new valetPage