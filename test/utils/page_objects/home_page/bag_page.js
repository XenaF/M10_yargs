const BasePage = require('../base_page/base_page');
const Element = require('../base_elements/base_element');
const logger = require('../../../config/logger.config');

class BagPage extends BasePage {
    constructor() {
        super();
        this.url = 'https://www.dsw.com/en/us/shopping-bag';
        this.bagPageTitle = new Element('className', 'title3 checkout-banner__title');
        this.productDetails = new Element('className', 'product-module__details');
        this.payPalButton = new Element('xpath', '//*[@id="mainContainer"]/app-cart-checkout-routing/div/app-shopping-bag/div/div/div/div[3]/div/app-paypal-express-button/button');
    };

    async open() {
        await super.open(this.url);
    }
    
    async getTitle(element) {
        const pageTitle = await super.getTitle();
        return pageTitle;
     }   
}

module.exports = BagPage;