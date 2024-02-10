describe('CSS Selector', () => {
    it('CSS Selector ile konum belirleme', () => {
        cy.visit('https://www.kitapyurdu.com');

        //Tag Name
        cy.get('input');
       
        //id
        cy.get('#search-input');

        //Class Name ---> bir liste koymak isteigimizde kullaniriz
        cy.get('.logo-icon');

        //Atrribute Value
        cy.get('[name="search_keyword"]');

        //Class Value
        cy.get('[class="top-menu fr"]');

        //Tag Name ve Attribute Value
        cy.get('input[name="search_keyword"]');


       //Tag Name ve Multiple Attribute Value
        cy.get('input[name="search_keyword"][type="text"]');
    });
});