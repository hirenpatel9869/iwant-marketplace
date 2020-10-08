import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {ConstantService} from './utilityservices/constant.service';

@Injectable({
  providedIn: 'root',
})
export class LocaleIdService {

  constructor(private http: HttpClient,
              private constantService: ConstantService) { }

  public getLocaleAll(): Observable<any> {
    return this.http.get(this.constantService.newService + '/commons/locale' )
        .pipe(tap((_res) => this.log(`language got successfully`)));  }

  public log(message) {
    console.log(message);
  }

}
