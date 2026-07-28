import InventoryPage from '../pages/InventoryPage';
const inventoryPage = new InventoryPage();

describe("Remove Products from carts", ()=>{
    it("Verify product remove sucessfully", ()=>{
        cy.fixture('user').then((user)=>{
            cy.login(user.username, user.password);
            inventoryPage.addproduct();
            inventoryPage.checkcart();
            inventoryPage.removeproduct();
            inventoryPage.checkremoveproduct();

        })
    })
})