import InventoryPage from '../pages/InventoryPage';
import yourcartPage from '../pages/yourcartPage';
import checkoutPage from '../pages/checkoutPage';
import checkoutoverviewPage from '../pages/checkoutoverviewPage';

const inventorypage = new InventoryPage();
const yourcartpage = new yourcartPage();
const checkoutpage = new checkoutPage();
const checkoutreviewpage = new checkoutoverviewPage();

describe("Checkout Page", ()=> {
    it("Verify checkout sucessful", ()=>{
        cy.fixture('user').then((user)=>{
            cy.login(user.standardUser.username, user.standardUser.password);
            inventorypage.addproduct();
            inventorypage.clickcartbadge();
            yourcartpage.clickcheckoutbtn();
            checkoutpage.enterinfo("Gaurav", "Sonar", "123456");
            checkoutpage.clickcontinubtn();
            checkoutreviewpage.clickfinishbtn();
            checkoutreviewpage.sucessmessage();
        })
    })
})