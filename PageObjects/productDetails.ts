import { BasePO } from "./base";

export class ProductDetailsPO extends BasePO {
  addToCardOneItem(): any {
    let quantityItmBeforeAddToCard = Number($("span.quantity").getText());
    let quantitySumBeforeAddToCard = Number(
      $("span.formatted_value")
        .getText()
        .slice(1)
    );
    $("button.btn-success").click();

    let quantityItmAftAddToCard = Number($("span.quantity").getText());
    let quantitySumAftAddToCard = Number(
      $("span.formatted_value")
        .getText()
        .slice(1)
    );
    browser.waitUntil(
      function() {
        return quantityItmBeforeAddToCard + 1 === quantityItmAftAddToCard;
      },
      5000,
      "Wrong quantity is not exchanged"
    );
    browser.waitUntil(
      function() {
        return (
          quantitySumAftAddToCard ===
          quantitySumBeforeAddToCard + quantitySumAftAddToCard
        );
      },
      5000,
      "Wrong sum is not exchanged"
    );
  }
}
export const ProductDetails = new ProductDetailsPO();
