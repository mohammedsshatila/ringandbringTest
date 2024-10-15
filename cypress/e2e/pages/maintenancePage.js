class maintenancePage {
    maintenanceButton = "//span[text()=' MAINTENANCE ']";
    radioButton = "(//input[@type='radio'])[1]";
    cancelOrder = ".cancelOrder"
    okayButton = "//button[text()=' OK ']"
    visit() {
        cy.visit('https://ring-n-bring-resto-qa.web.app/#/orders?restoID=JILZq2fzSlGLjapt6o8i&table=3&tablelabel=')

    }
    maintenance() {
        cy.xpath(this.maintenanceButton).click();
        cy.xpath(this.radioButton).click({ force: true });
        cy.get(this.cancelOrder).contains('Cancel');
        cy.xpath(this.maintenanceButton).click();
        cy.xpath(this.okayButton).click();
    }
}

export default new maintenancePage;