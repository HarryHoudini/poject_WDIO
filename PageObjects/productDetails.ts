import { BasePO } from "./base";

export class ProductDetailsPO extends BasePO {
   addToCardOneItem(): any {  
    let sum = $("span.formatted_value");
    let qnt = $("span.quantity");
    let productPrice = function() {
      return Number(
        $("#box-product span.price")
          .getText()
          .slice(1)
      );
    }();
    let productItm = function() {
      return Number($("#box-product .form-control").getAttribute("value"));
    }();
    $("button.btn-success").click();
    function quantityItmAft() {
      return Number(qnt.getText());
    }
    function quantitySumAft() {
      return Number(sum.getText().slice(1));
    }
    browser.waitUntil(
      function() {
        return productItm === quantityItmAft();
      },
      5000,
      "Wrong quantity is not exchanged"
    );
    browser.waitUntil(
      function() {
        return quantitySumAft() === productPrice;
      },
      5000,
      "Wrong sum is not exchanged"
    );
  }
}
export const ProductDetails = new ProductDetailsPO();
