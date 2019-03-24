export class BasePO {
 isLoaded(){
   throw new Error ("isLoaded method is not implement")
 }
 
  open(url: string) {
    console.log("Navigation to:", url);
    browser.url(url);
  }
}
