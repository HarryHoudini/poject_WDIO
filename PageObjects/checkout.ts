import * as faker from "faker";
import { CustomerDetails } from "../PageObjects";
import { BasePO } from "./base";

export class CheckoutPO extends BasePO {
  public customerDetails: CustomerDetails;

  constructor() {
    super();
    this.customerDetails = new CustomerDetails(
      "#box-checkout-costomer .billing-adress"
    );
  }
  goCheckOut(): any {
    $("#cart").click();
  }
  saveChange(): void {
    const saveCustomerBtn = $('button[name="save_customer_details"]');
    browser.waitUntil(
      function() {
        return saveCustomerBtn.getAttribute("disabled") === null;
      },
      undefined,
      "Save changes button expected to become enabled to click"
    );
    saveCustomerBtn.click();
  }
  confirmOrder(): any {
    const confirmBtn = $('button[name="confirm_order"]');
    browser.waitUntil(
      function() {
        return confirmBtn.getAttribute("disabled") == null;
      },
      undefined,
      "Confirm order button expect to become enabled to click"
    );
    confirmBtn.click()
  }
}
