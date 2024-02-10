/*
https://automationteststore.com adresini ziyaret et
Login ol
Login Name = techpro
Password = techpro!
"Login" butonuna tıkla
Edit account details butonuna tıkla
Formdaki dolu olan alanları temizle
*/

// Cypress test script
describe("Automation Test Store Login and Edit Account Details", () => {
  it("Should login and clear account details", () => {
    // Visit the website
    cy.visit("https://automationteststore.com");

    // Login
    cy.contains("Login or register").click();
    cy.get("#loginFrm_loginname").click();
    cy.get("#loginFrm_loginname").type("techpro");
    cy.get("#loginFrm_password").type("techpro!");
    // cy.get('[type="submit"]').click({multiple:true});
    cy.get('[title="Login"]').click();

    

    // Wait for the login to complete, you may need to adjust the timing
    cy.wait(2000);

    // Click on "Edit account details"
    cy.get('[data-original-title="Edit account details"]').click();

    // Clear filled fields in the form and fill it out
    cy.get('[name="firstname"]').clear().type("Emina");
    cy.get('[name="lastname"]').clear().type("Bayazitli");
    cy.get('[name="email"]').clear();
    cy.get('#AccountFrm_email').type('emina@gmail.com',{force:true});
     
     cy.get('[title="Continue"]').click();
  
  });
});
