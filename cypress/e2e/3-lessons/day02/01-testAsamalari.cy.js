// describe() and it() mocha'dan geliyor
// expect() and should() chai den geliyor
describe('Test Aşamaları', () => {
    it('Temel Komutlar', () => {
        cy.visit('https://www.kitapyurdu.com') // Given
        cy.contains('Üye Ol').click() // When
        cy.url().should('contain', 'account/register') // Then
    });
});