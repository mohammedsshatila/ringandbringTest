import negativetestPage from "../../pages/negativetestPage";
describe('Ring and bring Tests', () => {
    beforeEach(() => {
        cy.viewport('ipad-mini');
        negativetestPage.visit();
    });

    it('Negative test', () => {
        negativetestPage.negativeTest();

    });
});