import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { Product } from '../../models/Product';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;
  values: number[] = [1,2,3,4,5,6,7,8,9];
  selectedValue: number = 1;

  constructor(private cartService: CartService) {
    this.product = {
      id: 0,
      name: '',
      price: 0,
      url: '',
      description: '',
      amount: 0
    }
   }

  ngOnInit() {
  }

  addToCart(): void {
    this.product.amount = parseInt(this.selectedValue as unknown as string);
    this.cartService.addToCart(this.product);
    alert("Added to cart!");
  }
}


