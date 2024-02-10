describe('Dbclick() Medodun Kullanimi', () => {
    it('dbclick() Metodun kullanimi', () => {
        // Praktik yapan sitelere demoqa gibi kullanabilmek icin
        cy.on('uncaught:exception',(err,Runnable)=>{
            return false;
        });

        cy.visit('https://demoqa.com/buttons');

        cy.get('#doubleClickBtn').dblclick();
        cy.get('#doubleClickMessage').should('be.visible').and('exist').and('have.text','You have done a double click');
    });
});