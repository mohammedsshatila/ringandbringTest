
import calculationPage from "./calculationPage"
class foodmenuanddrinksPage {
    visit() {
        cy.visit('https://ring-n-bring-resto-qa.web.app/#/orders?restoID=JILZq2fzSlGLjapt6o8i&table=3&tablelabel=')

    }


    searchButton = 'app-search';
    searchBox = '#searchbox';
    plusButton = "//div[text()=' + ']";
    oneSpan = "//span[text()='1']";
    proceedButton = ".proceed";
    alertButton = '.alertBtn';





    clickOnFoodMenu() {
        const label = ['FOOD', 'DRINKS']
        const menu = ['tuna salad', 'water']


        for (let i = 0; i < label.length; i++) {
            const menuButton = `//span[text()=' ${label[i]} ']`;
            cy.xpath(menuButton).click()
            cy.get(this.searchButton).click()
            cy.get(this.searchBox).type(`${menu[i]}`)
            cy.xpath(this.plusButton).click()
            cy.xpath(this.oneSpan).next().click()
            calculationPage.calculationFormula()
            cy.get(this.proceedButton).click()
            cy.wait(3000)
            cy.get(this.alertButton).click()
            cy.reload();
        }




    }

}

export default new foodmenuanddrinksPage