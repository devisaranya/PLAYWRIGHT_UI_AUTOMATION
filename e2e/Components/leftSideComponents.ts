import { Page } from "@playwright/test";

export class LeftSideComponents{
   private readonly page:Page;

   constructor(page:Page){
    this.page=page;
   }

    async selectleftComponenent(menuname:string){
        await this.page.getByRole('link',{name:menuname}).click();
    }

}