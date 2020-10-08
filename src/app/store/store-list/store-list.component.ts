import {Location} from '@angular/common';
import {HttpErrorResponse} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';
import {UtilityService} from '../../utilityservices/utility.service';
import {StoreService} from '../store.service';

@Component({
  selector: 'app-store-list',
  templateUrl: './store-list.component.html',
  styleUrls: ['./store-list.component.scss'],
})
export class StoreListComponent implements OnInit {
  public storeList: any;
  public loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
  public storeListFilter = {
    actionCode: 'ACTION_FILTER_STORE',
    requestBody: {
      domain: this.loggedInUser.domain,
      nameOfBusiness: null,
      city: null,
      popularFor: [],
      page: 0,
      pageSize: 10,
      startDate: null,
      finishDate: null,
    },
  };
  public spinner = false;
  public totalPages: any;
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
  constructor(private router: Router,
              private location: Location,
              private utilityService: UtilityService,
              private storeService: StoreService) {
  }

  public ngOnInit() {
    this.getStoreList();
  }

  public getStoreList() {
    const storeFilter = this.storeListFilter;
    this.storeService.getAll(storeFilter).subscribe((res) => {
      this.spinner = false;
      this.storeList = res.data.content;
      this.totalPages = res.data.totalElements;
      console.log('all store data', this.storeList);
    }, (err: HttpErrorResponse) => {
      this.spinner = false;
      this.utilityService.errorHandler(err);
      console.error(err);
    });
  }

  public deleteStore(id) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this Store',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it',
    }).then((result) => {

      if (result.value) {
        this.storeService.deleteById(id)
          .subscribe((response) => {
            console.log(response);
            if (response) {
              Swal.fire(
                'Deleted',
                'Store deleted successfully',
                'success',
              );
              this.storeListFilter.requestBody.page = 0;
              this.getStoreList();
            }

          }, (err: HttpErrorResponse) => {
            this.utilityService.errorHandler(err.error);
            console.error('Error occurred while deleting Store', err);
          });
      } else if (result.dismiss === Swal.DismissReason.cancel) {

        Swal.fire(
          'Cancelled',
          'Your Store is safe :)',
          'error',
        );
      }

    });

  }

  public editStore(id) {
    this.router.navigate(['/store/update', id]);
  }

  public addStore() {
    this.router.navigate(['/store/add']);
  }

  public pageChange(p) {
    this.storeListFilter.requestBody.page = p.page - 1;
    this.getStoreList();
  }

  public updateStore() {
    const finalData = this.updateStoreData;
    this.storeService.update(finalData).subscribe((res) => {
    }, (err: HttpErrorResponse) => {
      this.spinner = false;
      this.utilityService.errorHandler(err);
      console.error(err);
    });
  }

  public onEventList(event, item ) {
    if (event.checked === true) {
      item.activate = true;
      this.updateStoreData.requestBody = item;
      this.updateStore();
    } else {
      item.activate = false;
      this.updateStoreData.requestBody = item;
      this.updateStore();
      console.log('false');
  }
  }
}
