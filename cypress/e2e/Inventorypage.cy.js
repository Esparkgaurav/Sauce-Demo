describe("Test Inventory Page", ()=>{
    it("Verify Products", ()=>{
        cy.fixture('user').then((user)=>{
            cy.login(user.standardUser.username, user.standardUser.password);
            cy.url().should("include","inventory.html");
            cy.get(".inventory_item").should("have.length.at.least", 6);
            cy.contains("Products").should("be.visible");
        })
    })
})