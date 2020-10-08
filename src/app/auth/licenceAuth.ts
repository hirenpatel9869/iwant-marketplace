import {Injectable, ViewChild} from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import {StorageService} from '../utilityservices/storage.service';

declare var $: any;

@Injectable()
export class LicenceAuth implements CanActivate {

 // @ViewChild('licenceModal') licenceModal: ModalDirective;

  constructor(private router: Router, private storage: StorageService) { }

  canActivate() {
    if (sessionStorage.getItem('remainDays') !== '0') {
      this.storage.isAuthenticated = true;
      return true;
    }

   // this.router.navigate(['/dashboard']);

    this.storage.remove('token');
    this.storage.remove('business');
    this.storage.remove('businessId');
    this.storage.isAuthenticated = false;
    this.storage.remove('loggedInUser');
    this.storage.remove('username');
    this.storage.remove('remainDays');
    //this.licenceModal.hide();
    this.router.navigate(['/login']);
    window.sessionStorage.clear();
    return false;
  }
}
