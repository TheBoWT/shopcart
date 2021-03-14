import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems = [];
  numberOfItems = new BehaviorSubject([]);

  constructor() { }
  ngOnInit(): void {
    const ls = JSON.parse(localStorage.getItem('cart'));
    this.cartItems.push(ls[0])

  }

  addItem(product: Product){
    const exist:Product = this.cartItems.find((item)=>{
      return item.id === product.id;
    });

    if(exist)
      exist.qty++;
    else
      this.cartItems.push(product);
      //this.numberOfItems.next(this.cartItems);


    localStorage.setItem('cart', JSON.stringify(this.cartItems));

    this.numberOfItems.next(JSON.parse(localStorage.getItem('cart')));
  }



}


