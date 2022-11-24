import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardRoutingModule } from './modules/dashboard/dashboard-routing.module';
import { DashboardComponent } from './modules/dashboard/pages/dashboard.component';

const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo:'/dashboard'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
                                  {enableTracing:false, useHash:true}
                                 ),
                                 DashboardRoutingModule
                                ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
