import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StateManagementAddComponent} from './state-management-add/state-management-add.component';
import {StateManagementListComponent} from './state-management-list/state-management-list.component';
import {StateManagementUpdateComponent} from './state-management-update/state-management-update.component';
import {StateManagementComponent} from './state-management.component';
import {AuthGuard} from '../auth/auth';
import {LicenceAuth} from '../auth/licenceAuth';

const routes: Routes = [
  {
    path: 'state-management',
    data: {
      // authorities: ['IWANT_ADMIN', 'MARKETPLACE_ADMIN', 'MST_AMN_MN_AD']
    },
    canActivate: [AuthGuard, LicenceAuth],
    component: StateManagementComponent,
    children: [
      {
        path: 'view',
        component: StateManagementListComponent,
      },
      {
        path: '',
        component: StateManagementListComponent,
      },
      {
        path: 'add',
        component: StateManagementAddComponent,
      },
      {
        path: 'update/:id',
        component: StateManagementUpdateComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false})],
  exports: [RouterModule],
})
export class  StateManagementRoutingModule {
}
