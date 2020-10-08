import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {HTTP_INTERCEPTORS, HttpClient} from '@angular/common/http';
import {MAT_DATE_FORMATS} from '@angular/material';
import {JwtModule} from '@auth0/angular-jwt';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {ToasterModule} from 'angular2-toaster';
import {PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface, PerfectScrollbarModule} from 'ngx-perfect-scrollbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AuthGuard} from './auth/auth';
import {AuthService} from './auth/auth.service';
import {LicenceAuth} from './auth/licenceAuth';
import {Principal} from './auth/principal.service';
import {CanDeactivateGuard} from './can-deactivate/can-deactivate.guard';
import {CityManagementRoutingModule} from './city-management/city-management-routing.module';
import {CityManagementComponent} from './city-management/city-management.component';
import {CityManagementModule} from './city-management/city-management.module';
import {CustomerProfilesRoutingModule} from './customer-profiles/customer-profiles-routing.module';
import {CustomerProfilesComponent} from './customer-profiles/customer-profiles.component';
import {CustomerProfilesModule} from './customer-profiles/customer-profiles.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import {FooterComponent} from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import {DemoMaterialModule} from './material-module';
import {NavigationComponent} from './navigation/navigation.component';
import {SharedService} from './shared/services/shared.service';
import {StateManagementComponent} from './state-management/state-management.component';
import {StateManagementModule} from './state-management/state-management.module';
import {StoreRoutingModule} from './store/store-routing.module';
import {StoreComponent} from './store/store.component';
import {StoreModule} from './store/store.module';
import {ConstantService} from './utilityservices/constant.service';
import {DefaultRequestOptions} from './utilityservices/default-request-options.provider';
import {SharingDataService} from './utilityservices/sharing-data.service';
import {StorageService} from './utilityservices/storage.service';
import {APP_DATE_FORMATS, UtilityService} from './utilityservices/utility.service';
import {CountryManagementModule} from './country-management/country-management.module';
import {CountryManagementComponent} from './country-management/country-management.component';
import {AgmCoreModule} from '@agm/core';
import {environment} from '../environments/environment';
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
};

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, 'assets/i18n/', '.json');
}
export function tokenGetter() {
  return localStorage.getItem('token');
}
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavigationComponent,
    HeaderComponent,
    DashboardComponent,
    StoreComponent,
    CustomerProfilesComponent,
    CityManagementComponent,
    StateManagementComponent,
    CountryManagementComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreRoutingModule,
    CustomerProfilesRoutingModule,
    CityManagementRoutingModule,
    PerfectScrollbarModule,
    StoreModule,
    CustomerProfilesModule,
    CityManagementModule,
    CountryManagementModule,
    StateManagementModule,
    AgmCoreModule.forRoot({
      apiKey: environment.mapKey,
    }),
    ToasterModule.forRoot(),
    JwtModule.forRoot({
      config: {
        tokenGetter,
      },
    }),
    DemoMaterialModule,
  ],
    providers: [
      SharedService,
      Principal,
      AuthService,
      AuthGuard,
      LicenceAuth,
      UtilityService,
      ConstantService,
      StorageService,
      {
        provide: LocationStrategy,
        useClass: HashLocationStrategy,
      },
      {
        provide: PERFECT_SCROLLBAR_CONFIG,
        useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
      },
      CanDeactivateGuard,
      SharingDataService,
      {
        provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS,
      },
      {
        provide: HTTP_INTERCEPTORS,
        useClass: DefaultRequestOptions,
        multi: true,
      },
    ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA , NO_ERRORS_SCHEMA],
})
export class AppModule { }
