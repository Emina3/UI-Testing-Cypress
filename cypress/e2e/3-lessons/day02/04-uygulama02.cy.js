describe('test uygulama 02', () => {
    it('Temel Fonksiyonlarin Kullanimi', () => {

        cy.visit('https://www.amazon.com');
        cy.get('#twotabsearchtextbox').type('iphone');
       cy.get('#nav-search-submit-button').click();
       cy.get('.a-color-state').should('contain','iphone');
    });
});