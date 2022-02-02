import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './modules/common/components/page-not-found/page-not-found.component';

const routes: Routes = [
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
