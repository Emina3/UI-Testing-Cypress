describe('Action methods - select()', () => {
    it('select() medodunu kullanimi', () => {
        cy.visit("https://www.letskodeit.com/practice");

        // Metin ile secim yapma
        cy.get('#carselect').select('Benz');

         // Value ile secim yapma
         cy.get('#carselect').select('honda');

         // Index ile secim yapma
         cy.get('#carselect').select(0);
         cy.wait(2000);

         // Secili olani bulma
         cy.get('#carselect option:selected').should('have.text','BMW');
         
         // Metin ile coklu secim yapma
          cy.get('#multiple-select-example').select(['Apple','Orange']);

          // Index  ile coklu secim yapma
          cy.get('#multiple-select-example').select([1,2]);
        
    });
});