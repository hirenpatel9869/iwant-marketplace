import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/internal/operators';
import {ConstantService} from '../utilityservices/constant.service';

@Injectable({
  providedIn: 'root',
})
export class CountryManagementService {
  public loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
  constructor(private http: HttpClient,
              private constantService: ConstantService) { }

  //
  // getAll(): Observable<any> {
  //   return this.http.get(this.constantService.userProfile + '/common/allCountry?actionCode=ACTION_GET_COUNTRY' )
  //       .pipe(tap(_res => this.log(`find country successfully`)));  }

   public getAll(): Observable<any> {
     return this.http.get(this.constantService.userService + '/system/country/findAll/' + 'default')
         .pipe(tap((_res) => this.log(`find country successfully`)));  }

  public create(data): Observable<any> {
    return this.http.post(this.constantService.userService + '/system/country' , data)
        .pipe(tap((_) =>  this.log('country created successfully')));
  }
/*
  delete(id): Observable<any> {
    return this.http.delete(this.constantService.userProfile + '/common/country/delete/' + id + '?actionCode=ACTION_DELETE_COUNTRY')
        .pipe(tap(_ =>  this.log('country deleted successfully')));
  }*/

  public delete(id): Observable<any> {
    return this.http.delete(this.constantService.userService + '/system/country/' + id )
        .pipe(tap((_) =>  this.log('country deleted successfully')));
  }

  public get(id): Observable<any> {
    return this.http.get(this.constantService.userService + '/system/country/' + id)
        .pipe(tap((_) =>  this.log('country get successfully')));
  }

 /* update(data): Observable<any> {
    return this.http.put(this.constantService.userProfile + '/common/country/update' , data)
        .pipe(tap(_ =>  this.log('country updated successfully')));
  }*/
  public update(data): Observable<any> {
    return this.http.put(this.constantService.userService + '/system/country' , data)
        .pipe(tap((_) =>  this.log('country updated successfully')));
  }

  public active(id , data): Observable<any> {
    return this.http.put(this.constantService.userService + '/system/country/activate/' + id , data)
        .pipe(tap((_) => this.log('Country Activated Successfully')));
  }

  public deactive(id , data): Observable<any> {
    return this.http.put(this.constantService.userService + '/system/country/block/' + id  , data)
        .pipe(tap((_) => this.log('Country Dectivated Successfully')));
  }

  public log(message) {
    console.log(message);
  }

}
