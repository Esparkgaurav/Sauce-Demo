import InventoryPage from '../pages/InventoryPage';
const inventoryPage = new InventoryPage();

describe("Add to cart", ()=>{
    it("Verify product adds successfully", ()=>{
        cy.fixture('user').then((user)=>{
            cy.login(user.standardUser.username, user.standardUser.password);
            inventoryPage.addproduct();
            inventoryPage.checkcart();
        })
    })
})