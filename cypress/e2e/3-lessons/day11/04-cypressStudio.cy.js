describe('Cypress Studio', () => {
    it('Cypress Studio Kullanimi', () => {
        /* ==== Generated with Cypress Studio ==== */
        cy.visit('https://practicesoftwaretesting.com/#');
        cy.get('[data-test="nav-categories"]').click();
        cy.get('[data-test="nav-hand-tools"]').click();
        cy.get('[data-test="product-01HNK0NT56PF03YX7AMF28SW6V"] > .card-img-wrapper > .card-img-top').click();
        cy.get('[data-test="increase-quantity"] > .fa').click();
        cy.get('[data-test="increase-quantity"] > .fa').click();
        cy.get('[data-test="increase-quantity"] > .fa').click();
        cy.get('[data-test="increase-quantity"] > .fa').click();
        cy.get('[data-test="increase-quantity"] > .fa').click();
        cy.get('[data-test="increase-quantity"] > .fa').click();
        /* ==== End Cypress Studio ==== */
    });

    /* ==== Test Created with Cypress Studio ==== */
    it('Cypress Studio Kullanimi -2', function() {
        /* ==== Generated with Cypress Studio ==== */
        cy.visit('https://practicesoftwaretesting.com/#');
        cy.get('[data-test="search-query"]').clear('p');
        cy.get('[data-test="search-query"]').type('pliers{enter}');
        cy.get('[data-test="search-submit"]').click();
        cy.get('[data-test="search-submit"]').click();
        cy.get('[data-test="search-query"]').clear('p');
        cy.get('[data-test="search-query"]').type('pliers');
        cy.get('[data-test="search-submit"]').click();
      
        cy.get(':nth-child(13) > ul > :nth-child(3) > label').click();
        cy.get('[data-test="category-01HNK0NT4MSPTDWZZ9D9ZXSKEC"]').check();
        cy.get(':nth-child(14) > ul > :nth-child(4) > label').click();
        cy.get('[data-test="category-01HNK0NT4MSPTDWZZ9D9ZXSKEM"]').check();
        cy.get(':nth-child(15) > ul > :nth-child(4) > label').click();
        cy.get('[data-test="category-01HNK0NT4N69F7T235XV950VXG"]').check();
        cy.get(':nth-child(15) > ul > :nth-child(4) > label').click();
        cy.get('[data-test="category-01HNK0NT4N69F7T235XV950VXG"]').uncheck();
        cy.get('[data-test="category-01HNK0NT4MSPTDWZZ9D9ZXSKEM"]').uncheck();
        cy.get('[data-test="category-01HNK0NT4MSPTDWZZ9D9ZXSKEC"]').uncheck();
        /* ==== End Cypress Studio ==== */
    });
});