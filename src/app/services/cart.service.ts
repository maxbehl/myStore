import { Injectable } from '@angular/core';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[] = [];
  buyer: {
    fullName: string;
    address: string;
    creditCard: string;
  }
  
  constructor() {
    this.buyer = {
      fullName: '',
      address: '',
      creditCard: ''
    }
   }

  submitBuyerInfo(fullName: string, address: string, creditCard: string): void {
    this.buyer.fullName = fullName;
    this.buyer.address = address;
    this.buyer.creditCard = creditCard;
  }

  getBuyerInfo(): {
    fullName: string;
    address: string;
    creditCard: string;
  } {
    return this.buyer;
  }

  addToCart(product: Product) {
    const index = this.items.findIndex(item => item.id === product.id);
    if (index === -1) {
      this.items.push(product);
    } else { 
      this.items[index].amount += product.amount;
    }
  }

  getItems(): Product[] {
    return this.items;
  }

  clearCart(): Product[] {
    this.items = [];
    return this.items;
  }

  deleteItem(id: number): void {
    const index = this.items.findIndex(item => item.id === id);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }

  getCheckoutSum(): number {
    let checkoutSum = 0;
    for (let i = 0; i < this.items.length; i++) {
      const item = this.items[i];
      checkoutSum += item.price * item.amount;
    }
    return checkoutSum;
  }
}
