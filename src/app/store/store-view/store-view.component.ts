import {HttpErrorResponse} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UtilityService} from '../../utilityservices/utility.service';
import {StoreService} from '../store.service';

@Component({
  selector: 'app-store-view',
  templateUrl: './store-view.component.html',
  styleUrls: ['./store-view.component.scss'],
})
export class StoreViewComponent implements OnInit {
  public storeData = {
    nameOfBusiness: 'mall',
    contactPersonName: 'test1',
    storeLogoUrl: 'ddddddddddd',
    city: 'pune',
    popularFor: ['food', 'service'],
    reviewListing: ['great', 'best'],
    latitude: '236',
    longitude: '333',
    address: {
      addressType: '',
      addressLine: '',
      addressLine1: '',
      streetName: '',
      landMark: '',
      pincode: '',
      city: '',
      state: '',
      country: '',
},
  mobile: '123456789',
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
promoCode: 'ddddddd',
  description: 'sssssssssssss',
  imageUrl: 'eeeeeeeeeeeeeeee',
  startDate: '2020-09-01T18:30:00.000Z',
  finishDate: '2020-09-30T18:30:00.000Z',
  domain: 'default',
};
  public storeId = null;
  public spinner = false;
  constructor(private router: Router,
              private utilityService: UtilityService,
              private storeService: StoreService) { }

  public ngOnInit() {
    this.viewStore();
  }

  public viewStore() {
    this.storeService.getById(this.storeId).subscribe((res) => {
      console.log('view store res', res);
    }, (err: HttpErrorResponse) => {
      this.spinner = false;
      this.utilityService.errorHandler(err);
      console.error(err);
    });
  }
}
