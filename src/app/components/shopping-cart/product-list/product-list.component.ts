import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ProductItem } from 'src/app/models/productItem';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productList: ProductItem[];

  constructor(private productService:ProductService) { }

  ngOnInit() {
    this.productService.getProducts().subscribe((products) => {
      console.log(products);
      this.productList = products;
    });
  }

}
