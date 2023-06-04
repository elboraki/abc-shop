import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { from } from 'rxjs';
import  {MatSliderModule} from '@angular/material/slider'
import  {MatSidenavModule} from '@angular/material/sidenav'
import  {MatToolbarModule} from '@angular/material/toolbar'
import  {MatListModule} from '@angular/material/list'





@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSliderModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule
  ],
  exports:[
    MatSliderModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule

  ]
})
export class MaterialModule { }
