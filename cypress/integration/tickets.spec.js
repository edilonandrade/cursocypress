describe("Tickets", () => {
    beforeEach(() => cy.visit("https://bit.ly/2XSuwCW"));

    it.only("fills all the text input fields", () => {
        const firstname = "Edilon";
        const lastname = "Andade";

        cy.get("#first-name").type(firstname);
        cy.get("#last-name").type(lastname);
        cy.get("#email").type("meuemail@gmail.com");
        cy.get("#requests").type("Vegetarian");
        cy.get("#signature").type(`${firstname} ${lastname}`);
    });

    it("has 'TICKETBOX' header's heading", () => {});
});