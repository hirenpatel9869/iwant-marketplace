import {HttpErrorResponse} from '@angular/common/http';
import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {debounceTime, map} from 'rxjs/internal/operators';
import Swal from 'sweetalert2';
import {CountryManagementService} from '../../country-management/country-management.service';
import {StateManagementService} from '../state-management.service';
import {UtilityService} from '../../utilityservices/utility.service';
@Component({
  selector: 'app-state-management-list',
  templateUrl: './state-management-list.component.html',
  styleUrls: ['./state-management-list.component.scss'],
})
export class StateManagementListComponent implements OnInit {
    public loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    public showHide = false;
    public spinner = false;
    public countryData: any;
    public stateData: any;
    public statePojo = {
        domain : this.loggedInUser.domain,
        keyword : null,
        sort: null,
        page : 0,
        sortBy: null,
        pageSize : 20,
    };
    public totalElements = null;
    @ViewChild('search', { static: false}) public search: ElementRef;
    constructor(private router: Router,
                private utilityService: UtilityService,
                private countryManagementService: CountryManagementService,
                private stateManagementService: StateManagementService) { }

  public ngOnInit() {
    this.getAllState();
    this.getAllCountry();
    this.searchInputFunction();
  }

    public searchInputFunction() {
        setTimeout(() => {
            Observable.fromEvent(this.search.nativeElement, 'keyup')
                .pipe(map((evt: any) => evt.target.value), debounceTime(500))
                .subscribe((text: string) => {
                    if (text === '') {
                        this.statePojo.page = 0;
                        this.statePojo.keyword = null;
                        this.getAllState();
                    } else {
                        this.statePojo.page = 0;
                        this.getAllState();
                    }

                });
        }, 500);
    }
  public getAllState() {
    this.spinner = true;
    this.stateManagementService.getAll(this.statePojo)
            .subscribe((res) => {
                this.spinner = false;
                this.stateData = res.content;
                this.statePojo.sortBy = res.content.name,
                this.totalElements = res.totalElements;
            }, (err: HttpErrorResponse) => {
                this.spinner = false;
                this.utilityService.errorHandler(err);
                console.error(err);
            });

  }

    public getAllCountry() {
        this.spinner = true;
        this.countryManagementService.getAll()
            .subscribe((res) => {
                this.spinner = false;
                this.countryData = res;
                console.log('CountryData', this.countryData);
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
        console.log(name);
    }

  public addItem() {
    this.router.navigate(['/state-management/add']);
  }

  public editItem(id) {
    this.router.navigate(['/state-management/update', id]);
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
        this.stateManagementService.delete(id)
            .subscribe((response) => {
              if (response) {
                Swal.fire(
                    'Deleted',
                    'State deleted successfully',
                    'success',
                );
                this.getAllState();
              }

            }, (err: HttpErrorResponse) => {
              this.utilityService.errorHandler(err.error);

              console.error('Error occurred while deleting State', err);
            });
      } else if (result.dismiss === Swal.DismissReason.cancel) {

        Swal.fire(
            'Cancelled',
            'Your State is safe :)',
            'error',
        );
      }

    });

  }

  public searchState() {
      this.statePojo.page = 0;
      this.getAllState();
  }

  public clearState() {
      this.statePojo.page = 0;
      this.statePojo.keyword = null;
      this.getAllState();
  }
  public pageChange(p) {
      this.statePojo.page = p.page - 1;
      this.getAllState();
  }

    public onEventList(event, id ) {
        if (event.checked === true) {
            this.stateData.blocked = false;
            this.stateData.remark = 'Re-Activated';
            this.stateManagementService.active(id , this.stateData).subscribe((res) => {
                console.log(res, this.stateData);
            });
        } else {
            this.stateData.blocked = true;
            this.stateData.remark = 'Blocked';
            this.stateManagementService.deactive(id , this.stateData).subscribe((res) => {
                console.log(res, this.stateData);
            });
        }

    }

}
