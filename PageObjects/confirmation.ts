import { expect } from "chai";
export class ConfirmationPO {
  orderSuccessCreate() {
    $("#box-order-success>.title").waitForDisplayed(
      7000,
      false,
      "Order is completed"
    );
    const conformationText = $("#box-order-success>.title").getText();
    expect(conformationText).to.match(
      /Your order #[1-9]{1,3} is successfully completed!/
    );
  }
}
export const Confirmation = new ConfirmationPO () 
