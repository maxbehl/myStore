import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../models/Product';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items: Product[] = [];
  checkoutSum: number = 0;
  constructor(private cartService: CartService, private route: Router) { }

  ngOnInit() {
    this.items = this.cartService.getItems();
    this.checkoutSum = this.cartService.getCheckoutSum();
  }

  onSubmit(value: any) {
    this.cartService.submitBuyerInfo(value.fullName, value.address, value.creditCard);
    this.route.navigate([`success`]);
  }
  onChange(id: number, value: string): void {
    if (parseInt(value) === 0 || value === '') {
      this.cartService.deleteItem(id);
      alert("Deleted from cart!");
    }
    this.checkoutSum = this.cartService.getCheckoutSum();
  }

}

