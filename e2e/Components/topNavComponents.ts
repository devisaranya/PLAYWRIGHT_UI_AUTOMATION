import { Page } from "@playwright/test";

export class TopNavComponents{
   private readonly page:Page;

   constructor(page:Page){
    this.page=page;
   }

    async selecttopComponenent(menuname:string){
        await this.page.getByRole('link',{name: menuname }).click();
    }

}