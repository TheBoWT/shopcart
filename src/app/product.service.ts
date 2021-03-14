import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products:Product[] = [
    new Product(1, 'I Phone 7', 'Apple Product', 1, 700, [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIVSa47uituCk2T1YW9EfEnN_rY3TsIJ7nY-tjmt1lI_upQ28VbVbAlyt3zI_ijAmDGex4KA&usqp=CAc',
    ]),
    new Product(2, 'Samsung 10', 'Samsung Product',1, 600, []),
    new Product(3, 'HeadePhone', 'My Product', 1, 15, [])
  ]

  constructor() { }

  getProducts(){
    return this.products;
  }

  getProduct(id:number){
    return this.products.find(product=>
        product.id === id
      );
  }
}
