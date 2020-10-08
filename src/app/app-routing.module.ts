import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {StoreComponent} from './store/store.component';
import {CustomerProfilesComponent} from './customer-profiles/customer-profiles.component';

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'store', component: StoreComponent},
  {path: 'customer-profiles', component: CustomerProfilesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
