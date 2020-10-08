import {Location} from '@angular/common';
import {HttpErrorResponse} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material';
import {NavigationEnd, Router} from '@angular/router';
import {UtilityService} from '../../utilityservices/utility.service';
import {CityManagementService} from '../city-management.service';
import {CountryManagementService} from '../../country-management/country-management.service';
import {StateManagementService} from '../../state-management/state-management.service';

@Component({
  selector: 'app-city-management-add',
  templateUrl: './city-management-add.component.html',
  styleUrls: ['./city-management-add.component.scss'],
})
export class CityManagementAddComponent implements OnInit {
    public loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    public spinner = false;

    public cityModel = {
        domain : this.loggedInUser.domain,
        name: null,
        countryId: null,
        countryName: null,
        stateId: null,
        stateName: null,
    };
    public CountryData: any;
    public StateData: any;
    public State = {
        id: null,
        name: null,
    };
    public Country = {
        id: null,
        name: null,
    };

  constructor(private cityManagementService: CityManagementService,
              private stateManagementService: StateManagementService,
              private countryManagementService: CountryManagementService,
              private router: Router,
              private utilityService: UtilityService,
              private location: Location,
              private _snackBar: MatSnackBar) {
      this.router.events.subscribe((evt) => {
          if (!(evt instanceof NavigationEnd)) {
              return;
          }
          window.scrollTo(0, 0);
      });
  }

  public ngOnInit() {

    this.getAllCountryManagement();

  }

    public getAllCountryManagement() {
        this.spinner = true;
        this.countryManagementService.getAll()
            .subscribe((res) => {
                this.spinner = false;
                this.CountryData = res;
                console.log(res, 'Country-------------------res');
            }, (err: HttpErrorResponse) => {
                this.spinner = false;
                this.utilityService.errorHandler(err);
                console.error(err);
            });
    }

   public selectState(id) {
       this.spinner = true;
       this.stateManagementService.getAllByCountry(id)
           .subscribe( (res) => {
               this.spinner = false;
               this.StateData = res;
           }, (err: HttpErrorResponse) => {
               this.spinner = false;
               this.utilityService.errorHandler(err);
               console.error(err);
               },
           );
   }

    public createCity() {
      this.cityModel.countryName = this.Country.name;
      this.cityModel.countryId = this.Country.id;
      this.cityModel.stateName = this.State.name;
      this.cityModel.stateId = this.State.id;
      this.spinner = true;
      const cityManagementModel = JSON.parse(JSON.stringify(this.cityModel));
      this.cityManagementService.create(cityManagementModel)
        .subscribe((res) => {
          this.spinner = false;
          setTimeout(() => {
            this.router.navigate(['/city-management/view']);
          }, 500);
          this._snackBar.open('City Added Successfully...', 'close', {
            duration: 2000,
          });

        }, (err: HttpErrorResponse) => {
          this.spinner = false;
          this.utilityService.errorHandler(err.error);
          console.error(err);
        });

  }

  public goBack() {
    this.location.back();
  }

}
