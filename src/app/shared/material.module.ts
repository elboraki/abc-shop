import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { from } from 'rxjs';
import  {MatSliderModule} from '@angular/material/slider'
import  {MatSidenavModule} from '@angular/material/sidenav'
import  {MatToolbarModule} from '@angular/material/toolbar'
import  {MatListModule} from '@angular/material/list'
import  {MatButtonModule} from '@angular/material/button'
import  {MatIconModule} from '@angular/material/icon'
import  {MatCardModule} from '@angular/material/card'







@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSliderModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatCardModule
  ],
  exports:[
    MatSliderModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule

  ]
})
export class MaterialModule { }
