import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvoicesListingComponent } from './components/invoices-listing/invoices-listing.component';


const routes: Routes = [
  {
    path: '',
    component: InvoicesListingComponent,
    children:[]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoicesRoutingModule { }
