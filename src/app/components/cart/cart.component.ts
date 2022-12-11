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
  totalPrices: number = 0;
  constructor(private cartService: CartService, private route: Router) { }

  ngOnInit() {
    this.items = this.cartService.getItems();
    this.totalPrices = this.cartService.getTotalPrices();
  }

  onSubmit(value: any) {
    console.log("On Submit in Cart aufgerufen!")
    this.cartService.clearCart();
    this.route.navigate([`success/${value.fullName}/${this.totalPrices}`]);
  }
  onChange(id: number, value: string): void {
    if (parseInt(value) === 0 || value === '') {
      this.cartService.deleteItem(id);
      alert("Deleted from cart!");
    }
    this.totalPrices = this.cartService.getTotalPrices();
  }

}

