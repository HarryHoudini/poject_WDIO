import { BasePO } from "./base";

export class ProductDetailsPO extends BasePO {
  addToCardOneItem(): any {
    let sum = $("span.formatted_value");
    let qnt = $("span.quantity");
    let counter = 0;
    let getCartItmBef = (function(): number {
      return Number(qnt.getText());
    })();
    let getCartSumBef = (function(): number {
      return Number(sum.getText().slice(1));
    })();
    let productPrice = (function(): number {
      return Number(
        $("#box-product span.price")
          .getText()
          .slice(1)
      );
    })();
    let productItm = (function(): number {
      return Number($("#box-product .form-control").getAttribute("value"));
    })();
    function countClickAddCart(calling: number) {
      for (let doIt = 1; doIt <= calling; doIt++) {
        $("button.btn-success").click();
        counter = doIt;
      }
      return counter;
    }
    let addNumber: number = countClickAddCart(3);
    let getItmAft = function(): number {
      return Number(qnt.getText());
    };
    let getSumAft = function(): number {
      return Number(sum.getText().slice(1));
    };

    browser.waitUntil(
      function() {
        return productItm * addNumber + getCartItmBef === getItmAft();
      },
      5000,
      "Wrong quantity is not exchanged"
    );
    browser.waitUntil(
      function() {
        return productPrice * addNumber + getCartSumBef === getSumAft();
      },
      5000,
      "Wrong sum is not exchanged"
    );
  }
}
export const ProductDetails = new ProductDetailsPO();
