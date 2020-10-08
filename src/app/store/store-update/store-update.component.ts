import {Location} from '@angular/common';
import {HttpErrorResponse} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {switchMap} from 'rxjs/operators';
import {UtilityService} from '../../utilityservices/utility.service';
import {StoreService} from '../store.service';

@Component({
  selector: 'app-store-update',
  templateUrl: './store-update.component.html',
  styleUrls: ['./store-update.component.scss'],
})
export class StoreUpdateComponent implements OnInit {
  public loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
  public metaInfoList = [{value: null}];
  public pannel1 = false;
  public pannel2 = false;
  public pannel3 = false;
  public updateStoreData = {
    actionCode: 'ACTION_UPDATE_STORE',
    requestBody: {
      nameOfBusiness: null,
      contactPersonName: null,
      storeLogoUrl: null,
      city: null,
      popularFor: [],
      reviewListing: [],
      latitude: null,
      longitude: null,
      address: {
        addressType: null,
        addressLine: null,
        addressLine1: null,
        streetName: null,
        landMark: null,
        pincode: null,
        city: null,
        state: null,
        country: null,
      },
      mobile: null,
      emailId: null,
      storeUrl: '',
      discount: {
        title: null,
        value: 0,
        startDate: null,
        finishDate: null,
        description: null,
        termsAndCondition: null,
        discountPrice: 0,
        revisedUnitRate: 0,
        discountApplied: false,
        absolute: false,
      },
      promoCode: null,
      description: null,
      imageUrl: null,
      startDate: null,
      finishDate: null,
      domain: this.loggedInUser.domain,
    },
  };
  public spinner = false;
  public storeId = null;
  constructor(private router: Router,
              private route: ActivatedRoute,
              private utilityService: UtilityService,
              private location: Location,
              private storeService: StoreService) { }

  public ngOnInit() {
    this.storeId = this.route.snapshot.paramMap.get('id');
    this.viewStore();
  }

  public viewStore() {
    this.storeService.getById(this.storeId).subscribe((res) => {
       const storeData = res.data;
       this.updateStoreData.requestBody = res.data;
      /* this.updateStoreData.requestBody.popularFor = res.data.popularFor.map((data) => {
         return { value: data };
       });*/
       const obj  = res.data.popularFor;
       const array = [];
       Object.keys(obj).forEach((key) => {
        array.push({ value: obj[key] });
      });
       this.metaInfoList = array;
    }, (err: HttpErrorResponse) => {
      this.spinner = false;
      this.utilityService.errorHandler(err);
      console.error(err);
    });
  }

  public updateStore() {
    this.updateStoreData.requestBody.popularFor = this.metaInfoList.map((item) => {
      return item.value;
    });
    const finalData = this.updateStoreData;
    this.storeService.update(finalData).subscribe((res) => {
      this.location.back();
    }, (err: HttpErrorResponse) => {
      this.spinner = false;
      this.utilityService.errorHandler(err);
      console.error(err);
    });
  }

  /* For add multiple options of answer */
  public addNewObjectToArray(object, array) {
    array = array || [{}];
    object = typeof object === 'object' ? object || {} : '';
    array.push(object);
  }

  public removeObjectFromArray(object, array) {
    const index = array.indexOf(object);
    array.splice(index, 1);
  }
  public goBack() {
    this.location.back();
  }
}
