describe("Tickets", () => {
    beforeEach(() => cy.visit("https://bit.ly/2XSuwCW"));

    it("fills all the text input fields", () => {
        const firstname = "Edilon";
        const lastname = "Andade";

        cy.get("#first-name").type(firstname);
        cy.get("#last-name").type(lastname);
        cy.get("#email").type("meuemail@gmail.com");
        cy.get("#requests").type("Vegetarian");
        cy.get("#signature").type(`${firstname} ${lastname}`);
    });

    it.only("select two tickets", () => {
        cy.get("#ticket-quantity").select("2");
    });

    it("has 'TICKETBOX' header's heading", () => {});
});