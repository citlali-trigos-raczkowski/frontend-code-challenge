// https://docs.cypress.io/api/introduction/api.html

describe("Pokedex", () => {
  it("Visits the app root url", () => {
    cy.visit("/");
    cy.contains("h1", "Who's That Pokemon");
  });

  it("Search bar is accessible and filters results as expected", () => {
    cy.visit("/");
    cy.get("[data-cy=search-bar]").type("pid");
    cy.get("[data-cy=gallery-tiles]").should("have.length", 4);
    cy.get("[data-cy=gallery-tiles]").first().contains("Pidgey");
  });

  it("View toggle is accessible and changes view to a list", () => {
    cy.get("[data-cy=toggle-to-list]").click();
    cy.get("[data-cy=gallery-list]").should("have.length", 4);
    cy.get("[data-cy=gallery-list]").first().contains("Pidgey");
  });

  it("View toggle updates when clicked to display gallery again", () => {
    cy.get("[data-cy=toggle-to-tiles]").click();
    cy.get("[data-cy=gallery-tiles]").should("have.length", 4);
  });

  it("Filter Dropdown is accessible and filters results as expected", () => {
    cy.get("[data-cy=filter-dropdown]").parent().click();
    cy.get(".v-menu__content").contains("Fire").click();
    cy.get("[data-cy=gallery-tiles]").should("have.length", 1);
    cy.get("[data-cy=gallery-tiles]").first().contains("Rapidash");
  });

  it("Pokemons can be favorited and unfavorited and alerts are displayed", () => {
    cy.get("[data-cy=toggle-pokemon-favorite]").click();
    cy.get("[data-cy=favorite-alert]").contains(
      "Successfully favorited Rapidash"
    );

    cy.get("[data-cy=toggle-pokemon-favorite]").click();
    cy.get("[data-cy=favorite-alert]").contains(
      "Successfully unfavorited Rapidash"
    );
  });

  it("Favorites tab is accessible and filters results as expected", () => {
    cy.get("[data-cy=view-favorites-tab]").click();
    cy.get("[data-cy=gallery-tiles]").should("have.length", 0);
  });

  it("All tab is accessible and filters results as expected", () => {
    cy.get("[data-cy=view-all-tab]").click();
    cy.get("[data-cy=gallery-tiles]").should("have.length", 1);
  });

  it("When Pokemon is selected, url changes", () => {
    cy.get("[data-cy=gallery-tiles]").first().contains("Rapidash");
    cy.get("[data-cy=view-pokemon-link]").click({ force: true });
    cy.location("pathname").should("eq", "/Rapidash");
  });

  it("Pokemons view loads as expected", () => {
    cy.contains("h1", "Rapidash");
  });

  // remove later
  // it("Navigating to unknown url opens not found page", () => {
  //   cy.visit("/abcde");
  //   cy.location('pathname').should('eq', "/not-found")
  //   cy.contains("h2", "That page was not found");
  // });

  it("Not Found page includes link home", () => {
    cy.visit("/not-found");
    cy.get("[data-cy=return-home-link]").click();
    cy.location("pathname").should("eq", "/");
  });
});
