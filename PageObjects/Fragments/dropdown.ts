import { BaseFragment } from "../index";
export class Dropdown extends BaseFragment {
  selectByAttribute(value: string) {
    this.container.waitForDisplayed(5000);
    console.log(
      "Selecting dropdown option",
      this.container["selector"],
      " by value ",
      value
    );
    this.container.selectByAttribute("value", value);
  }
}
