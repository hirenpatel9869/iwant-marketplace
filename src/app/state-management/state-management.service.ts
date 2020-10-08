import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {ConstantService} from '../utilityservices/constant.service';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class StateManagementService {
  public loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
  constructor(private http: HttpClient,
              private constantService: ConstantService) { }

  public getAll(filter): Observable<any> {
    return this.http.post(this.constantService.userService + '/system/states/filter', filter)
      .pipe(tap((_res) => this.log(`find state successfully`)));  }

  public getAllByCountry(id): Observable<any> {
    return this.http.get(this.constantService.userService + '/system/states/bycountry/' + id)
      .pipe(tap((_res) => this.log(`find state successfully`)));  }

  public create(data): Observable<any> {
    return this.http.post(this.constantService.userService + '/system/states' , data)
      .pipe(tap((_) =>  this.log('country state successfully')));
  }
  /*
   delete(id): Observable<any> {
   return this.http.delete(this.constantService.userProfile + '/common/country/delete/' + id + '?actionCode=ACTION_DELETE_COUNTRY')
   .pipe(tap(_ =>  this.log('country deleted successfully')));
   }*/

  public delete(id): Observable<any> {
    return this.http.delete(this.constantService.userService + '/system/states/' + id )
      .pipe(tap((_) =>  this.log('state deleted successfully')));
  }

  public get(id): Observable<any> {
    return this.http.get(this.constantService.userService + '/system/states/' + id)
      .pipe(tap((_) =>  this.log('state get successfully')));
  }

  /* update(data): Observable<any> {
   return this.http.put(this.constantService.userProfile + '/common/country/update' , data)
   .pipe(tap(_ =>  this.log('country updated successfully')));
   }*/
  public update(data): Observable<any> {
    return this.http.put(this.constantService.userService + '/system/states' , data)
      .pipe(tap((_) =>  this.log('state updated successfully')));
  }

  public active(id , data): Observable<any> {
    return this.http.put(this.constantService.userService + '/system/states/activate/' + id , data)
      .pipe(tap((_) => this.log('State Activated Successfully')));
  }

  public deactive(id , data): Observable<any> {
    return this.http.put(this.constantService.userService + '/system/states/block/' + id  , data)
      .pipe(tap((_) => this.log('State Dectivated Successfully')));
  }

  public log(message) {
    console.log(message);
  }
}
