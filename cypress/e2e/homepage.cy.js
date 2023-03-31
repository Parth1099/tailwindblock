import { COMPONENT_LIST } from "../../src/utils/constant";
import { TemplateConstant } from "../../src/utils/templateconstant";

const getComponentCard = (number) => {
  return cy.get(`[data-testid="card-${number}"]`);
};

describe("Testing home page", () => {
  beforeEach(() => {
    cy.visit(Cypress.env("WEB_URL"));
  });

  it("Test 1", () => {
    cy.contains("UI elements that are beautifully Made with Tailwind CSS");
    cy.contains("By the Infynno Solutions");
    cy.contains("Components").click();
    cy.wait(500);
    for (let index = 0; index < COMPONENT_LIST?.length; index++) {
      getComponentCard(index).click();
      cy.wait(5000);
      cy.contains("404").should("not.exist");
      cy.contains("This page could not be found.").should("not.exist");
      cy.wait(5000);
      cy.get(`[data-testid="preview"]`).invoke("removeAttr", "target").click();
      cy.wait(5000);
      cy.contains("404").should("not.exist");
      cy.contains("This page could not be found.").should("not.exist");
      cy.go("back");
      cy.wait(5000);
      cy.go("back");
    }
    cy.contains("Templates").click();
    cy.wait(500);
    cy.contains("Templates");
    for (let index = 0; index < TemplateConstant?.length; index++) {
      getComponentCard(index).click();
      cy.wait(5000);
      cy.contains("404").should("not.exist");
      cy.contains("This page could not be found.").should("not.exist");
      cy.wait(5000);
      cy.get(`[data-testid="preview"]`).invoke("removeAttr", "target").click();
      cy.wait(5000);
      cy.contains("404").should("not.exist");
      cy.contains("This page could not be found.").should("not.exist");
      cy.go("back");
      cy.wait(5000);
      cy.go("back");
    }
  });
});
