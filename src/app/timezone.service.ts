import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {ConstantService} from './utilityservices/constant.service';
import {tap} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TimezoneService {

  constructor(private http: HttpClient,
              private constantService: ConstantService) { }

  public getTimeZoneAll(): Observable<any> {
    return this.http.get(this.constantService.newService + '/commons/timezone' )
        .pipe(tap((_res) => this.log(`language got successfully`)));  }

  public log(message) {
    console.log(message);
  }

}
