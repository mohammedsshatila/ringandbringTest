import valetPage from "../../pages/valetPage";
describe('Ring and bring Tests', () => {
    beforeEach(() => {
        cy.viewport('ipad-mini');
        valetPage.visit();
    });

    it('Order valet test', () => {
        valetPage.valet();

    });
});