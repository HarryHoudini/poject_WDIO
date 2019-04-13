import { expect } from "chai";
import * as faker from "faker";
import { ProductDetails, Checkout, Confirmation } from "../PageObjects";

describe("Guest", function() {
  it("should be able to buy item", function() {
    ProductDetails.open("/rubber-ducks-c-1/red-duck-p-3");
    ProductDetails.addToCardOneItem();
    Checkout.goCheckOut();
    Checkout.customerDetails.enterCoustumerDetails({
      first: "First Name",
      lastName: "Last name",
      adress1: "Adress 1",
      adress2: "Adress 2",
      city: "CityName",
      postCode: "105043",
      email: faker.internet.email(),
      phone: faker.phone.phoneNumberFormat(),
      taxID: "12345"
    });
    Checkout.saveChange();
    Checkout.confirmOrder();
    Confirmation.isLoaded();
    expect(Confirmation.conformationTitle).to.match(
      /Your order #[1-9]{1,3} is successfully completed!/
    );
  });
});
