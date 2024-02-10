describe('Temel Test Fonksiyonlari', () => {
    it('visit(),get(),click(),type(),should() fonksiyonlarinin kullanimi', () => {
        cy.visit('URL');
        // visit() fonksiyonu bir URL'i ziyaret etmek icin kullanilir

        cy.get('locator').should('be.visible').click();
        // get() bir yada birden cok elementi secmek icin kullanilir
        // click() belirli bir elemente tilamak icin
        
        cy.get('locator').should('Dogrulayici','').type('Metin').should('Dogrulayici','Dogrulanacak Metin');
        // type() belirli inputa veya textarea alanina veri girmek icin kullanilir
        // should() belirli bir kosulu dogrulamak icin kullanilir
    });
});