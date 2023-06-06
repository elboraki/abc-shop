import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoicesListingComponent } from './components/invoices-listing/invoices-listing.component';
import { MaterialModule } from '../shared/material.module';



@NgModule({
  declarations: [
    InvoicesListingComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[InvoicesListingComponent]
})
export class InvoicesModule { }
