import InventoryPage from '../pages/InventoryPage';
const inventoryPage = new InventoryPage();

describe("Remove Products from carts", ()=>{
    it("Verify product remove sucessfully", ()=>{
        cy.fixture('user').then((user)=>{
            cy.login(user.standardUser.username, user.standardUser.password);
            inventoryPage.addproduct();
            inventoryPage.checkcart();
            inventoryPage.removeproduct();
            inventoryPage.checkcart();

        })
    })
})