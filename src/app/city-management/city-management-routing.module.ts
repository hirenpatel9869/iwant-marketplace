import {CityManagementAddComponent} from './city-management-add/city-management-add.component';
import {CityManagementListComponent} from './city-management-list/city-management-list.component';
import {CityManagementUpdateComponent} from './city-management-update/city-management-update.component';
import {CityManagementComponent} from './city-management.component';
import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

const routes: Routes = [
  {
    path: 'city-management',
    data: {
      // authorities: ['IWANT_ADMIN', 'MARKETPLACE_ADMIN', 'MST_AMN_MN_AD']
    },
   // canActivate: [AuthGuard, LicenceAuth],
    component: CityManagementComponent,
    children: [
      {
        path: 'view',
        component: CityManagementListComponent,
      },
      {
        path: '',
        component: CityManagementListComponent,
      },
      {
        path: 'add',
        component: CityManagementAddComponent,
      },
      {
        path: 'update/:id',
        component: CityManagementUpdateComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false})],
  exports: [RouterModule],
})
export class  CityManagementRoutingModule {
}
