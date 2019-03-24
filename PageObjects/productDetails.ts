import { BasePO } from "./base";
import { expect } from "chai";

export class ProductDetailsPO extends BasePO {
  addToCardOneItem(): any {
    const quantityItmBeforeAddToCard = Number($("span.quantity").getText());
    const quantitySumBeforeAddToCard = Number(
      $("span.formatted_value")
        .getText()
        .slice(1)
    );
    $("button.btn-success").click();
    browser.pause(4000) //fix this with waitUntil
    const quantityItmAftAddToCard = Number($("span.quantity").getText());
    const quantitySumAftAddToCard = Number(
      $("span.formatted_value")
        .getText()
        .slice(1)
    );
    browser.waitUntil(
      function() {
        return Number($("span.quantity").getText()) == Number($("span.quantity").getText()) + 1;
      },
      5000,
      "Wrong quantity is not exchanged"
    );
    browser.waitUntil(
      function() {
        return (
          quantitySumAftAddToCard ==
          quantitySumBeforeAddToCard + quantitySumAftAddToCard
        );
      },
      5000,
      "Wrong sum is not exchanged"
    );
  }
}
export const ProductDetails = new ProductDetailsPO();
