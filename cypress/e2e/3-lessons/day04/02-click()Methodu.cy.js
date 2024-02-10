describe('Eylem(Action) Methodlari', () => {
    it('click() Metodunu kullanimi', () => {
        cy.visit('https://www.letskodeit.com/practice');

        // Elemantin merkezine tiklama
       // cy.get('#opentab').click();

        // Elemantin farkli konumlarina tiklama
        // cy.get('#opentab').click('bottomLeft');
        // cy.get('#opentab').click('left');
        // cy.get('#opentab').click('bottomRight');
        // cy.get('#opentab').click('right');
        // cy.get('#opentab').click('bottomRight');
        //  cy.get('#opentab').click('bottom');


        // Koordinat belirterek tiklama
        //cy.get('#opentab').click('-20,-20,{force:true}');

        //Birden cok elemente tiklama
        cy.get('[type="checkbox"][name="cars"]').click({multiple:true});

        // Tiklanacak elementi sayfanin istenen bolume kaydirma
        cy.get('#mousehover').click({scrollBehavior:'center'});
        
    });
});