class negativetestPage {
    valetButton = "//span[text()=' Valet ']";
    ticketnumberInput = "//input[@placeholder='Enter Ticket Number']"
    mobilenumbeInput = "//input[@placeholder='Enter mobile number']"
    sendButton = ".largeButton ";
    error = ".error";

    visit() {
        cy.visit('https://ring-n-bring-resto-qa.web.app/#/orders?restoID=JILZq2fzSlGLjapt6o8i&table=3&tablelabel=')

    }

    negativeTest() {
        cy.xpath(this.valetButton).click()
        cy.xpath(this.ticketnumberInput).type('test');
        cy.xpath(this.mobilenumbeInput).type('9090');
        cy.get(this.sendButton).click();
        cy.get(this.error).contains('Invalid Phone Number Entered');
    }

}

export default new negativetestPage