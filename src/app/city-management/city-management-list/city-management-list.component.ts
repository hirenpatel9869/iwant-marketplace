import {HttpErrorResponse} from '@angular/common/http';
import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {debounceTime, map} from 'rxjs/internal/operators';
import {Observable} from 'rxjs/Rx';
import Swal from 'sweetalert2';
import {CityManagementService} from '../city-management.service';
import {UtilityService} from '../../utilityservices/utility.service';
import {CountryManagementService} from '../../country-management/country-management.service';
import {StateManagementService} from '../../state-management/state-management.service';

@Component({
  selector: 'app-city-management-list',
  templateUrl: './city-management-list.component.html',
  styleUrls: ['./city-management-list.component.scss'],
})
export class CityManagementListComponent implements OnInit {
    public loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    public cityPojo = {
          domain : 'default',
          keyword : null,
          page : 0,
          sortBy: null,
          pageSize : 20,
    };
    public totalElements = null;
    public spinner = false;
    public showHide = false;
    public cityData: any;
    public countryData: any;
    public stateData: any;

    public totalAccessData: any;
    public statePojo = {
        domain : 'default',
        keyword : null,
        countryId : null,
        page : 0,
        pageSize : 20,
    };
  @ViewChild('search', { static: false}) public search: ElementRef;

  constructor(private router: Router,
              private countryManagementService: CountryManagementService,
              private stateManagementService: StateManagementService,
              private cityManagementService: CityManagementService,
              private utilityService: UtilityService) { }

  public ngOnInit() {
    this.getAllCity();
    this.getAllCountry();
    this.getAllState();
    this.searchInputFunction();
  }
    public searchInputFunction() {
        setTimeout(() => {
            Observable.fromEvent(this.search.nativeElement, 'keyup')
                .pipe(map((evt: any) => evt.target.value), debounceTime(500))
                .subscribe((text: string) => {
                    if (text === '') {
                        this.cityPojo.page = 0;
                        this.cityPojo.keyword = null;
                        this.getAllCity();
                    } else {
                        this.cityPojo.page = 0;
                        this.getAllCity();
                    }

                });
        }, 500);
    }
    public getAllCountry() {
        this.spinner = true;
        this.countryManagementService.getAll()
            .subscribe((res) => {
                this.spinner = false;
                this.countryData = res;
                console.log('contry Data', this.countryData);
            }, (err: HttpErrorResponse) => {
                this.spinner = false;
                this.utilityService.errorHandler(err);
                console.error(err);
            });
    }

    public getAllState() {
        this.spinner = true;
        this.stateManagementService.getAll(this.statePojo)
            .subscribe((res) => {
                this.spinner = false;
                this.stateData = res;
            }, (err: HttpErrorResponse) => {
                this.spinner = false;
                this.utilityService.errorHandler(err);
                console.error(err);
            });

    }

  public getAllCity() {
    this.spinner = true;
    this.cityManagementService.getAll(this.cityPojo)
    .subscribe((res) => {
      this.spinner = false;
      this.cityPojo.sortBy = res.content.name;
      this.cityData = res.content;
      this.totalElements = res.totalElements;
     /* this.totalAccessData = res.data.totalElements;*/
      console.log(this.cityData, '<----------------------------res');
    }, (err: HttpErrorResponse) => {
      this.spinner = false;
      this.utilityService.errorHandler(err);
      console.error(err);
    });

  }

    public selectCountry(id) {
        if ( this.showHide === true ) {
            this.stateManagementService.getAllByCountry(id)
                .subscribe((res) => {
                    this.spinner = false;
                    this.stateData = res;
                }, (err: HttpErrorResponse) => {
                    this.spinner = false;
                    this.utilityService.errorHandler(err);
                    console.error(err);
                });
        }
    }
    public selectState(id) {
        if ( this.showHide === true ) {
            this.cityManagementService.getAllByState(id)
                .subscribe((res) => {
                    this.spinner = false;
                    this.cityData = res;
                }, (err: HttpErrorResponse) => {
                    this.spinner = false;
                    this.utilityService.errorHandler(err);
                    console.error(err);
                });
        }
    }

    public deleteItem(id) {

        Swal.fire({
            title: 'Are you sure?',
            text: 'You will not be able to recover this State',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it',
        }).then((result) => {

            if (result.value) {
                this.cityManagementService.delete(id)
                    .subscribe((response) => {
                        if (response) {
                            Swal.fire(
                                'Deleted',
                                'City deleted successfully',
                                'success',
                            );
                            this.getAllCity();
                        }

                    }, (err: HttpErrorResponse) => {
                        this.utilityService.errorHandler(err.error);

                        console.error('Error occurred while deleting City', err);
                    });
            } else if (result.dismiss === Swal.DismissReason.cancel) {

                Swal.fire(
                    'Cancelled',
                    'Your City is safe :)',
                    'error',
                );
            }

        });

    }

 public pageChange(p) {
    this.cityPojo.page = p.page - 1;
    this.getAllCity();
  }

    public searchCity() {
        this.cityPojo.page = 0;
        this.getAllCity();
    }

    public clearCity() {
        this.cityPojo.page = 0;
        this.cityPojo.keyword = null;
        this.getAllCity();
    }

  public editItem(id) {
    this.router.navigate(['/city-management/update', id]);
  }

  public addItem() {
    this.router.navigate(['/city-management/add']);
  }
    public onEventList(event, id ) {
        if (event.checked === true) {
            this.cityData.blocked = false;
            this.cityData.remark = 'Re-Activated';
            this.cityManagementService.active(id , this.cityData).subscribe((res) => {
                console.log(res, this.cityData);
            });
        } else {
            this.cityData.blocked = true;
            this.cityData.remark = 'Blocked';
            this.cityManagementService.deactive(id , this.cityData).subscribe((res) => {
                console.log(res, this.cityData);
            });
        }

    }

}
