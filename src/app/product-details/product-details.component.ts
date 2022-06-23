import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProductSearch } from 'src/interface/products.interface';
import { ProductsService } from '../service/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  public productId: number;
  public product: IProductSearch | undefined;
  constructor(
    private activatedRoute: ActivatedRoute,
    private api: ProductsService
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.productId = parseInt(id);
    this.api.getProductById(id).subscribe((res: IProductSearch) => {
      this.product = res;
    });
  }
}
