import {HttpErrorResponse} from '@angular/common/http';
import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {debounceTime, map} from 'rxjs/internal/operators';
import {Observable} from 'rxjs/Rx';
import {UtilityService} from '../../utilityservices/utility.service';
import {CustomerProfilesService} from '../customer-profiles.service';

@Component({
  selector: 'app-customer-profiles-list',
  templateUrl: './customer-profiles-list.component.html',
  styleUrls: ['./customer-profiles-list.component.scss'],
})
export class CustomerProfilesListComponent implements OnInit {

  /* Customeruserfilter = {
   actionCode: 'ACTION_GET_USER',
   requestBody: {
     domain: 'default',
     keywords: null,
     page: 0,
     pageSize: 10
   }
 };*/
  @ViewChild('search', { static: false}) public search: ElementRef;
  public Customeruserfilter = {
    actionCode: 'ACTION_GET_USERPROFILE',
    requestBody: {
      domain: 'default',
      page: 0,
      pageSize: 25,
      sortBy: 'createdOn desc',
      keywords: null,
    },
  };

  public spinner = false;
  public allUsers = [];
  public totalCustomerProfileListData: any;
  constructor(private router: Router,
              private utilityService: UtilityService,
              private userService: CustomerProfilesService) { }

  public ngOnInit() {
    this.CustomerAllUser();
    this.searchInputFunction();
  }
  public searchInputFunction() {
    setTimeout(() => {
      Observable.fromEvent(this.search.nativeElement, 'keyup')
        .pipe(map((evt: any) => evt.target.value), debounceTime(500))
        .subscribe((text: string) => {
          if (text === '') {
            this.Customeruserfilter.requestBody.page = 0;
            this.Customeruserfilter.requestBody.keywords = null;
            this.CustomerAllUser();
          } else {
            this.Customeruserfilter.requestBody.page = 0;
            this.CustomerAllUser();
          }

        });
    }, 500);
  }

  public clearCertificationTest() {
    this.Customeruserfilter.requestBody.page = 0;
    this.Customeruserfilter.requestBody.keywords = null;
    this.CustomerAllUser();
  }
  public searchCertificationTest() {
    this.Customeruserfilter.requestBody.page = 0;
    this.CustomerAllUser();
  }

  public CustomerAllUser() {
    this.spinner = true;
    if (this.Customeruserfilter.requestBody.keywords === '') {
      delete  this.Customeruserfilter.requestBody.keywords;
    }
    const filter = JSON.parse(JSON.stringify(this.Customeruserfilter));
    this.userService.getAll(filter)
      .subscribe((res) => {
        this.spinner = false;
        this.allUsers = res.data.content;
        this.totalCustomerProfileListData = res.data.totalElements;
        console.log(res, 'res');
      }, (err: HttpErrorResponse) => {
        this.spinner = false;
        this.utilityService.errorHandler(err);
        console.error(err);
      });
  }

  /*  CustomerAllUser () {
      this.spinner = true;
      this.userService.CustomerAllUsers(this.Customeruserfilter)
          .subscribe(res => {
            console.log(res);
            this.spinner = false;
            this.allUsers = res.data.content;
            this.totalCustomerProfileListData = res.data.totalElements;
          }, (err: HttpErrorResponse) => {
            this.spinner = false;
            console.error(err);
            this.utilityService.errorHandler(err);
          });
    }*/

  public addItem() {
    this.router.navigate(['/customer-profiles/add']);
  }

  public editCertificationTest(id) {
    this.router.navigate(['/customer-profiles/update', id]);
  }

  public pageChange(p) {
    this.Customeruserfilter.requestBody.page = p.page - 1;
    this.CustomerAllUser();
  }

}
