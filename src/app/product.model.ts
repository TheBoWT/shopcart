export class Product {
  constructor(public id:number, public title:string, public desc:string, public qty:number = 1, public price:number, public imageUrl:string[]){}
}
