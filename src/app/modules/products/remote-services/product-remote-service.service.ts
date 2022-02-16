import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { AbstractRemoteServiceService } from '../../common/remote-services/abstract-remote-service.service';
import { CreateProductRequestDTO } from '../models/create-product';
import { ProductRequestDTO } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductRemoteServiceService extends AbstractRemoteServiceService {
  /******************* Variables *******************/
  /******************* Constructor *******************/
  constructor(private http: HttpClient) {
    super();
  }

  /******************* Angular Lifecycle *******************/
  ngOnInit(): void {}
  /******************* Functions *******************/
  // getAllProducts
  getAllProducts() {
    let apiRoute = this.apiURl + 'product';
    return this.http.get(apiRoute);
  }

  // getProductById
  getProductById(id: any) {
    console.log(id)
    let apiRoute = `${this.apiURl}product/${id}`;
    // let params = new HttpParams();
    // params.set('longitude', String(requestDTO.Id));
    return this.http.get(apiRoute);
  }

  // addProduct() {
  addProduct(requestDTO: CreateProductRequestDTO) {
    let apiRoute = this.apiURl + 'product/addproduct';
    console.log(JSON.stringify(requestDTO))
    // const formData = new FormData();
    // formData.append('name', String(requestDTO.Name));
    // formData.append('price', String(requestDTO.Price));
    // formData.append('code', String(requestDTO.Code));
    // formData.append('description', String(requestDTO.Description));
    // formData.append('categoryId', String(requestDTO.CategoryId));
    return this.http.post(apiRoute, requestDTO);
  }

  // editProduct() {
  editProduct(requestDTO: ProductRequestDTO) {
    let apiRoute = `${this.apiURl}product/addproduct/${requestDTO.Id}`;
    const formData = new FormData();
    formData.append('name', String(requestDTO.Name));
    formData.append('price', String(requestDTO.Price));
    formData.append('code', String(requestDTO.Code));
    formData.append('description', String(requestDTO.Description));
    formData.append('categoryId', String(requestDTO.CategoryId));
    return this.http.patch(apiRoute, formData);
  }

  // deleteProductById
  deleteProductById(id:string) {
    let apiRoute = `${this.apiURl}product/${id}`;
    return this.http.delete(apiRoute);
  }
}
