class performancePage {
    menuButton = "//span[text()=' FOOD ']";


    performanceTest() {
        cy.visit('https://ring-n-bring-resto-qa.web.app/#/orders?restoID=JILZq2fzSlGLjapt6o8i&table=3&tablelabel=').then(() => {
            cy.window().then((win) => {
                const loadTime = win.performance.timing.loadEventEnd - win.performance.timing.navigationStart;
                cy.log(`Page load time: ${loadTime} ms`);
                expect(loadTime).to.be.lessThan(5000);
            });

            cy.window().then((win) => {
                cy.xpath(this.menuButton).click()
                const loadTime = win.performance.timing.loadEventEnd - win.performance.timing.navigationStart;

                cy.log(`Page load time: ${loadTime} ms`);
                expect(loadTime).to.be.lessThan(5000);
            });
        })


    }

}

export default new performancePage