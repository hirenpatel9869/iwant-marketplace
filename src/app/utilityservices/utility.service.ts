import {HttpClient} from '@angular/common/http';
import { Injectable} from '@angular/core';
import {NativeDateAdapter} from '@angular/material';
import {Router} from '@angular/router';
import {Toast, ToasterConfig, ToasterService} from 'angular2-toaster';
import {ConstantService} from './constant.service';
import {StorageService} from './storage.service';
declare var $: any;

@Injectable()

export class UtilityService {
  constructor(toasterService: ToasterService,
              private http: HttpClient,
              private storage: StorageService,
              private constant: ConstantService,
              private router: Router,
  ) {

    this.toasterService = toasterService;
  }

  private toasterService: ToasterService;

  public config1: ToasterConfig = new ToasterConfig({
    positionClass: 'toast-top-right',
  });

  public showGallery: false;

  public words = [];
  public get() {
    return this.showGallery;
  }
  public openGallery(value) {
    // console.log("-+-+-+",value);
    this.showGallery = value;
  }

  /*   openGallery() {
      $('#gallery').model('show');
    }*/

  public popToast(data) {
    const toast: Toast = {
      type: data.type,
      title: data.title,
      timeout: data.timeout,
      body: data.body,
    };

    this.toasterService.pop(toast);
  }
  public convertNumberToWords(amount): any {
    this.words[0] = '';
    this.words[1] = 'One';
    this.words[2] = 'Two';
    this.words[3] = 'Three';
    this.words[4] = 'Four';
    this.words[5] = 'Five';
    this.words[6] = 'Six';
    this.words[7] = 'Seven';
    this.words[8] = 'Eight';
    this.words[9] = 'Nine';
    this.words[10] = 'Ten';
    this.words[11] = 'Eleven';
    this.words[12] = 'Twelve';
    this.words[13] = 'Thirteen';
    this.words[14] = 'Fourteen';
    this.words[15] = 'Fifteen';
    this.words[16] = 'Sixteen';
    this.words[17] = 'Seventeen';
    this.words[18] = 'Eighteen';
    this.words[19] = 'Nineteen';
    this.words[20] = 'Twenty';
    this.words[30] = 'Thirty';
    this.words[40] = 'Forty';
    this.words[50] = 'Fifty';
    this.words[60] = 'Sixty';
    this.words[70] = 'Seventy';
    this.words[80] = 'Eighty';
    this.words[90] = 'Ninety';
    amount = amount.toString();
    const atemp = amount.split('.');
    const number = atemp[0].split(',').join('');
    const n_length = number.length;
    let words_string = '';
    if (n_length <= 9) {
      const n_array = [0, 0, 0, 0, 0, 0, 0, 0, 0];
      const received_n_array = [];
      for (let i = 0; i < n_length; i++) {
        received_n_array[i] = number.substr(i, 1);
      }
      for (let i = 9 - n_length, j = 0; i < 9; i++, j++) {
        n_array[i] = received_n_array[j];
      }
      for (let i = 0, j = 1; i < 9; i++, j++) {
        if (i == 0 || i == 2 || i == 4 || i == 7) {
          if (n_array[i] == 1) {
            n_array[j] = 10 + Number(n_array[j]);
            n_array[i] = 0;
          }
        }
      }
      let value: any;
      for (let i = 0; i < 9; i++) {
        if (i == 0 || i == 2 || i == 4 || i == 7) {
          value = n_array[i] * 10;
        } else {
          value = n_array[i];
        }
        if (value != 0) {
          words_string += this.words[value] + ' ';
        }
        if ((i == 1 && value != 0) || (i == 0 && value != 0 && n_array[i + 1] == 0)) {
          words_string += 'Crores ';
        }
        if ((i == 3 && value != 0) || (i == 2 && value != 0 && n_array[i + 1] == 0)) {
          words_string += 'Lakhs ';
        }
        if ((i == 5 && value != 0) || (i == 4 && value != 0 && n_array[i + 1] == 0)) {
          words_string += 'Thousand ';
        }
        if (i == 6 && value != 0 && (n_array[i + 1] != 0 && n_array[i + 2] != 0)) {
          words_string += 'Hundred and ';
        } else if (i == 6 && value != 0) {
          words_string += 'Hundred ';
        }
      }
      words_string = words_string.split('  ').join(' ');
    }
    return words_string;
  }

  /**
   * Return all merchants
   * @returns {Promise<any[]>}
   */
  /*
    getAllCountry(): Promise<any> {
      return new Promise((resolve, reject) => {
        this.http.get(this.constant.iwantuua + '/country/list?size=1000')
          .toPromise()
          .then(response => {
            resolve(response.json());
          })
          .catch(err => {
            reject(err);
          });
      });
    }

    getstates(id): Promise<any> {
      let string = '/' + id + '/state/list?page=0&size=1000'
      return this.http.get(this.constant.iwantuua + '/country' + string)
        .toPromise()
        .then( response => {
          response = response.json();
          return response;
        })
        .catch(err => {
          return err;
        });
    }

    getcities(id): Promise<any> {

      let string = '/' + id + '/city/list?page=0&size=1000'
      return this.http.get(this.constant.iwantuua + '/state' + string)
        .toPromise()
        .then(response => {
          response = response.json();
          return response;
        })
        .catch(err => {
          return err;
        });
    }

    getcitiesWidthFilter(id,search): Promise<any> {
      let query ;
      if(search){
        query = '&search=' + search ;
      }
      let string = '/' + id + '/city/list?page=0&size=1000' + query ;
      return this.http.get(this.constant.iwantuua + '/state' + string)
        .toPromise()
        .then(response => {
          response = response.json();
          return response;
        })
        .catch(err => {
          return err;
        });
    }

  */
  /* getcitiesByCountryId(id, search): Promise<any> {
     let query ;
     query =  '/city/countryId' + '/' + id +'?page=0&size=12' ;
     if(search){
       query = '/city/countryId' + '/' + id +'?page=0&size=12' + '&search=' + search ;
     }

     return this.http.get(this.constant.iwantuua + query)
       .toPromise()
       .then(response => {
         response = response.json();
         return response;
       })
       .catch(err => {
         return err;
       });
   }
 */

  public getReplaceImageURL(url) {
    if (url && url.startsWith('https://res.cloudinary.com')) {
      return url.replace('\/upload\/', '\/upload\/q_auto:low\/');
    } else {
      return url;
    }
  }

  public tzDateFormate(date) {
    return this.formatDate(date) + 'T00:00:00.000Z';
  }

  public formatDate(date) {
    let d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) { month = '0' + month; }
    if (day.length < 2) { day = '0' + day; }

    return [year, month, day].join('-');
  }

  public errorHandler(data) {
    if (data && data.error === 'invalid_token') {
      localStorage.clear();
      this.storage.isAuthenticated = false;
      this.router.navigate(['/login']);
      console.log(data.error, 'error');
    }
  }

  public createHashMap(arr: any[]) {
    const result = arr.reduce((map, obj) => {
      map[obj.key] = obj.value;
      return map;
    }, {});
    return result;
  }

}

/*export class AppDateAdapter extends NativeDateAdapter {

  public format(date: Date, displayFormat: Object): string {

    if (displayFormat === 'input') {
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      return `${day}-${month}-${year}`;
    } else {
      return date.toDateString();
    }
  }
}*/

export const APP_DATE_FORMATS = {
  parse: {
    dateInput: { month: 'short', year: 'numeric', day: 'numeric' },
  },
  display: {
    dateInput: 'input',
    monthYearLabel: { year: 'numeric', month: 'numeric' },
    dateA11yLabel: { year: 'numeric', month: 'long', day: 'numeric' },
    monthYearA11yLabel: { year: 'numeric', month: 'long' },
  },
};
