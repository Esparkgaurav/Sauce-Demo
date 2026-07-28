
import InventoryPage from "../pages/InventoryPage";
import yourcartPage from "../pages/yourcartPage";
import checkoutPage from "../pages/checkoutPage";

const inventorypage = new InventoryPage();
const yourcartpage = new yourcartPage();
const checkoutpage = new checkoutPage();

describe("Checkout Negative", ()=>{
    it("Verify negative checkout scenario", ()=>{
        cy.fixture('user').then((user)=>{
            cy.login(user.username, user.password);
            inventorypage.addproduct();
            inventorypage.clickcartbadge();
            yourcartpage.clickcheckoutbtn();
            checkoutpage.enterinfo();
            checkoutpage.clickcontinubtn();
            checkoutpage.withoutinfo();
            
        })
    })
})