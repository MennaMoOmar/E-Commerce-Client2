import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './screens/product-details/product-details.component';
import { ProductsComponent } from './screens/products/products.component';

const routes: Routes = [
  { path: '', component: ProductsComponent },
  { path: ':id', component: ProductDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
