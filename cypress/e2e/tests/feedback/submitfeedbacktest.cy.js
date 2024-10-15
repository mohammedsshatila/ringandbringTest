import submitfeedbackPage from "../../pages/submitfeedbackPage";
describe('Ring and bring Tests', () => {
    beforeEach(() => {
        cy.viewport('ipad-mini');
        submitfeedbackPage.visit()
    });

    it('submit a feedback test', () => {
        submitfeedbackPage.submitAfeedBack()

    });
});