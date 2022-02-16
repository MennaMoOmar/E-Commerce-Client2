import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/authentication/screens/login/login.component';
import { SignupComponent } from './modules/authentication/screens/signup/signup.component';
import { PageNotFoundComponent } from './modules/common/components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {
    path: '',
    loadChildren: () =>
      import('./modules/master-layout/master-layout.module').then(
        (m) => m.MasterLayoutModule
      ),
  },
  { path: 'error', component: PageNotFoundComponent },
  { path: '**', redirectTo: 'error' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
