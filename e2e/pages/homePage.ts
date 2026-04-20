import {Page} from '@playwright/test'
import {LeftSideComponents} from '../Components/leftSideComponents';
import {TopNavComponents} from '../Components/topNavComponents';
export class HomePage{
    readonly page: Page;
    readonly leftsideComponents : LeftSideComponents;
    readonly rightnavComponents : TopNavComponents;

    constructor(page:Page){
        this.page=page;
        this.leftsideComponents=new LeftSideComponents(page);
        this.rightnavComponents=new TopNavComponents(page);
    }

    get getLeftNavMenuItems(){
        return this.leftsideComponents;
    }

    get getTopNavMenuItems(){
        return this.rightnavComponents;
    }

}