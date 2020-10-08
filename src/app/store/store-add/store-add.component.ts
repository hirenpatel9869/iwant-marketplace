import {Location} from '@angular/common';
import {HttpErrorResponse} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UtilityService} from '../../utilityservices/utility.service';
import {StoreService} from '../store.service';
@Component({
  selector: 'app-store-add',
  templateUrl: './store-add.component.html',
  styleUrls: ['./store-add.component.scss'],
})
export class StoreAddComponent implements OnInit {
  public loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
  public metaInfoList = [{value: null}];
  public zoom: number;
  public pannel1 = false;
  public pannel2 = false;
  public pannel3 = false;
  public addData = {
    actionCode: 'ACTION_CREATE_STORE',
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
  constructor(private router: Router,
              private utilityService: UtilityService,
              private location: Location,
              private storeService: StoreService) { }

  public ngOnInit() {
    this.zoom = 12;
  }

  public createStore() {
    this.addData.requestBody.popularFor = this.metaInfoList.map((item) => {
      return item.value;
    });
    const finalData = this.addData;
    this.storeService.add(finalData).subscribe((res) => {
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

  public markerDragEnd(lat , long , $event: MouseEvent) {
    this.addData.requestBody.latitude = lat;
    this.addData.requestBody.longitude = long;

  }

  public mapClicked($event: MouseEvent) {
    /*this.markers.push({
     lat: $event.coords.lat,
     lng: $event.coords.lng,
     draggable: true
     });*/
  }

}
