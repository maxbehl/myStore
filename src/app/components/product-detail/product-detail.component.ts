import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../models/Product';
import { CartService } from '../../services/cart.service';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  productId: number = 0;
  products: Product[] = [];
  product: Product = {
    id: 0,
    name: '',
    price: 0,
    url: '',
    description: '',
    amount: 0
  };
  values: number[] = [1,2,3,4,5,6,7,8,9];
  selectedValue: number = 1;

  constructor(private route: ActivatedRoute, private productService: ProductService, private cartService: CartService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.productId = params['productId'];
    });
    this.productService
      .getProducts()
      .subscribe({
        next: (res) => {
          this.products = res;
          this.product = this.getProductDetails(this.productId);
        },
        error: (err) => console.log(err),
      });
  }

  getProductDetails(id: Number) {
    console.log(this.products.filter((item) => item.id == id));
    return this.products.filter((item) => item.id == id)[0];
  }

  addToCart(): void {
    this.product.amount = parseInt(this.selectedValue as unknown as string);
    this.cartService.addToCart(this.product);
    alert("Added to cart!")
  }
}

