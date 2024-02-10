describe('Ekran goruntusu alma', () => {
    it('Bir elementin veya web sayfasinin ekran goruntusu alma', () => {
        cy.visit('https://www.webdriveruniversity.com/');
       // cy.screenshot();

        cy.get('#login-portal').invoke('removeAttr','target').click();
        cy.wait(2000);
        cy.get('.form').screenshot().find('#text').type('Emina');
        cy.get('.form').screenshot();
        
    });
});