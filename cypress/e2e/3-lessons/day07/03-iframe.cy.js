describe('Iframe', () => {
    it('Iframe eklentisiyle calismak', () => {
        cy.visit('https://the-internet.herokuapp.com/iframe');

        cy.get('h3').should('have.text', 'An iFrame containing the TinyMCE WYSIWYG Editor');

        cy.frameLoaded('#mce_0_ifr'); // frameLoaded() ile sayfadaki iframe alani tamamalanir
        cy.iframe().find('p').clear(); // iframe() ile yukarida tamimlanan iframe iceisinde girilir
        cy.iframe().find('p').type('Emina');

        cy.get('h3').should('have.text', 'An iFrame containing the TinyMCE WYSIWYG Editor');


        
    });
});