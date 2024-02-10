/*
https://automationteststore.com adresini ziyaret et
Login ol
Login Name = techpro
Password = techpro!
"Login" butonuna tıkla
Edit account details butonuna tıkla
Formdaki dolu olan alanları temizle
*/

describe('odev-02', () => {
    it('Eylem komutlarinin kullanimi', () => {
        // Visit the website
          cy.visit("https://automationteststore.com");

       // Login
          cy.contains("Login or register").click();

          cy.get('#loginFrm').within(()=>{
             cy.get('#loginFrm_loginname').type('techpro');
             cy.get('#loginFrm_password').type('techpro!');
             cy.get('button').click();
          }); 

          // Click on "Edit account details"
             cy.get('[data-original-title="Edit account details"]').click();

         // Clear filled fields in the form and fill it out
            cy.get('#AccountFrm_firstname').clear().type("Emina");
            cy.get('#AccountFrm_lastname').clear().type("Bayazitli");
           
            cy.get('[title="Continue"]').click();

            cy.get('.alert-success').should('contain', 'successfully updated');
        
    });
});