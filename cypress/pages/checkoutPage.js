class checkoutPage {
    enterinfo(fname, lname, zipcode){
        cy.get("#first-name").type(fname);
        cy.get("#last-name").type(lname);
        cy.get("#postal-code").type(zipcode);
    }

    clickcontinubtn(){
        cy.get("#continue").click();
    }
}

export default checkoutPage;