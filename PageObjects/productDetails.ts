import { BasePO } from "./base";

export class ProductDetailsPO extends BasePO {
    addToCard(): any {
        $("button.btn-success").click();
        browser.pause(1500); //bad practics TO DO rewrite to explicit wait please
    }
}
export const ProductDetails = new ProductDetailsPO ();
