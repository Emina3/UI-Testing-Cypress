
describe('Listelerle Calismak', () => {
    it.only('Kitab yurdu - each() e wrap() metotlarinin kullanimi', () => {
        cy.visit('https://kitapyurdu.com/');
        
        cy.get('.bestseller-cr').find(' .name').each(($kitap, index)=>{
            cy.log((index+1) + "-" +$kitap.text());
            cy.wrap($kitap)
            .should('be.visible');
        });

        it('Tool Shop - each() ve wrap() metotlarinin kullanimi', () => {
            cy.visit('https://practicesoftwaretesting.com/#/');
            cy.get('.col-md-9').find('.card-title').each(($urun) => {
                cy.log($urun.text());
                cy.wrap($urun)
                .invoke('text')
                .should('exist').and('have.length.gte',3);
            });

    });
});
});