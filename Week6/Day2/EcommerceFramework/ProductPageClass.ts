import { BasePage } from "./BasepageAbstract";

class ProductPage extends BasePage implements PageRules{
    
    verifypage(): void {
        
        console.log('Product Page Verified');
        
    }

    searchProduct(){

        console.log('Product Searched successfully');
        
    }

    addTocart(){

        console.log('Product added to cart successfully');
        
    }





}