/*
https://www.webdriveruniversity.com/Contact-Us/contactus.html adresini ziyaret et
İletişim Formunu doldur
"SUBMIT" butonuna tıkla
Teşekkür mesajının "Thank You for your Message!" metni olduğunu kontrol et

*/

//describe('Odev 01', () => {
    it('CSS Selector KUllanimi', () => {

       // cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html');
        //cy.get('[name="first_name"]').type('Emina');
        //cy.get('[name="last_name"]').type('Bayazitli');
        //cy.get('[name="email"]').type('eminabayazitli34@gmail.com');
        //cy.get('textarea.feedback-input').type('Hello World !!!');
       // cy.get('[type="submit"]').click();
        //cy.get('h1').should('be.visible','Thank you for your Message!');
    });
//});

describe('Odev 01', () => {
    it('CSS Selectoru Kullanimi', () => {
        cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html');

      //  cy.url().should('include','contactus'); //https://www.webdriveruniversity.com/Contact-Us/contactus.html
        cy.url().should('eq','https://www.webdriveruniversity.com/Contact-Us/contactus.html');
        
        cy.title().should('contain','WebDriver'); //WebDriver | Contact us

        cy.get('[name="first_name"]').type('Emina');
        cy.get('[name="last_name"]').type('Bayazitli');
        cy.get('[name="email"]').type('eminabayazitli34@gmail.com');
        cy.get('[name="message"]').type('Hello World !!!');
        cy.get('[type="submit"]').click();

        cy.get('h1').should('contain','Thank You'); // have.text, include, contain,be.visible
        
    });
});