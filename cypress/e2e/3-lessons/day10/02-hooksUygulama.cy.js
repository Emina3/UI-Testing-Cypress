
describe('Hooks Uygulama', () => {

beforeEach(() => {
    cy.visit('https://opensource-demo.orangehrmlive.com/');
         
       cy.fixture('orangehrm').then((loginData)=>{
        cy.get('[name="username"]').type(loginData.username);
        cy.get('[name="password"]').type(loginData.password);
       

       })

       cy.get('[type="submit"]').click();

        
    
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