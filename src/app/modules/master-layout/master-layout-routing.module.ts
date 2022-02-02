import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MasterLayoutScreen } from './screens/master-layout/master-layout.screen';
import { HomeComponent } from '../home/screens/home/home.component';
import { LoginComponent } from '../authentication/screens/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: MasterLayoutScreen,
    // canActivateChild: [AuthGuard],
    children: [
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'login', component: LoginComponent },
      {
        path: 'product',
        loadChildren: () =>
          import('../products/product.module').then((m) => m.ProductModule),
      },
      {
        path: 'cart',
        loadChildren: () =>
          import('../cart/cart.module').then((m) => m.CartModule),
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MasterLayoutRoutingModule {}
