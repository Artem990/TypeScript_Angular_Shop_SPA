import { Component, OnInit } from '@angular/core';
import { MessangerService } from 'src/app/services/messanger.service'
import { ProductItem } from 'src/app/models/productItem';
import { CartService } from 'src/app/services/cart.service';
import { CartItem } from 'src/app/models/cartItem';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
  cartItems = [];

  cartTotal = 0;

  constructor(private msg:MessangerService, private cartService:CartService) { }

  ngOnInit(): void {
    this.cartService.getCartItems().subscribe((cartItems) => {
      this.cartItems = cartItems;
      for(let i of cartItems){
        this.cartTotal = this.cartTotal + (i.price * i.qty); 
      }
    });
  }
}
