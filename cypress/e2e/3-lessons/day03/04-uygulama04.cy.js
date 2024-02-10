/*
https://www.kitapyurdu.com sitesine git
'Üye Ol' bağlantısına tıkla
Kayıt formunda 'Ad' alanına değer yaz ve doğrula
*/

describe('Uygulama 04', () => {
    it('XPath Kullanimi', () => {
        cy.visit('https://www.kitapyurdu.com');

        cy.url().should('include','kitapyurdu');
        cy.title().should('contain','Kitapyurdu');

        cy.xpath('//a[text()="Üye Ol"]').click();
        cy.xpath('//input[@id="register-name"]').click();
        cy.xpath('//input[@id="register-name"]').type('Emina').should('have.value','Emina');
        
    });
});