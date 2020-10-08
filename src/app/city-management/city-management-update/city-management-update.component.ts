import {Location} from '@angular/common';
import {HttpErrorResponse} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material';
import {ActivatedRoute, NavigationEnd, Params, Router} from '@angular/router';
import {switchMap} from 'rxjs/internal/operators';
import {CityManagementService} from '../city-management.service';
import {UtilityService} from '../../utilityservices/utility.service';
import {CountryManagementService} from '../../country-management/country-management.service';
import {StateManagementService} from '../../state-management/state-management.service';

@Component({
  selector: 'app-city-management-update',
  templateUrl: './city-management-update.component.html',
  styleUrls: ['./city-management-update.component.scss'],
})
export class CityManagementUpdateComponent implements OnInit {
    public loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    public spinner = false;

    public cityModel = {
        id: null,
        domain : this.loggedInUser.domain,
        name: null,
        countryId: null,
        countryName: null,
        stateId: null,
        stateName: null,
    };
    public CountryData = [];
    public StateData = [];
    public IDstate: any;
    public IDcountry: any;

  constructor(private cityManagementService: CityManagementService,
              private countryManagementService: CountryManagementService,
              private stateManagementService: StateManagementService,
              private utilityService: UtilityService,
              private _snackBar: MatSnackBar,
              private route: ActivatedRoute,
              private router: Router,
              private location: Location) {
      this.router.events.subscribe((evt) => {
          if (!(evt instanceof NavigationEnd)) {
              return;
          }
          window.scrollTo(0, 0);
      });
  }

  public ngOnInit() {
    this.getAllCountryManagement();

    this.route.params.pipe(
        switchMap((params: Params) => this.cityManagementService.get(params.id)))
        .subscribe((res) => {
          console.log(res, 'res');
          this.cityModel = {
                id: res.id,
                domain : 'default',
                name: res.name,
                countryId: res.countryId,
                countryName: res.countryName,
                stateId: res.stateId,
                stateName: res.stateName,
            };
        }, (err: HttpErrorResponse) => {
          console.error(err);
        });

  }

  public getAllCountryManagement() {
    this.spinner = true;
    this.countryManagementService.getAll()
        .subscribe((res) => {
          this.spinner = false;
          this.CountryData = res;
          console.log(res, 'res');
        }, (err: HttpErrorResponse) => {
          this.spinner = false;
          this.utilityService.errorHandler(err);
          console.error(err);
        });
  }

    public getConID(id) {
        this.IDcountry = id;
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
    public getStateID(id) {
        this.IDstate = id;
    }
  public updateCity() {
      this.cityModel.countryId = this.IDcountry;
      this.cityModel.stateId = this.IDstate;
      this.spinner = true;
      const cityMangModel = JSON.parse(JSON.stringify(this.cityModel));
      this.cityManagementService.update(cityMangModel)
        .subscribe((res) => {
            console.log('res' , res);
            this.spinner = false;
            setTimeout(() => {
            this.router.navigate(['/city-management/view']);
          }, 500);
            this._snackBar.open('City update Successfully...', 'close', {
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
