import {
  Component, EventEmitter, Input, OnInit, Output, QueryList, ViewChild,
  ViewChildren,
} from '@angular/core';
import {Router} from '@angular/router';
import {ModalDirective} from 'ngx-bootstrap';
import {isNullOrUndefined} from 'util';
import { SharedService } from '../shared/services/shared.service';
import {ConstantService} from '../utilityservices/constant.service';
import {StorageService} from '../utilityservices/storage.service';
import {UtilityService} from '../utilityservices/utility.service';

import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Principal} from '../auth/principal.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit  {

  constructor(private sharedService: SharedService,
              private uitlity: UtilityService,
              public storage: StorageService,
              private http: HttpClient,
              private constant: ConstantService,
              private router: Router,
              private principal: Principal,
  ) {

    // translate.use(browserLang.match(/en|id/) ? browserLang : 'en');

    sharedService.maThemeSubject.subscribe((value) => {
      this.maThemeModel = value;
    });

    this.tasksData = [
      {
        name: 'HTML5 Validation Report',
        completed: 95,
        color: '',
      }, {
        name: 'Google Chrome Extension',
        completed: '80',
        color: 'success',
      }, {
        name: 'Social Intranet Projects',
        completed: '20',
        color: 'warning',
      }, {
        name: 'Bootstrap Admin Template',
        completed: '60',
        color: 'danger',
      }, {
        name: 'Youtube Client App',
        completed: '80',
        color: 'info',
      },
    ];

  }
  public authorities: any;
  public message;

  public items: Observable<any[]>;

  @ViewChild('disapproved', {static: false}) public disapproved: ModalDirective;
  @ViewChild('licenceModal', {static: false}) public licenceModal: ModalDirective;

  private headers = new Headers({
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + localStorage.getItem('token'),
  });

  public storeLogo = localStorage.getItem('STORE_LOGO');
  @Output() public myEvent = new EventEmitter();
  public messagesData: Array<any>;
  public tasksData: Array<any>;
  public maThemeModel = 'green';
  public merchant: any;
  public branchDetails: any;

  public title = 'Ayo-Blazar';
  public filterBL = {
    businessIds : [this.storage.get('businessId')],
    active : true,
  };

  public remainDays: any;

  public business: any;
  public user: any;
  public companyName: any;

  public setTheme() {
    this.sharedService.setTheme(this.maThemeModel);
  }

  public logout(): void {
    this.storage.isAuthenticated = false;
    window.localStorage.clear();
    window.sessionStorage.clear();
    this.router.navigate(['/login']);
  }

  public logoutFromAdmin(): void {
    this.storage.isAuthenticated = false;
    window.localStorage.clear();
    window.sessionStorage.clear();
    this.router.navigate(['/login']);
  }
  public ngOnInit() {
    const x = localStorage.getItem('business');
    this.companyName = localStorage.getItem('companyName');
    this.user = JSON.parse(localStorage.getItem('loggedInUser'));
    this.business = JSON.parse(x);
    this.authorities = localStorage.getItem('authorities');
  }
}
