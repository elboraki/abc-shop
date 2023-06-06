import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardRoutingModule } from './dashboard/dashboard-routing.module';


const routes: Routes = [
  {
    path: '', loadChildren: () => import('./dashboard/dashboard-routing.module').then(m => DashboardRoutingModule)
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
