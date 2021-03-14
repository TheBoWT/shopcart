import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart/cart.service';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
product:Product;
currentImage = 0;

  constructor(private productService: ProductService, private route:ActivatedRoute, private cartService: CartService) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];
    this.product = this.productService.getProduct(id);
  }

  cartData = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    qty: new FormControl()
  })

  addToCart(product: Product){
    this.cartService.addItem(product);

  }

}
