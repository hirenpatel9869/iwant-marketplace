import {HttpErrorResponse} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';
import {CountryManagementService} from '../country-management.service';
import {UtilityService} from '../../utilityservices/utility.service';
@Component({
  selector: 'app-country-management-list',
  templateUrl: './country-management-list.component.html',
  styleUrls: ['./country-management-list.component.scss'],
})
export class CountryManagementListComponent implements OnInit {
  public spinner = false;
  public countryData: any;
  constructor(private router: Router,
              private utilityService: UtilityService,
              private countryManagementService: CountryManagementService) { }

  public ngOnInit() {
    this.getAllCountry();
  }

  public getAllCountry() {
    this.spinner = true;
    this.countryManagementService.getAll()
      .subscribe((res) => {
        this.spinner = false;
        this.countryData = res;
        console.log('------------------------------->', this.countryData);
        /*       this.countryData = res.data.content;
               this.totalAccessData = res.data.totalElements;*/
        // res.forEach((data) => {
        //   this.countryData.push(data);
        // });
        console.log('CountryData', this.countryData);
      }, (err: HttpErrorResponse) => {
        this.spinner = false;
        this.utilityService.errorHandler(err);
        console.error(err);
      });
  }

  public addItem() {
    this.router.navigate(['/country-management/add']);
  }

  public editItem(id) {
    this.router.navigate(['/country-management/update', id]);
  }

  public deleteItem(id) {

    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this Country',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it',
    }).then((result) => {

      if (result.value) {
        this.countryManagementService.delete(id)
          .subscribe((response) => {
            if (response) {
              Swal.fire(
                'Deleted',
                'Country deleted successfully',
                'success',
              );
              this.getAllCountry();
            }

          }, (err: HttpErrorResponse) => {
            this.utilityService.errorHandler(err.error);

            console.error('Error occurred while deleting Country', err);
          });
      } else if (result.dismiss === Swal.DismissReason.cancel) {

        Swal.fire(
          'Cancelled',
          'Your Country is safe :)',
          'error',
        );
      }

    });

  }

  public onEventList(event, id ) {
    if (event.checked === true) {
      this.countryData.blocked = false;
      this.countryData.remark = 'Re-Activated';
      this.countryManagementService.active(id , this.countryData).subscribe((res) => {
        console.log(res, this.countryData);
      });
    } else {
      this.countryData.blocked = true;
      this.countryData.remark = 'Blocked';
      this.countryManagementService.deactive(id , this.countryData).subscribe((res) => {
        console.log(res, this.countryData);
      });
    }

  }

}
