import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {ConstantService} from '../utilityservices/constant.service';

@Injectable({
  providedIn: 'root',
})
export class CityManagementService {
  public loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
  constructor(private http: HttpClient,
              private constantService: ConstantService) { }

  public getAll(filter): Observable<any> {
    return this.http.post(this.constantService.userService + '/system/city/filter' , filter)
      .pipe(tap((_res) => this.log(`find city successfully`)));
  }

  public getAllByCountry(id): Observable<any> {
    return this.http.get(this.constantService.userService + '/system/city/bycountry/' + id)
      .pipe(tap((_res) => this.log(`find country successfully`)));
  }

  public getAllByState(id): Observable<any> {
    return this.http.get(this.constantService.userService + '/system/city/bystate/' + id)
      .pipe(tap((_res) => this.log(`find state successfully`)));
  }

  public create(data): Observable<any> {
    return this.http.post(this.constantService.userService + '/system/city' , data)
      .pipe(tap((_) =>  this.log('city created successfully')));
  }

  public delete(id): Observable<any> {
    return this.http.delete(this.constantService.userService + '/system/city/' + id)
      .pipe(tap((_) =>  this.log('City  deleted successfully')));
  }

  public get(id): Observable<any> {
    return this.http.get(this.constantService.userService + '/system/city/' + id )
      .pipe(tap((_) =>  this.log('City  get successfully')));
  }

  public update(data): Observable<any> {
    return this.http.put(this.constantService.userService + '/system/city' , data)
      .pipe(tap((_) =>  this.log('City  updated successfully')));
  }

  public active(id , data): Observable<any> {
    return this.http.put(this.constantService.userService + '/system/city/activate/' + id , data)
      .pipe(tap((_) => this.log('City Activated Successfully')));
  }

  public deactive(id , data): Observable<any> {
    return this.http.put(this.constantService.userService + '/system/city/block/' + id  , data)
      .pipe(tap((_) => this.log('City Deactivated Successfully')));
  }

  public log(message) {
    console.log(message);
  }

}
