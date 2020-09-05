import { Component, OnInit, Input } from '@angular/core';
import { ProductItem } from 'src/app/models/productItem';
import { MessangerService } from 'src/app/services/messanger.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() productItem: ProductItem;
  
  constructor(private msg: MessangerService, private cartService: CartService) {

   }

  ngOnInit() {

  }

  handleAddToCart() {
    this.cartService.addProductToCart(this.productItem).subscribe(product => {
      console.log(product);
    });
  }

}
