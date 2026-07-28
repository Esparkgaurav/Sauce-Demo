class InventoryPage {

        addproduct(){
            cy.get("#add-to-cart-sauce-labs-backpack").click();
        }

        checkcart(){
            cy.get(".shopping_cart_badge").should("have.text", "1");
        }

        removeproduct(){
            cy.get("#remove-sauce-labs-backpack").click();
        }
        
        checkremoveproduct(){
            cy.get(".shopping_cart_badge").should("not.exist");
        }

}

export default InventoryPage;