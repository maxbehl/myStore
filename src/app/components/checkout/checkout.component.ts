import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  buyer: {
    fullName: string,
    address: string,
    creditCard: string
  } = {
    fullName: '',
    address: '',
    creditCard: ''
  }
  checkoutSum: number = 0;
  constructor(private route: ActivatedRoute, private cartService: CartService) { }

  ngOnInit(): void {
    this.checkoutSum = this.cartService.getCheckoutSum();
    this.buyer = this.cartService.getBuyerInfo();
    this.cartService.clearCart();
  }
}
