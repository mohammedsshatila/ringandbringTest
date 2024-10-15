import cartPage from "../../pages/cartPage";
describe('Ring and bring Tests', () => {
    beforeEach(() => {
        cy.viewport('ipad-mini');
        cartPage.visit();
    });

    it('clear cart test', () => {
        cartPage.clearcart();
    });

    it('Cancel clear cart test', () => {
        cartPage.cancelClearCart();
    });

});