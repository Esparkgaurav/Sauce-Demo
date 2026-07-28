class checkoutoverviewPage{
    clickfinishbtn(){
        cy.get("#finish").click();
    }

    sucessmessage(){
        cy.contains("Thank you for your order!").should("be.visible");
    }
}

export default checkoutoverviewPage;