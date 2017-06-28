import { Component, OnInit } from '@angular/core';

import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  moduleId: module.id,
  templateUrl: 'product-list.component.html',
  styleUrls: ['product-list.component.css']
})
export class ProductListComponent implements OnInit{
  onNotify(message: string): void { }
  pageTitle: string = 'Product List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  listFilter: string;
  errorMessage: string;

  products: IProduct[];


  constructor(private _productService: ProductService){

  }

  ngOnInit(): void{
    this._productService.getProducts()
      .subscribe(products => this.products = products,
        error => this.errorMessage = <any>error);
  }

  toggleImage(): void{
    this.showImage = !this.showImage;
  }
  //Function to set the title to whatever the rating is when clicked
  onRatingClicked(message: string): void{
    this.pageTitle = 'Product List: ' + message;
  }
}
