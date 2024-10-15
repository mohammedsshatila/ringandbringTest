import maintenancePage from "../../pages/maintenancePage";
describe('Ring and bring Tests', () => {
    beforeEach(() => {
        cy.viewport('ipad-mini');
        maintenancePage.visit()
    });

    it('Order a maintenance test', () => {
        maintenancePage.maintenance()

    });
});