import {CategoryGlobModel} from './CategoryGlob.model';


export class DomainGlobModel {
  constructor(
    public id:number,
    public name:string,
    public principal?:boolean,
    public categoryGlob?:CategoryGlobModel[]
  ){}
}
