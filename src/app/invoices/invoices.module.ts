import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoicesListingComponent } from './components/invoices-listing/invoices-listing.component';
import { MaterialModule } from '../shared/material.module';
import { HttpClientModule } from '@angular/common/http';
import { InvoiceService } from './services/invoice.service';



@NgModule({
  declarations: [
    InvoicesListingComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule
  ],
  exports: [InvoicesListingComponent],
  providers:[InvoiceService]
})
export class InvoicesModule { }
