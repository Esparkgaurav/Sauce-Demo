describe("Invalid Credentials", ()=>{
    it("Verify Error Message when Inavalid Credentials", ()=>{
        cy.fixture('user').then((user)=>{
            cy.login(user.invalidUser.username, user.invalidUser.password);
            cy.contains("Epic sadface: Username and password do not match any user in this service").should("be.visible");
        });
    });
});