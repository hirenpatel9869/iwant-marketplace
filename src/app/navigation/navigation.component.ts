import {animate, state, style, transition, trigger} from '@angular/animations';
import { Component, OnInit} from '@angular/core';
import { SharedService } from '../shared/services/shared.service';
import {StorageService} from '../utilityservices/storage.service';
@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss'],
    animations: [
        trigger('toggleHeight', [
            state('inactive', style({
                height: '0',
                opacity: '0',
            })),
            state('active', style({
                height: '*',
                opacity: '1',
            })),
            transition('inactive => active', animate('200ms ease-in')),
            transition('active => inactive', animate('200ms ease-out')),
        ]),
    ],
})

export class NavigationComponent implements OnInit {
  public sidebarVisible: boolean;
  constructor(private sharedService: SharedService,
              public storage: StorageService,
    ) {
        sharedService.sidebarVisibilitySubject.subscribe((value) => {
            this.sidebarVisible = value;
        });
    }


    // Sub menu visibilities
    public navigationSubState: any = {
        AssetManagement : 'active',
        Tables: 'active',
        Forms: 'active',
        SamplePages: 'active',
        UserInterface: 'active',
        Components: 'active',
        Charts: 'active',
        Product_Management: 'active',
        Orders_Management: 'active',
        Customer_Relations: 'active',
        System_Administration: 'active',
        E_Learning: 'active',
        country_management: 'active',
        payment: 'active',
        Teacher_Catalog: 'active',
    };
  public navigationSubStatechild: any = {
        AssetManagement : 'active',
        Tables: 'active',
        Forms: 'active',
        SamplePages: 'active',
        UserInterface: 'active',
        Components: 'active',
        Charts: 'active',
        Product_Management: 'active',
        Orders_Management: 'active',
        Customer_Relations: 'active',
        System_Administration: 'active',
        E_Learning: 'active',
        country_management: 'active',
        Teacher_Catalog: 'active',
    };
  public navigationSubConfigurations: any = {
        AssetManagement : 'active',
        Tables: 'active',
        Forms: 'active',
        SamplePages: 'active',
        UserInterface: 'active',
        Components: 'active',
        Charts: 'active',
        Product_Management: 'active',
        Orders_Management: 'active',
        Customer_Relations: 'active',
        System_Administration: 'active',
        E_Learning: 'active',
        country_management: 'active',
        Teacher_Catalog: 'active',
    };
  public navigationSubPermissions: any = {
    AssetManagement : 'active',
    Tables: 'active',
    Forms: 'active',
    SamplePages: 'active',
    UserInterface: 'active',
    Components: 'active',
    Charts: 'active',
    Product_Management: 'active',
    Orders_Management: 'active',
    Customer_Relations: 'active',
    System_Administration: 'active',
    E_Learning: 'active',
    country_management: 'active',
      Teacher_Catalog: 'active',
  };

   public business: any;
  public authorities: any;
  public showAuthority = false;

    // Toggle sub menu
    public toggleNavigationSub(menu, event) {
        event.preventDefault();
        this.navigationSubState[menu] = (this.navigationSubState[menu] === 'inactive' ? 'active' : 'inactive');
    }

  // Toggle sub menu
  public toggleNavigationchild(menu, event) {
    event.preventDefault();
    this.navigationSubStatechild[menu] = (this.navigationSubStatechild[menu] === 'inactive' ? 'active' : 'inactive');
  }

  // Toggle sub menu
  public toggleNavigationConfigurations(menu, event) {
    event.preventDefault();
    this.navigationSubConfigurations[menu] = (this.navigationSubConfigurations[menu] === 'inactive' ? 'active' : 'inactive');
  }

  // Toggle sub menu
  public toggleNavigationPermissions(menu, event) {
    event.preventDefault();
    this.navigationSubPermissions[menu] = (this.navigationSubPermissions[menu] === 'inactive' ? 'active' : 'inactive');
  }
    public ngOnInit() {

      const x = localStorage.getItem('business');
      this.business = JSON.parse(x);
      this.authorities = localStorage.getItem('authorities');

    }

  public logout(): void {
    this.storage.remove('token');
    this.storage.remove('business');
    this.storage.remove('businessId');
    this.storage.remove('loggedInUser');
    this.storage.remove('username');
    this.storage.remove('remainDays');
    window.localStorage.clear();
   // this.getConfig();

  }

  public toggleSidebarVisibility() {
    this.sharedService.toggleSidebarVisibilty();
  }

}
