import {AgmCoreModule} from '@agm/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AngularMultiSelectModule} from 'angular2-multiselect-dropdown';
import {PaginationModule} from 'ngx-bootstrap';
import {environment} from '../../environments/environment';
import {DefaultModule} from '../auth/default.module';
import {DemoMaterialModule} from '../material-module';
import { StoreAddComponent } from './store-add/store-add.component';
import { StoreListComponent } from './store-list/store-list.component';
import {StoreRoutingModule} from './store-routing.module';
import { StoreUpdateComponent } from './store-update/store-update.component';
import { StoreViewComponent } from './store-view/store-view.component';
@NgModule({
  declarations: [StoreAddComponent, StoreListComponent, StoreUpdateComponent, StoreViewComponent],
  imports: [
    CommonModule,
    StoreRoutingModule,
    PaginationModule.forRoot(),
    DefaultModule,
    AngularMultiSelectModule,
    FormsModule,
    HttpClientModule,
    DemoMaterialModule,
    BrowserAnimationsModule,
    AgmCoreModule.forRoot({
      apiKey: environment.mapKey,
    }),
  ],
})
export class StoreModule { }
