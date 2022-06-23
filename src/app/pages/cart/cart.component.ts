import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import {
  IProductComments,
  IRating,
  IProductDetails,
} from 'src/interface/products.interface';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  public products: any = [];
  public grandTotal: number;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.getProducts().subscribe((res) => {
      this.products = res;
      this.grandTotal = this.cartService.getTotalPrice();
    });
  }
  removeItem(product: any) {
    this.cartService.removeCartItems(product);
  }
  emptycart() {
    this.cartService.removeAllCart();
  }
}
