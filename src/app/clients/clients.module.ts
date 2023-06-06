import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsRoutingModule } from './clients-routing.module';
import { ClientsListingComponent } from './components/clients-listing/clients-listing.component';
import { MaterialModule } from '../shared/material.module';


@NgModule({
  declarations: [
    ClientsListingComponent
  ],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    MaterialModule
  ]
})
export class ClientsModule { }
