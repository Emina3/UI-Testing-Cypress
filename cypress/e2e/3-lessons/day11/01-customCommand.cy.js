describe('Custom Command', () => {
    it('Magento - Arama motoru testi', () => {
        cy.visit('https://magento.softwaretestingboard.com/');
        
        cy.magentoArama('shoes')
        
    });
});