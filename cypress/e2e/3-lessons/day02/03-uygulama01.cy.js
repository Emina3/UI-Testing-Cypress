/*
https://www.kitapyurdu.com sitesine git
'Üye Ol' bağlantısına tıkla
Kayıt formunda 'Ad' alanına bir isim yaz ve doğrula
*/

describe('Uygulama-01', () => {
    it('Temel Fonksiyonlarin Kullanimi', () => {

        cy.visit('https://www.kitapyurdu.com');
        cy.get('.register > a').click();
        cy.get('#register-name').type('Emina').should('have.value','Emina');
        cy.get('#register-lastname').type('Bayazitli').should('have.value','Bayazitli');
        
    });
});