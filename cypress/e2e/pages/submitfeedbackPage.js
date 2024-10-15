class submitfeedbackPage {
    FeedBackButton = "//span[text()=' FEEDBACK ']";
    submitButton = '.largeButton ';
    mobileMenu = 'app-burger';
    shareButton = "//span[text()='Share']"
    visit() {
        cy.visit('https://ring-n-bring-resto-qa.web.app/#/orders?restoID=JILZq2fzSlGLjapt6o8i&table=3&tablelabel=')

    }
    submitAfeedBack() {
        cy.xpath(this.FeedBackButton).click();
        cy.get(this.submitButton).click()
    }



}

export default new submitfeedbackPage;