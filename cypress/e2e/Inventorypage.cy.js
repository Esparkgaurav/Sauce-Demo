describe("Test Inventory Page", ()=>{
    it("Verify Products", ()=>{
        cy.fixture('user').then((user)=>{
            cy.login(user.username, user.password);
            cy.url().should("include","inventory.html");
            cy.get(".inventory_item").should("have.length.at.least", 6);
            cy.contains("India").should("be.visible");
        })
    })
})