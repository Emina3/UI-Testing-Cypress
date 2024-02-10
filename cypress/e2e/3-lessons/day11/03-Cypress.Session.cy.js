describe('Cypress Session', () => {

    beforeEach(() => {
        cy.orangehrmSessionLogin('Admin','admin123')
              
        cy.visit('https://opensource-demo.orangehrmlive.com/');
               
    });
        
        it('Sitede admin Paneline girme tesi', () => {
               
            cy.contains('Admin').click();
            cy.get('.oxd-topbar-header-breadcrumb').should('contain','Admin');
        });
    
        it('Sitede PIM Paneline girme tesi', () => {
              
            cy.contains('PIM').click();
            cy.get('.oxd-topbar-header-breadcrumb').should('contain','PIM');
        });
        
        it('Sitede Recriutment Paneline girme tesi', () => {
        
            cy.contains('Recruitment').click();
            cy.get('.oxd-topbar-header-breadcrumb').should('contain','Recruitment');
        });
    
    });