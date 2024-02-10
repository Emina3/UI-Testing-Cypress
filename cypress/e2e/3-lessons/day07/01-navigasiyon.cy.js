describe('Navigasyon', () => {
    it("Browser'da Ileri ve Yenileme butonlarinin kullanimi", () => {
        cy.visit('https://www.webdriveruniversity.com/');
        cy.url().should('include','https://www.webdriveruniversity.com/');
        cy.get('#contact-us').invoke('removeAttr','target').click();
        cy.url().should('include','https://www.webdriveruniversity.com/');

        cy.go('back');
        cy.url().should('include','https://www.webdriveruniversity.com/');

        cy.go('forward');
        cy.url().should('include','https://www.webdriveruniversity.com/');

        cy.go(-1);
        cy.url().should('include','https://www.webdriveruniversity.com/');

        cy.go(1);
        cy.url().should('include','https://www.webdriveruniversity.com/');

        cy.reload();
        cy.reload(true); // bellekteki verileri kullanmadan yinileme yapar
        
        
    });
});