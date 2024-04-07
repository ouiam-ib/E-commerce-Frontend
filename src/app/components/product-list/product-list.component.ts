import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../common/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  products : Product[]=[];

  // inject our PorductService 
  constructor(private productService:ProductService){}

  //this method is to call my listProduct method  
  ngOnInit(): void {
    this .listProduct();

  }
  listProduct() {
    // method invoked once you subscribe
    this.productService.getProductList().subscribe(
      data =>{
        this.products = data; // assign results to the Product array 
      }
    )
  }

}
