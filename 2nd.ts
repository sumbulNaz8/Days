
import {Shape} from "./1st"

export class Circle implements Shape  {
    name:string=""
    area: string=""
    calculteArea(): void {
        throw new Error ("Method not implement ")
    }
    constructor(name:string,area:string){
              this.name=name
              this.area=area

    }
}