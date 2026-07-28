describe("Invalid Credentials", ()=>{
    it("Verify Error Message when Inavalid Credentials", ()=>{
        cy.fixture('invalidUser').then((invalidUser)=>{
            cy.login(invalidUser.invalidUser.username, invalidUser.invalidUser.password);
            cy.contains("Epic sadface: Username and password do not match any user in this service").should("be.visible");
        });
    });
});