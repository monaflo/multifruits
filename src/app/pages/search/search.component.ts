import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductsService } from 'src/app/service/products.service';
import {
  IProduct,
  IProductDetails,
  IProductSearch,
} from 'src/interface/products.interface';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  productList: IProductSearch[] = [];
  productTitle: string = '';  
  productName: string = '';
  productDescripsion: string = '';
  productSubscribe: Subscription;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getParams();
  }

  getParams(): void {
    this.route.params.subscribe((params) => {
      console.log(params);
      this.productTitle = params['title'];
      this.getData();
    });
  }

  getData(): void {
    this.productsService
      .getProducts(
      ).subscribe(
        (product): void => {
          this.productList = product.filter(
            (ele) =>
              ele.title
                .toLowerCase()
                .indexOf(this.productTitle.toLowerCase()) !== -1
          );
          
          console.log(product);

          console.log(this.productList);
        },
        (err: Error): void => {
          console.log(err.message);
        }
      );
  }

 
  ngOnDestroy(): void {
    if(this.productSubscribe){
      this.productSubscribe.unsubscribe();
    }
    
  }
}
