import { Input } from "./input";

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
//   protected country: Dropdown = new Dropdown(() => {
//     return this.container.$('input[name="country_code"]');
//   });
 

  constructor(containerLocator: string) {
    this.containerLocator = containerLocator;
  }
  enterCoustumerDetails(CustomerDetails: ICustumerDetails) {

  }
 
}

interface ICustumerDetails {
    first: string; 
    lastName: string
}