import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StateManagementUpdateComponent } from './state-management-update/state-management-update.component';
import { StateManagementAddComponent } from './state-management-add/state-management-add.component';
import { StateManagementListComponent } from './state-management-list/state-management-list.component';
import {CountryManagementRoutingModule} from '../country-management/country-management-routing.module';
import {PaginationModule} from 'ngx-bootstrap';
import {DefaultModule} from '../auth/default.module';
import {AngularMultiSelectModule} from 'angular2-multiselect-dropdown';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {DemoMaterialModule} from '../material-module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {StateManagementRoutingModule} from './state-management-routing.module';
@NgModule({
  declarations: [StateManagementUpdateComponent, StateManagementAddComponent, StateManagementListComponent],
  imports: [
    CommonModule,
    StateManagementRoutingModule,
    PaginationModule.forRoot(),
    DefaultModule,
    AngularMultiSelectModule,
    FormsModule,
    HttpClientModule,
    DemoMaterialModule,
    BrowserAnimationsModule,
  ],
})
export class StateManagementModule { }
