describe("fixture() - Coklu Data Kullanimi", () => {
  let dataSeti;
  before(() => {
    cy.fixture("kitapyurdu2").then((veriler) => {
      dataSeti = veriler;
    });
  });
  it("Kitabyurdu - Arama kelimelerin testi", () => {
    cy.visit("https://www.kitapyurdu.com/");

    dataSeti.forEach((testData) => {
      cy.get("#search-input").type(testData.kelime);
      cy.get(".button-search").click();
      cy.get("h1").should("contain", testData.kelime);
      cy.get("#search-input").clear();
    });
  });
});
