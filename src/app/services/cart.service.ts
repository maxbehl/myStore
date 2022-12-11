import { Injectable } from '@angular/core';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[] = [];
  
  constructor() { }

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

  getTotalPrices(): number {
    let totalPrices = 0;
    for (let i = 0; i < this.items.length; i++) {
      const item = this.items[i];
      totalPrices += item.price * item.amount;
    }
    return totalPrices;
  }
}
