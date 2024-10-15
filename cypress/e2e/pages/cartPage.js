class cartPage {
    searchButton = 'app-search';
    searchBox = '#searchbox';
    plusButton = "//div[text()=' + ']";
    oneSpan = "//span[text()='1']";
    menuButton = "//span[text()=' FOOD ']";
    submitButton = ".largeButton";
    backButton = '.back-icon';
    itemCount = '#itemsCount';
    cartButton = 'app-cart-icon';
    clearButton = "//span[text()='CLEAR']";
    clearOrderText = "//p[text()='Clear order']";
    okayButton = "(//button[text()=' OK '])[2]";
    cancelButton = "(//button[text()=' Cancel '])[2]";
    header = ".H2MediumDark"

    visit() {
        cy.visit('https://ring-n-bring-resto-qa.web.app/#/orders?restoID=JILZq2fzSlGLjapt6o8i&table=3&tablelabel=')
    }

    clearcart() {
        cy.xpath(this.menuButton).click();
        cy.get(this.searchButton).click();
        cy.get(this.searchBox).type('tuna salad');
        cy.xpath(this.plusButton).click();
        cy.xpath(this.oneSpan).next().click();
        cy.get(this.submitButton).click();
        cy.get(this.backButton).click();
        cy.get(this.itemCount).contains('1');
        cy.get(this.cartButton).click();
        cy.xpath(this.clearButton).click();
        cy.xpath(this.clearOrderText).contains('Clear order');
        cy.xpath(this.okayButton).click();
        cy.xpath(this.menuButton).contains('FOOD');
    }

    cancelClearCart() {
        cy.xpath(this.menuButton).click();
        cy.get(this.searchButton).click();
        cy.get(this.searchBox).type('tuna salad');
        cy.xpath(this.plusButton).click();
        cy.xpath(this.oneSpan).next().click();
        cy.get(this.submitButton).click();
        cy.get(this.backButton).click();
        cy.get(this.itemCount).contains('1');
        cy.get(this.cartButton).click();
        cy.xpath(this.clearButton).click();
        cy.xpath(this.clearOrderText).contains('Clear order');
        cy.xpath(this.cancelButton).click();
        cy.get(this.header).contains('Tuna Salad');

    }
}

export default new cartPage