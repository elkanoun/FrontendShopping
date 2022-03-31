import {SubCategoryGlobModel} from './SubCategoryGlob.model';


export class CategoryGlobModel {
  constructor(
    public id:number,
    public name:string,
    public subCatGlob?:SubCategoryGlobModel[]
    ){}
}
