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

        clickcartbadge(){
            cy.get(".shopping_cart_link").click();
        }

        clicklogoutbtn(){
            cy.get("#react-burger-menu-btn").click();
            cy.get("#logout_sidebar_link").click();
        }

}

export default InventoryPage;