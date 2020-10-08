import { Location } from '@angular/common';
import {HttpErrorResponse} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {switchMap} from 'rxjs/internal/operators';
import {CountryManagementService} from '../../country-management/country-management.service';
import {LocaleIdService} from '../../locale-id.service';
import {TimezoneService} from '../../timezone.service';
import {StateManagementService} from '../state-management.service';
import {UtilityService} from '../../utilityservices/utility.service';

@Component({
  selector: 'app-state-management-update',
  templateUrl: './state-management-update.component.html',
  styleUrls: ['./state-management-update.component.scss'],
})
export class StateManagementUpdateComponent implements OnInit {
  public loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
  public countryData = [];
  public stateModel = {
     id : null,
    domain: this.loggedInUser.domain,
    name: null,
    timeZoneId: null,
    localeId: null,
    countryId: null,
    countryName: null,
  };
  public language: any;
    public timeData: any;
    public spinner = false;
    public countryID: any;
  constructor(
      private stateManagementService: StateManagementService,
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
    this.getAllCountry();
    this.route.params.pipe(
        switchMap((params: Params) => this.stateManagementService.get(params.id)))
        .subscribe((res) => {
          this.stateModel = {
            id: res.id,
            domain: this.loggedInUser.domain,
            name: res.name,
            timeZoneId: res.timeZoneId,
            localeId: res.localeId,
            countryId: res.countryId,
            countryName: res.countryName,
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

  public getAllCountry() {

    this.countryManagementService.getAll()
        .subscribe((res) => {
          this.countryData = res;
          /*       this.countryData = res.data.content;
           this.totalAccessData = res.data.totalElements;*/
          // res.forEach((data) => {
          //   this.countryData.push(data);
          // });
            /*this.countryData.forEach((data) => {
                this.stateModel.countryId = data.id;
            });*/
          console.log('StateData', this.stateModel);
        }, (err: HttpErrorResponse) => {
          this.utilityService.errorHandler(err);
          console.error(err);
        });
  }
  public getConID(id) {
      this.countryID = id;
  }
  public updateState() {
    this.spinner = true;
    this.stateModel.countryId = this.countryID;
  /*    console.log('statemodel : ' , this.stateModel);*/
    const stateManagementModel = JSON.parse(JSON.stringify(this.stateModel));
    this.stateManagementService.update(stateManagementModel)
        .subscribe((res) => {
            this.spinner = false;
           /* this.getAllCountry();*/
            setTimeout(() => {
                this.router.navigate(['/state-management/view']);
            }, 500);
            this._snackBar.open('State Updated Successfully...', 'close', {
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
