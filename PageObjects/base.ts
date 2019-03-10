export class BasePO {
  open(url: string) {
    console.log("Navigation to:", url);
    browser.url(url);
  }
}
