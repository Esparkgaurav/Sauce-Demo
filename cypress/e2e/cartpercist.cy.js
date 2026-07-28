import InventoryPage from "../pages/InventoryPage";

const inventorypage = new InventoryPage();

describe("Cart Percist", ()=>{
    it("Verify cart should be percist after logout", ()=>{
        cy.fixture('user').then((user)=>{
            cy.login(user.standardUser.username, user.standardUser.password);
            inventorypage.addproduct();
            inventorypage.clicklogoutbtn();
            cy.login(user.standardUser.username, user.standardUser.password);
            inventorypage.checkremoveproduct();
            
        })
    })
})