import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { cartUrl, addToCartUrl } from '../config/api';
import { ProductItem } from '../models/productItem';
import { CartItem } from 'src/app/models/cartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private httpService: HttpClient) { }

  getCartItems():Observable<CartItem[]> {
    return this.httpService.get<CartItem[]>(cartUrl);
  }

  addProductToCart (product:ProductItem): Observable<any> {
    return this.httpService.post(addToCartUrl, { product });
  }
}
