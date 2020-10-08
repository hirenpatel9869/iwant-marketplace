import { Component, OnInit } from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';
import {CustomerProfilesService} from '../customer-profiles.service';
import {MatSnackBar} from '@angular/material';
import {NavigationEnd, Router} from '@angular/router';
import {UtilityService} from '../../utilityservices/utility.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-customer-profiles-add',
  templateUrl: './customer-profiles-add.component.html',
  styleUrls: ['./customer-profiles-add.component.scss'],
})
export class CustomerProfilesAddComponent implements OnInit {
  public pannel1 = false;
  public pannel2 = false;
  public isExpand = true;
  public isCollapse = false;
  public spinner = false;
  public selectedCity: any;

  public CustomerProfileModal = {
    actionCode: 'ACTION_CREATE_USERPROFILE',
    requestBody: {
      domain: 'default',
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

  public allCity: any;

  public allCustomerFilter = {
    actionCode: 'ACTION_GET_USERPROFILE',
    requestBody: {
      domain: 'default',
      page: 0,
      pageSize: 10,
    },
  };

  public allCityFilter = {
    actionCode: 'ACTION_GET_CITY',
    requestBody: {
      domain: 'default',
      page: 0,
    },
  };
  public allCustomer: any;

  constructor(private userService: CustomerProfilesService,
              private _snackBar: MatSnackBar,
              private router: Router,
              private location: Location,
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
      }, (err: HttpErrorResponse) => {
        console.error(err);
      });
  }

  public createCustomerProfile() {
    this.spinner = true;
    const CustomerProfileModal = JSON.parse(JSON.stringify(this.CustomerProfileModal));
    CustomerProfileModal.requestBody.city.id = this.selectedCity;
    CustomerProfileModal.requestBody.userType = parseInt(CustomerProfileModal.requestBody.userType);

    this.userService.createUsers(CustomerProfileModal)
      .subscribe((res) => {
        this.spinner = false;
        setTimeout(() => {
          this.router.navigate(['/customer-profiles/view']);
        }, 500);
        this._snackBar.open('Customer Profile Created Successfully...', 'close', {
          duration: 2000,
        });
        console.log(res, 'create Customer Profile');
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
