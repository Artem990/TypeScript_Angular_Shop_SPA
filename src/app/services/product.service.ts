import { Injectable } from '@angular/core';
import { ProductItem } from '../models/productItem';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { productsUrl, cartUrl } from 'src/app/config/api';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // TODO Populate products from an API (any data source)

  constructor(private httpService: HttpClient) {  }

  getProducts():Observable<ProductItem[]> {
     return this.httpService.get<ProductItem[]>(productsUrl);
  }
}
