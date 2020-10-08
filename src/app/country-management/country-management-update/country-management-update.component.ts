import {Location} from '@angular/common';
import {HttpErrorResponse} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {switchMap} from 'rxjs/internal/operators';
import {LocaleIdService} from '../../locale-id.service';
import {TimezoneService} from '../../timezone.service';
import {CountryManagementService} from '../country-management.service';
import {UtilityService} from '../../utilityservices/utility.service';

@Component({
  selector: 'app-country-management-update',
  templateUrl: './country-management-update.component.html',
  styleUrls: ['./country-management-update.component.scss'],
})
export class CountryManagementUpdateComponent implements OnInit {
  public loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
  public language: any;
  public timeData: any;
  public spinner = false;
  public countryModel = {
    id: null,
    domain: this.loggedInUser.domain,
    name: null,
    timezoneId: null,
    mcc: null,
    localeId: null,
    isoCode: null,
  };

  constructor(
      private countryManagementService: CountryManagementService,
      private route: ActivatedRoute,
      private location: Location,
      private localeAll: LocaleIdService,
      private utilityService: UtilityService,
      private _snackBar: MatSnackBar,
      private router: Router,
      private timezone: TimezoneService,
  ) { }

  public ngOnInit() {
    this.getLocaleData();
    this.getTimezoneData();
    this.route.params.pipe(
        switchMap((params: Params) => this.countryManagementService.get(params.id)))
        .subscribe((res) => {
          this.countryModel = {
            id : res.id,
            domain: res.domain,
            name: res.name,
            timezoneId: res.timezoneId,
            mcc: res.mcc,
            localeId: res.localeId,
            isoCode: res.isoCode,
          };

          console.log(res);
        });
    }

  public getLocaleData() {
    this.localeAll.getLocaleAll()
        .subscribe((res) => {

          this.language = res;
        });
  }
  public getTimezoneData() {
    this.timezone.getTimeZoneAll()
        .subscribe((res) => {

          this.timeData = res;
        });
  }

  public updateCountry() {
    this.spinner = true;
    const countryManagementModel = JSON.parse(JSON.stringify(this.countryModel));
    this.countryManagementService.update(countryManagementModel)
        .subscribe((res) => {
          this.spinner = false;
          setTimeout(() => {
            this.router.navigate(['/country-management/view']);
          }, 500);
          this._snackBar.open('Country Updated Successfully...', 'close', {
            duration: 2000,
          });

        }, (err: HttpErrorResponse) => {
          this.spinner = false;
          this.utilityService.errorHandler(err.error);
          console.error(err);
        });
    console.log('Done');
  }

    public goBack() {
        this.location.back();
    }

}

