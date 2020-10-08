import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from '../auth/auth';
import {LicenceAuth} from '../auth/licenceAuth';
import {CustomerProfilesComponent} from './customer-profiles.component';
import {NgModule} from '@angular/core';
import {CustomerProfilesListComponent} from './customer-profiles-list/customer-profiles-list.component';
import {CustomerProfilesAddComponent} from './customer-profiles-add/customer-profiles-add.component';
import {CustomerProfilesUpdateComponent} from './customer-profiles-update/customer-profiles-update.component';


const routes: Routes = [
  {
    path: 'customer-profiles',
    data: {
      // authorities: ['IWANT_ADMIN', 'MARKETPLACE_ADMIN', 'MST_AMN_MN_AD']
    },
    //canActivate: [AuthGuard, LicenceAuth],
    component: CustomerProfilesComponent,
    children: [
      {
        path: 'view',
        component: CustomerProfilesListComponent,
      },
      {
        path: '',
        component: CustomerProfilesListComponent,
      },
      {
        path: 'list',
        component: CustomerProfilesListComponent,
      },
      {
        path: 'add',
        component: CustomerProfilesAddComponent,
      },
      {
        path: 'update/:id',
        component: CustomerProfilesUpdateComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false})],
  exports: [RouterModule],
})
export class  CustomerProfilesRoutingModule {
}
