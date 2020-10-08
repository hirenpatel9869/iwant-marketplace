import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {StoreComponent} from './store/store.component';
import {CustomerProfilesComponent} from './customer-profiles/customer-profiles.component';
import {LoginComponent} from './user/login/login.component';
import {SignUpComponent} from './user/sign-up/sign-up.component';
import {AuthGuard} from './auth/auth';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'dashboard', component: DashboardComponent , canActivate: [AuthGuard]},
  {path: 'store', component: StoreComponent , canActivate: [AuthGuard]},
  {path: 'customer-profiles', component: CustomerProfilesComponent , canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
