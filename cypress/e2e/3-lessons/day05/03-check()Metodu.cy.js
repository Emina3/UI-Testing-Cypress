describe("ceck() Metodu", () => {
  it("check() medodun kullanimi", () => {
    cy.visit("https://www.letskodeit.com/practice");

    // CHECKBOX
    // Tumunu isaretle
    cy.get('[type="checkbox"][name="cars"]').check().should("be.checked");

    // Tumunu isaretini kaldir
    cy.get('[type="checkbox"][name="cars"]').uncheck().should("not.be.checked");

    // Ilkini sec
    cy.get('[type="checkbox"][name="cars"]').first().check();

    // Value ile secme
    cy.get('[type="checkbox"][name="cars"]').check("benz");

    // Value ile secini kaldir
    cy.get('[type="checkbox"][name="cars"]').uncheck("benz");

    // Birden fazla secimi yapma
    cy.get('[type="checkbox"][name="cars"]').check(["benz", "honda"]);

    // Birden fazla secimi kaldirma
    cy.get('[type="checkbox"][name="cars"]').uncheck(["benz", "honda", "bmw"]);

    //RADIO BUTTONS
    cy.get('[type="radio"][name="cars"]').check();

    // Value ile secme
    cy.get('[type="radio"][name="cars"]').check("benz");

    // Radio buttonlarda uncheck() metodu kullanamyiz
    cy.get('[type="radio"][name="cars"]').uncheck("benz");
  });
});
