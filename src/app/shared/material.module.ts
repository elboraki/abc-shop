import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import  {MatSliderModule} from '@angular/material/slider'
import  {MatSidenavModule} from '@angular/material/sidenav'
import  {MatToolbarModule} from '@angular/material/toolbar'
import  {MatListModule} from '@angular/material/list'
import  {MatButtonModule} from '@angular/material/button'
import  {MatIconModule} from '@angular/material/icon'
import  {MatCardModule} from '@angular/material/card'
import  {MatTableModule} from '@angular/material/table'







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
    MatCardModule,
    MatTableModule
  ],
  exports:[
    MatSliderModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatTableModule

  ]
})
export class MaterialModule { }
