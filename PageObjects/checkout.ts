import { BasePO } from "./base";
import * as faker from "faker";

export class CheckoutPO {
  goCheckOut(): any {
    $("#cart").click();
  }

  enterCustomerDetails({
    firstname = "ff",
    lastname = "ff",
    city = "cityTown",
    postcode = "345624"
  }): any {
    $('input[name="firstname"]').setValue(firstname);
    $('input[name="lastname"]').setValue(lastname);
    $('input[name="city"]').setValue(city);
    $('input[name="postcode"]').setValue(postcode);
    $('input[name="address1"]').setValue(faker.address.streetAddress());
    $('[name="email"]').setValue(faker.internet.email());
    $('[name="phone"]').setValue(faker.phone.phoneNumberFormat());
  }
}
