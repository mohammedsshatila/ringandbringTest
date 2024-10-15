import hookahandwaiterPage from "../../pages/hookahandwaiterPage";
describe('Ring and bring Tests', () => {
    beforeEach(() => {
        cy.viewport('ipad-mini');
        hookahandwaiterPage.visit()
    });

    it('Order from hookah menu and waiter menu tests', () => {
        hookahandwaiterPage.hookahandwaiter()


    });
});