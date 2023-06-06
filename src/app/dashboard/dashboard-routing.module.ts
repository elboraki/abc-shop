import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { InvoicesListingComponent } from '../invoices/components/invoices-listing/invoices-listing.component';
import { ClientsListingComponent } from '../clients/components/clients-listing/clients-listing.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        component: MainContentComponent
      },
      {
        path: 'invoices',
        component: InvoicesListingComponent
      },
      {
        path: 'clients',
        component: ClientsListingComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
