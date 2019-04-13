import { expect } from "chai";
export class ConfirmationPO {
  private titleText: string = '#box-order-success .title'
    isLoaded() {
    try {
      $(this.titleText).waitForDisplayed(
        7000,
        false,
        "Order is NOT completed"
      );
    } catch (err) {
      return false;
    }
  }
  get conformationTitle(): string {
   $(this.titleText).waitForDisplayed()
   return $(this.titleText).getText();     
  }
  
}
export const Confirmation = new ConfirmationPO();
