const { Runnable } = require("mocha");


describe('Action Methods', () => {
    it('type() ve clear() metodlarin kullanimi', () => {

        // Praktik yapan sitelere demoqa gibi kullanabilmek icin
        // cy.on('uncaught:exception',(err,Runnable)=>{
        //     return false;
        // })
        cy.visit('https://www.letskodeit.com/practice');

       // normal sekilde metin ekleme 
     //   cy.get('#enabled-example-input').type('Techpro');

     // Option ile kullanma
     // Force
      cy.get('#disabled-button').click();
      cy.get('#enabled-example-input').type('Techpro',{force:true});
      cy.wait(3000); 
      cy.get('#enabled-example-input').clear({force:true}); 
     
    // Sequence
  //  cy.get('#enabled-example-input').type('Techpro{selectAll},{backspace}',{delay:1000});
         
    });

   
        it.only('Arama motorunds sequence kullanimi', () => {
            cy.visit('https://www.kitapyurdu.com/');

            cy.get('#search-input').type('Cypress{enter}');
            
        });
    });
