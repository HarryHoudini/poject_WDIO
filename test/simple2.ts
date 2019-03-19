import * as faker from "faker";
import {expect} from "chai";
describe("Registration", function() {
  it("Should be successful", async () => {
    browser.url("/create_account");
    $('input[name="firstname"]').setValue("TestFirstname");
    $('input[name="lastname"]').setValue("TestLastname");
    $('[name="customer_form"] select[name="country_code"]').selectByAttribute('value', 'UA');
    const email = faker.internet.email(undefined, undefined, "testdomainpinup.cf");
    console.log("Email will be used", email);
    $('[name="customer_form"] input[name="email"]').click();
    
    $('[name="customer_form"] input[name="email"]').setValue(email);
    $('input[name="phone"]').setValue("+79444112233");
    $('[name="customer_form"] input[name="password"]').setValue("123123");
    $('button[name="create_account"]').click();
    browser.pause(20000);
    // const text = $('.alert.alert-success').getText();
    // expect(text).to.contain('You customer account has been created.')
  });
});
