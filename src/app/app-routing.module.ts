import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvoiceBuilderRoutingModule } from './invoice-builder/invoice-builder-routing.module';


const routes: Routes = [
  {
    path: '', loadChildren: () => import('./invoice-builder/invoice-builder-routing.module').then(m => InvoiceBuilderRoutingModule)
  },
  {
    path:'**',redirectTo:''

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
