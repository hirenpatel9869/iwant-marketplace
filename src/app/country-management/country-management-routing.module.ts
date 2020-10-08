import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CountryManagementAddComponent} from './country-management-add/country-management-add.component';
import {CountryManagementListComponent} from './country-management-list/country-management-list.component';
import {CountryManagementUpdateComponent} from './country-management-update/country-management-update.component';
import {CountryManagementComponent} from './country-management.component';
import {AuthGuard} from '../auth/auth';
import {LicenceAuth} from '../auth/licenceAuth';

const routes: Routes = [
  {
    path: 'country-management',
    data: {
      // authorities: ['IWANT_ADMIN', 'MARKETPLACE_ADMIN', 'MST_AMN_MN_AD']
    },
    canActivate: [AuthGuard, LicenceAuth],
    component: CountryManagementComponent,
    children: [
      {
        path: 'view',
        component: CountryManagementListComponent,
      },
      {
        path: '',
        component: CountryManagementListComponent,
      },
      {
        path: 'add',
        component: CountryManagementAddComponent,
      },
      {
        path: 'update/:id',
        component: CountryManagementUpdateComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false})],
  exports: [RouterModule],
})
export class  CountryManagementRoutingModule {
}
