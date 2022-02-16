import { Component, OnInit } from '@angular/core';
import { ProductRequestDTO } from '../../models/product';
import { ProductRemoteServiceService } from '../../remote-services/product-remote-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  /******************* Variables *******************/
  products: any;

  /******************* Constructor *******************/
  constructor(
    private productRemoteServiceService: ProductRemoteServiceService
  ) {}

  /******************* Angular Lifecycle *******************/
  ngOnInit(): void {
    this.getAllProducts();
    // this.addProduct({
    //   name: 'product4',
    //   price: 200,
    //   code: 4,
    //   description: 'description',
    //   categoryId: '61f83fcb56cea80cf8600f00',
    // });
  }
  /******************* Functions *******************/
  // getAllProducts
  getAllProducts() {
    this.productRemoteServiceService.getAllProducts().subscribe(
      (productResult) => {
        this.products = productResult;
        console.log(productResult);
        console.log(typeof productResult);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  // getProductById
  getProductById(id: any) {
    this.productRemoteServiceService.getProductById(id).subscribe(
      (productResult) => {
        console.log(productResult);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  // addProduct
  addProduct(product: any) {
    this.productRemoteServiceService.addProduct(product).subscribe(
      () => {
        console.log('added');
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
