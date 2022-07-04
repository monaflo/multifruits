import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {
  IProduct,
  IProductDetails,
  IProductComments,
  IProductSearch,
} from 'src/interface/products.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  getComents() {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) {}

  getProducts(): Observable<IProductSearch[]> {
    return this.http
      .get<IProductSearch[]>('http://localhost:3000/product')
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }
  getProductById(id: string): Observable<IProductSearch> {
    return this.http.get<IProductSearch>(`http://localhost:3000/product/${id}`);
  }
}
