import {HttpClient} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {tap} from 'rxjs/internal/operators';
import {Observable} from 'rxjs/Rx';
import {ConstantService} from '../utilityservices/constant.service';

@Injectable({
  providedIn: 'root',
})
export class StoreService {

  constructor(private constantService: ConstantService,
              private http: HttpClient) { }

  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + localStorage.getItem('token'),
  });

  public getAll(filter): Observable<any> {
    return this.http.post(this.constantService.storeService + '/api/store/filter', filter)
      .pipe(tap((_) => this.log(`all store get successfully`)));
  }

  public update(filter): Observable<any> {
    return this.http.put(this.constantService.storeService + '/api/store/update', filter)
      .pipe(tap((_) => this.log(`store update successfully`)));
  }

  public add(filter): Observable<any> {
    return this.http.post(this.constantService.storeService + '/api/store/create', filter)
      .pipe(tap((_) => this.log(`store update successfully`)));
  }

  public getById(id): Observable<any> {
    return this.http.get(this.constantService.storeService + '/api/store/find/' + id + '?actionCode=ACTION_FIND_STORE')
      .pipe(tap((_) => this.log(`get by id successfully`)));
  }

  public deleteById(id): Observable<any> {
    return this.http.delete(this.constantService.storeService + '/api/store/delete/' + id + '?actionCode=ACTION_DELETE_STORE')
      .pipe(tap((_) => this.log(`delete by id successfully`)));
  }

  public log(message) {
    console.log(message);
  }
}
