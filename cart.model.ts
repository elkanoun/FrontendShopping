import { Item } from './Item.model';

export class Cart{
    constructor(public items: Item[],public subTotal:number,public total:number){}
}