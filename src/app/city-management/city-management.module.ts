import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AngularMultiSelectModule} from 'angular2-multiselect-dropdown';
import {PaginationModule} from 'ngx-bootstrap';
import {DefaultModule} from '../auth/default.module';
import {DemoMaterialModule} from '../material-module';
import { CityManagementAddComponent } from './city-management-add/city-management-add.component';
import { CityManagementListComponent } from './city-management-list/city-management-list.component';
import {CityManagementRoutingModule} from './city-management-routing.module';
import { CityManagementUpdateComponent } from './city-management-update/city-management-update.component';
import { CityManagementComponent } from './city-management.component';

@NgModule({
  declarations: [CityManagementAddComponent, CityManagementUpdateComponent, CityManagementListComponent],
  imports: [
    CommonModule,
    CityManagementRoutingModule,
    PaginationModule.forRoot(),
    DefaultModule,
    AngularMultiSelectModule,
    FormsModule,
    HttpClientModule,
    DemoMaterialModule,
    BrowserAnimationsModule,
  ],
})
export class CityManagementModule { }
