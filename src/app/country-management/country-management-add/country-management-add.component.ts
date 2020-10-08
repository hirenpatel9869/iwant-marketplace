import {Location} from '@angular/common';
import {Component, OnInit} from '@angular/core';
import {UtilityService} from '../../utilityservices/utility.service';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material';
import {CountryManagementService} from '../country-management.service';
import {LocaleIdService} from '../../locale-id.service';
import {TimezoneService} from '../../timezone.service';
import {HttpErrorResponse} from '@angular/common/http';
@Component({
  selector: 'app-country-management-add',
  templateUrl: './country-management-add.component.html',
  styleUrls: ['./country-management-add.component.scss'],
})
export class CountryManagementAddComponent implements OnInit {
  public loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
  public countryModel = {
    domain: 'default',
    name: null,
    timezoneId: null,
    mcc: null,
    localeId: null,
    isoCode: null,
};

  public language: any;
  public timeData: any;

  public spinner = false;

  constructor( private utilityService: UtilityService,
               private router: Router,
               private location: Location,
               private _snackBar: MatSnackBar,
               private countryManagementService: CountryManagementService,
               private localeAll: LocaleIdService,
               private timezone: TimezoneService) { }

  public ngOnInit() {
    this.getLocaleData();
    this.getTimezoneData();
    /*this.getAllCountry();*/
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

/*  getAllCountry(){
   this.spinner = true;
   this.countryManagementService.getAll()
       .subscribe(res => {
         this.spinner = false;
         this.CountryData = res.data.content;
         console.log(res, 'res');
       }, (err: HttpErrorResponse) => {
         this.spinner = false;
         this.utilityService.errorHandler(err);
         console.error(err);
       });
  }*/

  public createCountry() {
    this.spinner = true;
    const countryManagementModel = JSON.parse(JSON.stringify(this.countryModel));
    this.countryManagementService.create(countryManagementModel)
        .subscribe((res) => {
          this.spinner = false;
          setTimeout(() => {
            this.router.navigate(['/country-management/view']);
          }, 500);
          this._snackBar.open('country Added Successfully...', 'close', {
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
