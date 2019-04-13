import { Input } from "./input";
import { Dropdown } from "./dropdown";

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
    return this.container.$('input[name="postcode"]');
  });
  protected adress1: Input = new Input(() => {
    return this.container.$('input[name="address1"]');
  });
  protected adress2: Input = new Input(() => {
    return this.container.$('input[name="address2"]');
  });
  protected city: Input = new Input(() => {
    return this.container.$('input[name="city"]');
  });    
  protected email: Input = new Input(() => {
    return this.container.$('input[name="email"]');
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
    $(this.containerLocator).waitForDisplayed(undefined, false);  // wait for NOT displayed
    this.firstName.type(CustomerDetails.first);
    this.lastName.type(CustomerDetails.lastName);
    this.phone.type(CustomerDetails.phone);
    this.email.type(CustomerDetails.email);
    this.postCode.type(CustomerDetails.postCode);
    this.adress1.type(CustomerDetails.adress1);
    this.adress2.type(CustomerDetails.adress2);
    this.city.type(CustomerDetails.city)

    //Below optional fields
    if (CustomerDetails.taxID) {
      return this.taxID.type(CustomerDetails.taxID);
    }
    if (CustomerDetails.company) {
      return this.company.type(CustomerDetails.company);
    }
    if (CustomerDetails.country) {
      return this.country.selectByValueAttribute(CustomerDetails.country);
    }
    if (CustomerDetails.zone) {
      return this.country.selectByValueAttribute(CustomerDetails.zone);
    }
  }
}

export interface ICustumerDetails {
  first: string;
  lastName: string;
  phone: string;
  postCode: string;
  adress1: string;
  adress2: string;
  city: string;
  email: string;
  company?: string;
  country?: string;
  zone?: string;
  taxID?: string;
}
