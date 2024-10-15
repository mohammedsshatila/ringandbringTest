class calculationPage {
    calculationFormula() {
        cy.xpath("//span[@class='H1MediumDark customPrice w-22']").invoke('text').then((itemnumber) => {
            // const numone = parseFloat(itemnumber)
            cy.log(itemnumber)
            cy.xpath("//span[@class='H3RegularDark customPrice']").invoke('text').then((price) => {
                const endprice = price.replace(/[^0-9.-]+/g, '');
                cy.log(endprice)
                const total = itemnumber * endprice
                cy.log(total)
                cy.get('.largeButton').click()
                cy.get('.cartDiv').click()
                cy.xpath("//span[@class='H2RegularBrown bold']").contains(itemnumber)
                cy.xpath("//div[@class='H2Regular bold customPrice']").contains(total)

            })
        })
    }
}

export default new calculationPage