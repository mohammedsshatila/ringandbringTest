import performancePage from "../../pages/performancePage";
describe('Performance Test', () => {
    beforeEach(() => {
        cy.viewport('ipad-mini');
    });
    it('should measure how much did the application take time to load', () => {
        performancePage.performanceTest();
    })
})