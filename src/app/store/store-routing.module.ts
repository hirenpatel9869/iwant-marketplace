import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StoreComponent} from './store.component';
import {StoreListComponent} from './store-list/store-list.component';
import {StoreAddComponent} from './store-add/store-add.component';
import {StoreUpdateComponent} from './store-update/store-update.component';
import {StoreViewComponent} from './store-view/store-view.component';

const routes: Routes = [
  {
    path: 'store',
    data: {
      // authorities: ['IWANT_ADMIN', 'MARKETPLACE_ADMIN', 'MST_AMN_MN_AD']
    },
    //canActivate: [AuthGuard, LicenceAuth],
    component: StoreComponent,
    children: [
      {
        path: 'view',
        component: StoreViewComponent,
      },
      {
        path: 'list',
        component: StoreListComponent,
      },
      {
        path: '',
        component: StoreListComponent,
      },
      {
        path: 'add',
        component: StoreAddComponent,
      },
      {
        path: 'update/:id',
        component: StoreUpdateComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false})],
  exports: [RouterModule],
})
export class StoreRoutingModule {
}
