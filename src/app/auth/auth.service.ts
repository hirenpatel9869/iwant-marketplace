import {Injectable} from '@angular/core';
import {StorageService} from '../utilityservices/storage.service';

@Injectable()
export class AuthService {

  constructor(private storage: StorageService) {
  };

  isAuthenticated(): boolean {
    let token = this.storage.get('token');
    if (token) {
      this.storage.isAuthenticated = true;
      return true;
    } else {
      return false;
    }
  }
}
