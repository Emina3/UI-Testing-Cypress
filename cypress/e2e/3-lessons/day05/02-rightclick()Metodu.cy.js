describe('Dbclick() Medodun Kullanimi', () => {
    it('dbclick() Metodun kullanimi', () => {
        // Praktik yapan sitelere demoqa gibi kullanabilmek icin
        cy.on('uncaught:exception',(err,runnable)=>{return false});

        cy.visit('https://demoqa.com/buttons');

        cy.get('#rightClickBtn').rightclick();
        cy.get('#rightClickMessage').should('be.visible').and('exist').and('have.text','You have done a right click');
    });
});