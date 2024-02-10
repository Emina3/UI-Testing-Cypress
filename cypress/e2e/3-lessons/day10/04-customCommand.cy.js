describe('Custom Command', () => {
    beforeEach(() => {
        cy.visit('https://magento.softwaretestingboard.com/');  
    });
    it('Magento - Gecerli verierle login olma testi', () => {
       cy.magentoLogin('aedyn.kewon@fixedfor.com','*9kJceG5*TSWXhb')     
    });

    it('Magento - Gecersiz kullanici adi ile login olma testi', () => {
        cy.magentoLogin('aedyn','*9kJceG5*TSWXhb')
    });

    it('Magento - Gecersiz kullanici adi ve sifre  ile login olma testi', () => {
        cy.magentoLogin('aedyn','*9kJceG5*')        
    });
});