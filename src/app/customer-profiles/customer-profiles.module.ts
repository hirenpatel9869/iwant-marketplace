import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AngularMultiSelectModule} from 'angular2-multiselect-dropdown';
import {PaginationModule} from 'ngx-bootstrap';
import {DefaultModule} from '../auth/default.module';
import {DemoMaterialModule} from '../material-module';
import { CustomerProfilesAddComponent } from './customer-profiles-add/customer-profiles-add.component';
import { CustomerProfilesListComponent } from './customer-profiles-list/customer-profiles-list.component';
import {CustomerProfilesRoutingModule} from './customer-profiles-routing.module';
import { CustomerProfilesUpdateComponent } from './customer-profiles-update/customer-profiles-update.component';

@NgModule({
  declarations: [CustomerProfilesAddComponent, CustomerProfilesListComponent, CustomerProfilesUpdateComponent],
  imports: [
    CommonModule,
    CustomerProfilesRoutingModule,
    PaginationModule.forRoot(),
    DefaultModule,
    AngularMultiSelectModule,
    FormsModule,
    HttpClientModule,
    DemoMaterialModule,
    BrowserAnimationsModule,
  ],
})
export class CustomerProfilesModule { }
