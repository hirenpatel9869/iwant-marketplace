import {Injectable} from '@angular/core';

@Injectable()
export class StorageService {

  isAuthenticated = false;
  loggedInUser = {};

  /**
   * Sets an item to localStorage
   * @param item
   * @param key
   */
  set(item: any, key: string): void {
    if (typeof item === 'object') {
      localStorage.setItem(key, JSON.stringify(item));
    } else {
      localStorage.setItem(key, item);
    }
  }

  get(key: string): any {
    if (key) {
      return localStorage.getItem(key);
    }
  }

  remove(key: string): void {
    if (key) {
      localStorage.removeItem(key);
    }
  }
}
