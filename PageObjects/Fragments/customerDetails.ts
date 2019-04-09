import { Input } from "../index";
import { Dropdown } from "../index";

export class CustomerDetails {
  protected containerLocator: string;
  protected get container() {
    return $(this.containerLocator);
  }
  protected lastName: Input = new Input(() => {
    return this.container.$('input[name="lastname"');
  });
  protected firstName: Input = new Input(() => {
    return this.container.$('input[name="firstname"]');
  });
  protected phone: Input = new Input(() => {
    return this.container.$('input[name="phone"]');
  });
  protected postCode: Input = new Input(() => {
    return this.container.$('input[name="email"]');
  });
  protected adress1: Input = new Input(() => {
    return this.container.$('input[name="adress1"]');
  });
  protected adress2: Input = new Input(() => {
    return this.container.$('input[name="adress2"]');
  });
  protected taxID: Input = new Input(() => {
    return this.container.$('input[name="tax_id"]');
  });
  protected company: Input = new Input(() => {
    return this.container.$('input[name="company"]');
  }); 
  protected country: Dropdown = new Dropdown(() => {
    return this.container.$('select[name="country_code"]');
  });
  protected zone: Dropdown = new Dropdown(() => {
    return this.container.$('select[name="zone_code"]');
  });
 

  constructor(containerLocator: string) {
    this.containerLocator = containerLocator;
  }
  enterCoustumerDetails(CustomerDetails: ICustumerDetails) {
    $('.loader-wrapper').waitForDisplayed(undefined, true) // wait for NOT displayed
    this.firstName.type(CustomerDetails.first)
    this.lastName.type(CustomerDetails.lastName)
  }
 
}

interface ICustumerDetails {
    first: string; 
    lastName: string
}