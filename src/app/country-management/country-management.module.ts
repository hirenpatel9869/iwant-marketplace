import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AngularMultiSelectModule} from 'angular2-multiselect-dropdown';
import {PaginationModule} from 'ngx-bootstrap';
import {DefaultModule} from '../auth/default.module';
import {DemoMaterialModule} from '../material-module';
import { CountryManagementAddComponent } from './country-management-add/country-management-add.component';
import { CountryManagementListComponent } from './country-management-list/country-management-list.component';
import {CountryManagementRoutingModule} from './country-management-routing.module';
import { CountryManagementUpdateComponent } from './country-management-update/country-management-update.component';

@NgModule({
  declarations: [CountryManagementListComponent, CountryManagementAddComponent, CountryManagementUpdateComponent],
  imports: [
    CommonModule,
    CountryManagementRoutingModule,
    PaginationModule.forRoot(),
    DefaultModule,
    AngularMultiSelectModule,
    FormsModule,
    HttpClientModule,
    DemoMaterialModule,
    BrowserAnimationsModule,
  ],
})
export class CountryManagementModule { }
