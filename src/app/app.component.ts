import { Component } from '@angular/core';
import { CartService } from './cart/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
constructor(private cartService: CartService){}
numberOfItems;

ngOnInit(): void {


   this.cartService.numberOfItems.subscribe((d)=>{
    const ls = d;
    this.numberOfItems = ls.length;
  })


}


}
