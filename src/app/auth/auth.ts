import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Principal } from '../auth/principal.service';
import {StorageService} from '../utilityservices/storage.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router,
              private storage: StorageService,
              private principal: Principal) { }

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Promise<boolean>  {
 /*   if (this.storage.get('token')) {
      this.storage.isAuthenticated = true;
      return true;
    }

    // not logged in so redirect to login page
    this.router.navigate(['/login']);
    return false;*/

    if (this.storage.get('token')) {

      if (!this.principal.isAuthenticated()) {
        this.principal.identity(true).then((account) => {});
      }

      this.storage.isAuthenticated = this.principal.isAuthenticated();

    } else {

      this.storage.isAuthenticated = false;

      this.router.navigate(['/login']);

      return false;
    }

    const authorities = route.data.authorities;

    if (authorities == 'undefined') {
       return true;
    }

    if (!authorities || authorities.length === 0) {

      this.storage.isAuthenticated = this.principal.isAuthenticated();

      return true;
    }

    return this.checkLogin(authorities, state.url);
  }

  public checkLogin(authorities: string[], url: string): Promise<boolean> {

    const principal = this.principal;
    return Promise.resolve(principal.identity().then((account) => {

      if (account && principal.hasAnyAuthorityDirect(authorities)) {
        this.storage.isAuthenticated = this.principal.isAuthenticated();
        return true;
      }

      // this.stateStorageService.storeUrl(url);
      this.router.navigate(['/accessdenied']).then(() => {
        this.storage.isAuthenticated = false;
        // only show the login dialog, if the user hasn't logged in yet
       /* if (!account) {
          this.loginModalService.open();
        }*/
      });
      // this.router.navigate(['/login']);
      return false;
    }));
  }
}
