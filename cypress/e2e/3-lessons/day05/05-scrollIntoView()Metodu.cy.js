describe('action methods -> scrolIntoView()', () => {
    it('scrollIntoView()', () => {
        cy.visit('https://www.webdriveruniversity.com/');

      // Hizli scroll
        cy.get('#actions').scrollIntoView();

      // Yavas scroll
        cy.get('#contact-us').scrollIntoView({duration:2000}); 

        
        
    });
});