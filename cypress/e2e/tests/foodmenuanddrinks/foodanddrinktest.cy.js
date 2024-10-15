import foodmenuanddrinksPage from "../../pages/foodmenuanddrinksPage";
describe('Ring and bring Tests', () => {
    beforeEach(() => {
        cy.viewport('ipad-mini');
        foodmenuanddrinksPage.visit()
    });

    it('Order from food menu and drink menu tests', () => {
        foodmenuanddrinksPage.clickOnFoodMenu()

    });
});