import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {ConstantService} from '../utilityservices/constant.service';
import {StorageService} from '../utilityservices/storage.service';

@Injectable()
export class UserService {
  public loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
  public headers = new HttpHeaders(
      /*{'Authorization' : 'Basic aXRwbDppd2FudHVubGltaXRlZA==' , withCredentials: true}*/
      {Authorization: 'Basic aXRwbDppd2FudHVubGltaXRlZA=='},
  );
  private headers1 = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'Basic d2ViX2FwcDo=',
  });

  constructor(private http: HttpClient,
              private constant: ConstantService,
              private storage: StorageService) {
  }

  /**
   * Allows user to sign in with valid credentials
   *
   * @param credentials
   * @returns {Promise<TResult|TResult2|TResult1>}
   */
  /* login(credentials): Promise<any> {
     /!*credentials['grant_type'] = 'password';
     let serializedCredentials = '';
     for (let key in credentials) {
       serializedCredentials += `${key}=${credentials[key]}&`;
     }*!/
     return this.http.post(this.constant.oauthURL, credentials, {headers: this.headers})
       .toPromise()
       .then(function (response) {
         response = response.json();
         return response;
       })
       .catch(function (err) {
         return err;
       });
   }
 */

  /*login(credentials): Observable<any> {
      return this.http.post(this.constant.oauthURL, credentials , {headers : this.headers})
          .pipe(tap(_res => this.log(`login successfully`)));
  }*/

  public login(credential): Observable<any> {
    return this.http.post(this.constant.oauthURL, credential,
        {
          headers: this.headers,
        },
    ).pipe(tap((_) => this.log(`user login successfully`)));
  }

  /**
   * Return User based on id.
   *
   * @param id
   * @returns {Promise<TResult|TResult2|TResult1>}
   */

  /*  getUserById(id: string): Promise<any> {
      return this.http.get(this.constant.user +'users/id/' + id , {headers: this.headers} )
        .toPromise()
        .then(resonse => {
          return resonse.json();
        }).catch(err => {
          return err;
        });
    }*/

  public getUserById(id: string): Observable<any> {
    return this.http.get(this.constant.user + 'users/id/' + id)
        .pipe(tap((_) => this.log(`user details fetched successfully`)));
  }

  /*
    sendOTP(data): Promise<any> {
      return new Promise((resolve, reject) => {
        return this.http.post(this.constant.iwantuua + '/sendOTP', data, {headers: this.headers1})
          .toPromise()
          .then(function (response) {
            resolve(response.json())
          })
          .catch(function (err) {
            reject(err.json() || err);
          });
      });
    }*/

  public sendOTP(data): Observable<any> {
    return this.http.post(this.constant.iwantuua + '/sendOTP', data, {headers: this.headers1})
        .pipe(tap((_) => this.log(`otp send successfully`)));
  }

  /*forgetPassword(data): Promise<any> {
  return new Promise((resolve, reject) => {
    return this.http.post(this.constant.iwantuua + '/users/update/password', data)
      .toPromise()
      .then(function (response) {
        resolve(response.json());
      })
      .catch(function (err) {
        reject(err.json() || err);
      });
  });
}*/

  public forgetPassword(data): Observable<any> {
    return this.http.post(this.constant.iwantuua + '/users/update/password', data)
        .pipe(tap((res) => this.log(`update password`)));
  }

  public getAllUsers(): Observable<any> {
    return this.http.get(this.constant.userService + '/users?actionCode=ACTION_GET_USER')
        .pipe(tap((res) => this.log(`get All successfully`)));
  }

  public CustomerAllUsers(data): Observable<any> {
    return this.http.post(this.constant.userService + '/users', data)
        .pipe(tap((res) => this.log(` Customer All Users successfully`)));
  }

  public createUsers(data): Observable<any> {
    return this.http.post(this.constant.userProfile + '/api/user/registration', data)
        .pipe(tap((res) => this.log(`cuser created successfully`)));
  }

  public update(data): Observable<any> {
    return this.http.post(this.constant.userProfile + '/api/user/profile/update', data)
        .pipe(tap((_) => this.log('City  updated successfully')));
  }

  public getAll(req): Observable<any> {
    return this.http.post(this.constant.userProfile + '/api/user/getAll', req)
        .pipe(tap((_res) => this.log(`find city successfully`)));
  }

  public get(id): Observable<any> {
    return this.http.get(this.constant.userProfile + '/api/user/get/' + id + '?actionCode=ACTION_FIND_USERPROFILE')
        .pipe(tap((_) => this.log('City  get successfully')));
  }

  public allCityGet(): Observable<any> {
    return this.http.get(this.constant.userService + '/system/city/all/' + this.loggedInUser.domain)
        .pipe(tap((_) => this.log(`get all city successfully`)));
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.json() || error);
  }

  public log(message) {
    console.log(message);
  }

}
