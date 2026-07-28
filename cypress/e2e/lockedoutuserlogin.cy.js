

describe("Locked out user login", ()=>{
    it("Verify login for locked out user", ()=>{
        cy.fixture('user').then((user)=>{
            cy.login(user.lockedOutUser.username, user.lockedOutUser.password);
            cy.contains("Epic sadface: Sorry, this user has been locked out.").should("be.visible");
        })
    })
})