import {Location} from '@angular/common';
import {HttpErrorResponse} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material';
import {ActivatedRoute, NavigationEnd, Params, Router} from '@angular/router';
import {switchMap} from 'rxjs/internal/operators';
import {CustomerProfilesService} from '../customer-profiles.service';
import {UtilityService} from '../../utilityservices/utility.service';

@Component({
  selector: 'app-customer-profiles-update',
  templateUrl: './customer-profiles-update.component.html',
  styleUrls: ['./customer-profiles-update.component.scss'],
})
export class CustomerProfilesUpdateComponent implements OnInit {
  public spinner = false;
  public pannel1 = false;
  public pannel2 = false;
  public isExpand = true;
  public isCollapse = false;
  public loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
  public CustomerProfileModal = {
    actionCode: 'ACTION_UPDATE_USERPROFILE',
    requestBody: {
      domain: this.loggedInUser.domain,
      id: null,
      firstName: null,
      lastName: null,
      username: null,
      mobile: null,
      password: null,
      gender: null,
      email: null,
      userType: '0',
      institute: null,
      course: null,
      city: {
        id: null,
      },

      /*'address': {
       'addressType': null,
       'blockNumber': null,
       'buildingName': null,
       'societyName': null,
       'streetName': null,
       'roadName': null,
       'landmark': null,
       'zipcode': null,
       'country': {
       'name': null
       },
       'state': {
       'name': null
       },
       'city': {
       'name': null
       }
       }*/

    },
  };

  public allCustomerFilter = {
    actionCode: 'ACTION_GET_USERPROFILE',
    requestBody: {
      domain: 'default',
      page: 0,
      pageSize: 3,
    },
  };

  public allCityFilter = {
    actionCode: 'ACTION_GET_CITY',
    requestBody: {
      domain: 'default',
      page: 0,
    },
  };

  public allCity: any;
  public selectedCity: any;
  public allCustomer: any;

  constructor(private userService: CustomerProfilesService,
              private _snackBar: MatSnackBar,
              private router: Router,
              private location: Location,
              private route: ActivatedRoute,
              private utilityService: UtilityService) {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }

  public ngOnInit() {
    this.expandAll();
    this.getAllCity();
    this.getAllCustomer();

    this.route.params.pipe(
      switchMap((params: Params) => this.userService.get(params.id)))
      .subscribe((res) => {
        console.log(res, 'res');
        if (res && res.data) {
          this.CustomerProfileModal = {
            actionCode: 'ACTION_UPDATE_USERPROFILE',
            requestBody: {
              domain: 'default',
              id: res.data.id,
              firstName: res.data.firstName,
              lastName: res.data.lastName,
              username: res.data.username,
              mobile: res.data.mobile,
              password: res.data.password,
              gender: res.data.gender,
              email: res.data.email,
              userType: res.data.userType.toString(),
              institute: res.data.institute,
              course: res.data.course,
              city: {
                id: res.data.city ? res.data.city.id : null,
              },

              /*'address': {
               'addressType': null,
               'blockNumber': null,
               'buildingName': null,
               'societyName': null,
               'streetName': null,
               'roadName': null,
               'landmark': null,
               'zipcode': null,
               'country': {
               'name': null
               },
               'state': {
               'name': null
               },
               'city': {
               'name': null
               }
               }*/

            },
          };
          this.selectedCity = res.data.city.id;
        }
      }, (err: HttpErrorResponse) => {
        console.error(err);
      });

  }

  public getAllCustomer() {
    this.spinner = true;
    this.userService.getAll(this.allCustomerFilter)
      .subscribe((res) => {
        this.spinner = false;
        this.allCustomer = res.content;
      }, (err: HttpErrorResponse) => {
        this.spinner = false;
        this.utilityService.errorHandler(err.error);
        console.error(err);
      });
  }

  public getAllCity() {
    this.userService.allCityGet()
      .subscribe((res) => {
        this.allCity = res;
        console.log(res, 'res');
      }, (err: HttpErrorResponse) => {
        console.error(err);
      });
  }

  public updateCustomerProfile() {
    this.spinner = true;
    const CustomerProfileModal = JSON.parse(JSON.stringify(this.CustomerProfileModal));
    CustomerProfileModal.requestBody.city.id = this.selectedCity;
    CustomerProfileModal.requestBody.userType = parseInt(CustomerProfileModal.requestBody.userType);

    this.userService.update(CustomerProfileModal)
      .subscribe((res) => {
        this.spinner = false;
        setTimeout(() => {
          this.router.navigate(['/customer-profiles/view']);
        }, 500);
        this._snackBar.open('Customer Profile Updated Successfully...', 'close', {
          duration: 2000,
        });
        console.log(res, 'update Customer Profile');
      }, (err: HttpErrorResponse) => {
        this.spinner = false;
        this.utilityService.errorHandler(err);
        console.error(err);
      });
  }

  public goBack() {
    this.location.back();
  }

  public expandAll() {
    this.isCollapse = true;
    this.isExpand = false;
    this.pannel1 = true;
    this.pannel2 = true;
  }
  public collapseAll() {
    this.isExpand = true;
    this.isCollapse = false;
    this.pannel1 = false;
    this.pannel2 = false;
  }

}
