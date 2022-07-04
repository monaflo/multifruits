import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { ProductsService } from 'src/app/service/products.service';
import { IProduct } from 'src/interface/products.interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  public productList: any;

  constructor(private api: ProductsService, private cartService: CartService) {}

  ngOnInit(): void {
    this.api.getProducts().subscribe(res => {
      this.productList = res; 
           
      this.productList.forEach((a:any) => {
        Object.assign(a,{quantity: 1, total:a.price});
      });
    });
  }

  addtoCart(product: any){
    this.cartService.addtoCart(product);
  }
}
