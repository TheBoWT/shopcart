import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
cartItems;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.numberOfItems.subscribe(d=>{
      this.cartItems = d;
    })
  }

}
