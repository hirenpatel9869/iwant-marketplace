import {Component, OnInit, ViewChild} from '@angular/core';
import {ModalDirective} from 'ngx-bootstrap';
import {FormBuilder, FormGroup} from '@angular/forms';
import {UserService} from '../user.service';
import {StorageService} from '../../utilityservices/storage.service';
import {Principal} from '../../auth/principal.service';
import {Router} from '@angular/router';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {SharingDataService} from '../../utilityservices/sharing-data.service';
import {ConstantService} from '../../utilityservices/constant.service';
import {UtilityService} from '../../utilityservices/utility.service';
import {MatSnackBar} from '@angular/material';
import {ToasterConfig} from 'angular2-toaster';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              private localStorage: StorageService,
              private principal: Principal,
              private router: Router,
              private http: HttpClient,
              private sharingDataService: SharingDataService,
              private constantService: ConstantService,
              private utility: UtilityService,
              private storage: StorageService,
              public _snackBar: MatSnackBar,

  ) {
  }
  public spinner = false;
  public confirmPassword1 = null;
  public password1 = null;
  @ViewChild('Changepassword', {static: false}) public Changepassword: ModalDirective;
  @ViewChild('acceptTerms', {static: false}) public acceptTerms: ModalDirective;
  public STORE_LOGO: any;
  public config: any;
  public businessId: any;
  public mobileNumber: any;
  public password: any;
  public otpCode: any;
  public isDisableBtn = false;

  public showHidebtn = false;
  public loginForm: FormGroup;
  public validationError: string;
  public config1: ToasterConfig = new ToasterConfig({
    positionClass: 'toast-top-right',
  });
  public merchant_id: any;
  public countryCode = [
    {
      name: 'Indonesia',
      dial_code: '+62',
      code: 'ID',
    },
    {
      name: 'India',
      dial_code: '+91',
      code: 'IN',
    },
    {
      name: 'Israel',
      dial_code: '+972',
      code: 'IL',
    },
    {
      name: 'Afghanistan',
      dial_code: '+93',
      code: 'AF',
    },
    {
      name: 'Albania',
      dial_code: '+355',
      code: 'AL',
    },
    {
      name: 'Algeria',
      dial_code: '+213',
      code: 'DZ',
    },
    {
      name: 'AmericanSamoa',
      dial_code: '+1 684',
      code: 'AS',
    },
    {
      name: 'Andorra',
      dial_code: '+376',
      code: 'AD',
    },
    {
      name: 'Angola',
      dial_code: '+244',
      code: 'AO',
    },
    {
      name: 'Anguilla',
      dial_code: '+1 264',
      code: 'AI',
    },
    {
      name: 'Antigua and Barbuda',
      dial_code: '+1268',
      code: 'AG',
    },
    {
      name: 'Argentina',
      dial_code: '+54',
      code: 'AR',
    },
    {
      name: 'Armenia',
      dial_code: '+374',
      code: 'AM',
    },
    {
      name: 'Aruba',
      dial_code: '+297',
      code: 'AW',
    },
    {
      name: 'Australia',
      dial_code: '+61',
      code: 'AU',
    },
    {
      name: 'Austria',
      dial_code: '+43',
      code: 'AT',
    },
    {
      name: 'Azerbaijan',
      dial_code: '+994',
      code: 'AZ',
    },
    {
      name: 'Bahamas',
      dial_code: '+1 242',
      code: 'BS',
    },
    {
      name: 'Bahrain',
      dial_code: '+973',
      code: 'BH',
    },
    {
      name: 'Bangladesh',
      dial_code: '+880',
      code: 'BD',
    },
    {
      name: 'Barbados',
      dial_code: '+1 246',
      code: 'BB',
    },
    {
      name: 'Belarus',
      dial_code: '+375',
      code: 'BY',
    },
    {
      name: 'Belgium',
      dial_code: '+32',
      code: 'BE',
    },
    {
      name: 'Belize',
      dial_code: '+501',
      code: 'BZ',
    },
    {
      name: 'Benin',
      dial_code: '+229',
      code: 'BJ',
    },
    {
      name: 'Bermuda',
      dial_code: '+1 441',
      code: 'BM',
    },
    {
      name: 'Bhutan',
      dial_code: '+975',
      code: 'BT',
    },
    {
      name: 'Bosnia and Herzegovina',
      dial_code: '+387',
      code: 'BA',
    },
    {
      name: 'Botswana',
      dial_code: '+267',
      code: 'BW',
    },
    {
      name: 'Brazil',
      dial_code: '+55',
      code: 'BR',
    },
    {
      name: 'British Indian Ocean Territory',
      dial_code: '+246',
      code: 'IO',
    },
    {
      name: 'Bulgaria',
      dial_code: '+359',
      code: 'BG',
    },
    {
      name: 'Burkina Faso',
      dial_code: '+226',
      code: 'BF',
    },
    {
      name: 'Burundi',
      dial_code: '+257',
      code: 'BI',
    },
    {
      name: 'Cambodia',
      dial_code: '+855',
      code: 'KH',
    },
    {
      name: 'Cameroon',
      dial_code: '+237',
      code: 'CM',
    },
    {
      name: 'Canada',
      dial_code: '+1',
      code: 'CA',
    },
    {
      name: 'Cape Verde',
      dial_code: '+238',
      code: 'CV',
    },
    {
      name: 'Cayman Islands',
      dial_code: '+ 345',
      code: 'KY',
    },
    {
      name: 'Central African Republic',
      dial_code: '+236',
      code: 'CF',
    },
    {
      name: 'Chad',
      dial_code: '+235',
      code: 'TD',
    },
    {
      name: 'Chile',
      dial_code: '+56',
      code: 'CL',
    },
    {
      name: 'China',
      dial_code: '+86',
      code: 'CN',
    },
    {
      name: 'Christmas Island',
      dial_code: '+61',
      code: 'CX',
    },
    {
      name: 'Colombia',
      dial_code: '+57',
      code: 'CO',
    },
    {
      name: 'Comoros',
      dial_code: '+269',
      code: 'KM',
    },
    {
      name: 'Congo',
      dial_code: '+242',
      code: 'CG',
    },
    {
      name: 'Cook Islands',
      dial_code: '+682',
      code: 'CK',
    },
    {
      name: 'Costa Rica',
      dial_code: '+506',
      code: 'CR',
    },
    {
      name: 'Croatia',
      dial_code: '+385',
      code: 'HR',
    },
    {
      name: 'Cuba',
      dial_code: '+53',
      code: 'CU',
    },
    {
      name: 'Cyprus',
      dial_code: '+537',
      code: 'CY',
    },
    {
      name: 'Czech Republic',
      dial_code: '+420',
      code: 'CZ',
    },
    {
      name: 'Denmark',
      dial_code: '+45',
      code: 'DK',
    },
    {
      name: 'Djibouti',
      dial_code: '+253',
      code: 'DJ',
    },
    {
      name: 'Dominica',
      dial_code: '+1 767',
      code: 'DM',
    },
    {
      name: 'Dominican Republic',
      dial_code: '+1 849',
      code: 'DO',
    },
    {
      name: 'Ecuador',
      dial_code: '+593',
      code: 'EC',
    },
    {
      name: 'Egypt',
      dial_code: '+20',
      code: 'EG',
    },
    {
      name: 'El Salvador',
      dial_code: '+503',
      code: 'SV',
    },
    {
      name: 'Equatorial Guinea',
      dial_code: '+240',
      code: 'GQ',
    },
    {
      name: 'Eritrea',
      dial_code: '+291',
      code: 'ER',
    },
    {
      name: 'Estonia',
      dial_code: '+372',
      code: 'EE',
    },
    {
      name: 'Ethiopia',
      dial_code: '+251',
      code: 'ET',
    },
    {
      name: 'Faroe Islands',
      dial_code: '+298',
      code: 'FO',
    },
    {
      name: 'Fiji',
      dial_code: '+679',
      code: 'FJ',
    },
    {
      name: 'Finland',
      dial_code: '+358',
      code: 'FI',
    },
    {
      name: 'France',
      dial_code: '+33',
      code: 'FR',
    },
    {
      name: 'French Guiana',
      dial_code: '+594',
      code: 'GF',
    },
    {
      name: 'French Polynesia',
      dial_code: '+689',
      code: 'PF',
    },
    {
      name: 'Gabon',
      dial_code: '+241',
      code: 'GA',
    },
    {
      name: 'Gambia',
      dial_code: '+220',
      code: 'GM',
    },
    {
      name: 'Georgia',
      dial_code: '+995',
      code: 'GE',
    },
    {
      name: 'Germany',
      dial_code: '+49',
      code: 'DE',
    },
    {
      name: 'Ghana',
      dial_code: '+233',
      code: 'GH',
    },
    {
      name: 'Gibraltar',
      dial_code: '+350',
      code: 'GI',
    },
    {
      name: 'Greece',
      dial_code: '+30',
      code: 'GR',
    },
    {
      name: 'Greenland',
      dial_code: '+299',
      code: 'GL',
    },
    {
      name: 'Grenada',
      dial_code: '+1 473',
      code: 'GD',
    },
    {
      name: 'Guadeloupe',
      dial_code: '+590',
      code: 'GP',
    },
    {
      name: 'Guam',
      dial_code: '+1 671',
      code: 'GU',
    },
    {
      name: 'Guatemala',
      dial_code: '+502',
      code: 'GT',
    },
    {
      name: 'Guinea',
      dial_code: '+224',
      code: 'GN',
    },
    {
      name: 'Guinea-Bissau',
      dial_code: '+245',
      code: 'GW',
    },
    {
      name: 'Guyana',
      dial_code: '+595',
      code: 'GY',
    },
    {
      name: 'Haiti',
      dial_code: '+509',
      code: 'HT',
    },
    {
      name: 'Honduras',
      dial_code: '+504',
      code: 'HN',
    },
    {
      name: 'Hungary',
      dial_code: '+36',
      code: 'HU',
    },
    {
      name: 'Iceland',
      dial_code: '+354',
      code: 'IS',
    },
    {
      name: 'Iraq',
      dial_code: '+964',
      code: 'IQ',
    },
    {
      name: 'Ireland',
      dial_code: '+353',
      code: 'IE',
    },
    {
      name: 'Israel',
      dial_code: '+972',
      code: 'IL',
    },
    {
      name: 'Italy',
      dial_code: '+39',
      code: 'IT',
    },
    {
      name: 'Jamaica',
      dial_code: '+1 876',
      code: 'JM',
    },
    {
      name: 'Japan',
      dial_code: '+81',
      code: 'JP',
    },
    {
      name: 'Jordan',
      dial_code: '+962',
      code: 'JO',
    },
    {
      name: 'Kazakhstan',
      dial_code: '+7 7',
      code: 'KZ',
    },
    {
      name: 'Kenya',
      dial_code: '+254',
      code: 'KE',
    },
    {
      name: 'Kiribati',
      dial_code: '+686',
      code: 'KI',
    },
    {
      name: 'Kuwait',
      dial_code: '+965',
      code: 'KW',
    },
    {
      name: 'Kyrgyzstan',
      dial_code: '+996',
      code: 'KG',
    },
    {
      name: 'Latvia',
      dial_code: '+371',
      code: 'LV',
    },
    {
      name: 'Lebanon',
      dial_code: '+961',
      code: 'LB',
    },
    {
      name: 'Lesotho',
      dial_code: '+266',
      code: 'LS',
    },
    {
      name: 'Liberia',
      dial_code: '+231',
      code: 'LR',
    },
    {
      name: 'Liechtenstein',
      dial_code: '+423',
      code: 'LI',
    },
    {
      name: 'Lithuania',
      dial_code: '+370',
      code: 'LT',
    },
    {
      name: 'Luxembourg',
      dial_code: '+352',
      code: 'LU',
    },
    {
      name: 'Madagascar',
      dial_code: '+261',
      code: 'MG',
    },
    {
      name: 'Malawi',
      dial_code: '+265',
      code: 'MW',
    },
    {
      name: 'Malaysia',
      dial_code: '+60',
      code: 'MY',
    },
    {
      name: 'Maldives',
      dial_code: '+960',
      code: 'MV',
    },
    {
      name: 'Mali',
      dial_code: '+223',
      code: 'ML',
    },
    {
      name: 'Malta',
      dial_code: '+356',
      code: 'MT',
    },
    {
      name: 'Marshall Islands',
      dial_code: '+692',
      code: 'MH',
    },
    {
      name: 'Martinique',
      dial_code: '+596',
      code: 'MQ',
    },
    {
      name: 'Mauritania',
      dial_code: '+222',
      code: 'MR',
    },
    {
      name: 'Mauritius',
      dial_code: '+230',
      code: 'MU',
    },
    {
      name: 'Mayotte',
      dial_code: '+262',
      code: 'YT',
    },
    {
      name: 'Mexico',
      dial_code: '+52',
      code: 'MX',
    },
    {
      name: 'Monaco',
      dial_code: '+377',
      code: 'MC',
    },
    {
      name: 'Mongolia',
      dial_code: '+976',
      code: 'MN',
    },
    {
      name: 'Montenegro',
      dial_code: '+382',
      code: 'ME',
    },
    {
      name: 'Montserrat',
      dial_code: '+1664',
      code: 'MS',
    },
    {
      name: 'Morocco',
      dial_code: '+212',
      code: 'MA',
    },
    {
      name: 'Myanmar',
      dial_code: '+95',
      code: 'MM',
    },
    {
      name: 'Namibia',
      dial_code: '+264',
      code: 'NA',
    },
    {
      name: 'Nauru',
      dial_code: '+674',
      code: 'NR',
    },
    {
      name: 'Nepal',
      dial_code: '+977',
      code: 'NP',
    },
    {
      name: 'Netherlands',
      dial_code: '+31',
      code: 'NL',
    },
    {
      name: 'Netherlands Antilles',
      dial_code: '+599',
      code: 'AN',
    },
    {
      name: 'New Caledonia',
      dial_code: '+687',
      code: 'NC',
    },
    {
      name: 'New Zealand',
      dial_code: '+64',
      code: 'NZ',
    },
    {
      name: 'Nicaragua',
      dial_code: '+505',
      code: 'NI',
    },
    {
      name: 'Niger',
      dial_code: '+227',
      code: 'NE',
    },
    {
      name: 'Nigeria',
      dial_code: '+234',
      code: 'NG',
    },
    {
      name: 'Niue',
      dial_code: '+683',
      code: 'NU',
    },
    {
      name: 'Norfolk Island',
      dial_code: '+672',
      code: 'NF',
    },
    {
      name: 'Northern Mariana Islands',
      dial_code: '+1 670',
      code: 'MP',
    },
    {
      name: 'Norway',
      dial_code: '+47',
      code: 'NO',
    },
    {
      name: 'Oman',
      dial_code: '+968',
      code: 'OM',
    },
    {
      name: 'Pakistan',
      dial_code: '+92',
      code: 'PK',
    },
    {
      name: 'Palau',
      dial_code: '+680',
      code: 'PW',
    },
    {
      name: 'Panama',
      dial_code: '+507',
      code: 'PA',
    },
    {
      name: 'Papua New Guinea',
      dial_code: '+675',
      code: 'PG',
    },
    {
      name: 'Paraguay',
      dial_code: '+595',
      code: 'PY',
    },
    {
      name: 'Peru',
      dial_code: '+51',
      code: 'PE',
    },
    {
      name: 'Philippines',
      dial_code: '+63',
      code: 'PH',
    },
    {
      name: 'Poland',
      dial_code: '+48',
      code: 'PL',
    },
    {
      name: 'Portugal',
      dial_code: '+351',
      code: 'PT',
    },
    {
      name: 'Puerto Rico',
      dial_code: '+1 939',
      code: 'PR',
    },
    {
      name: 'Qatar',
      dial_code: '+974',
      code: 'QA',
    },
    {
      name: 'Romania',
      dial_code: '+40',
      code: 'RO',
    },
    {
      name: 'Rwanda',
      dial_code: '+250',
      code: 'RW',
    },
    {
      name: 'Samoa',
      dial_code: '+685',
      code: 'WS',
    },
    {
      name: 'San Marino',
      dial_code: '+378',
      code: 'SM',
    },
    {
      name: 'Saudi Arabia',
      dial_code: '+966',
      code: 'SA',
    },
    {
      name: 'Senegal',
      dial_code: '+221',
      code: 'SN',
    },
    {
      name: 'Serbia',
      dial_code: '+381',
      code: 'RS',
    },
    {
      name: 'Seychelles',
      dial_code: '+248',
      code: 'SC',
    },
    {
      name: 'Sierra Leone',
      dial_code: '+232',
      code: 'SL',
    },
    {
      name: 'Singapore',
      dial_code: '+65',
      code: 'SG',
    },
    {
      name: 'Slovakia',
      dial_code: '+421',
      code: 'SK',
    },
    {
      name: 'Slovenia',
      dial_code: '+386',
      code: 'SI',
    },
    {
      name: 'Solomon Islands',
      dial_code: '+677',
      code: 'SB',
    },
    {
      name: 'South Africa',
      dial_code: '+27',
      code: 'ZA',
    },
    {
      name: 'South Georgia and the South Sandwich Islands',
      dial_code: '+500',
      code: 'GS',
    },
    {
      name: 'Spain',
      dial_code: '+34',
      code: 'ES',
    },
    {
      name: 'Sri Lanka',
      dial_code: '+94',
      code: 'LK',
    },
    {
      name: 'Sudan',
      dial_code: '+249',
      code: 'SD',
    },
    {
      name: 'Suriname',
      dial_code: '+597',
      code: 'SR',
    },
    {
      name: 'Swaziland',
      dial_code: '+268',
      code: 'SZ',
    },
    {
      name: 'Sweden',
      dial_code: '+46',
      code: 'SE',
    },
    {
      name: 'Switzerland',
      dial_code: '+41',
      code: 'CH',
    },
    {
      name: 'Tajikistan',
      dial_code: '+992',
      code: 'TJ',
    },
    {
      name: 'Thailand',
      dial_code: '+66',
      code: 'TH',
    },
    {
      name: 'Togo',
      dial_code: '+228',
      code: 'TG',
    },
    {
      name: 'Tokelau',
      dial_code: '+690',
      code: 'TK',
    },
    {
      name: 'Tonga',
      dial_code: '+676',
      code: 'TO',
    },
    {
      name: 'Trinidad and Tobago',
      dial_code: '+1 868',
      code: 'TT',
    },
    {
      name: 'Tunisia',
      dial_code: '+216',
      code: 'TN',
    },
    {
      name: 'Turkey',
      dial_code: '+90',
      code: 'TR',
    },
    {
      name: 'Turkmenistan',
      dial_code: '+993',
      code: 'TM',
    },
    {
      name: 'Turks and Caicos Islands',
      dial_code: '+1 649',
      code: 'TC',
    },
    {
      name: 'Tuvalu',
      dial_code: '+688',
      code: 'TV',
    },
    {
      name: 'Uganda',
      dial_code: '+256',
      code: 'UG',
    },
    {
      name: 'Ukraine',
      dial_code: '+380',
      code: 'UA',
    },
    {
      name: 'United Arab Emirates',
      dial_code: '+971',
      code: 'AE',
    },
    {
      name: 'United Kingdom',
      dial_code: '+44',
      code: 'GB',
    },
    {
      name: 'United States',
      dial_code: '+1',
      code: 'US',
    },
    {
      name: 'Uruguay',
      dial_code: '+598',
      code: 'UY',
    },
    {
      name: 'Uzbekistan',
      dial_code: '+998',
      code: 'UZ',
    },
    {
      name: 'Vanuatu',
      dial_code: '+678',
      code: 'VU',
    },
    {
      name: 'Wallis and Futuna',
      dial_code: '+681',
      code: 'WF',
    },
    {
      name: 'Yemen',
      dial_code: '+967',
      code: 'YE',
    },
    {
      name: 'Zambia',
      dial_code: '+260',
      code: 'ZM',
    },
    {
      name: 'Zimbabwe',
      dial_code: '+263',
      code: 'ZW',
    },
    {
      name: 'land Islands',
      dial_code: '',
      code: 'AX',
    },
    {
      name: 'Antarctica',
      dial_code: null,
      code: 'AQ',
    },
    {
      name: 'Bolivia, Plurinational State of',
      dial_code: '+591',
      code: 'BO',
    },
    {
      name: 'Brunei Darussalam',
      dial_code: '+673',
      code: 'BN',
    },
    {
      name: 'Cocos (Keeling) Islands',
      dial_code: '+61',
      code: 'CC',
    },
    {
      name: 'Congo, The Democratic Republic of the',
      dial_code: '+243',
      code: 'CD',
    },
    {
      name: 'Cote d\'Ivoire',
      dial_code: '+225',
      code: 'CI',
    },
    {
      name: 'Falkland Islands (Malvinas)',
      dial_code: '+500',
      code: 'FK',
    },
    {
      name: 'Guernsey',
      dial_code: '+44',
      code: 'GG',
    },
    {
      name: 'Holy See (Vatican City State)',
      dial_code: '+379',
      code: 'VA',
    },
    {
      name: 'Hong Kong',
      dial_code: '+852',
      code: 'HK',
    },
    {
      name: 'Iran, Islamic Republic of',
      dial_code: '+98',
      code: 'IR',
    },
    {
      name: 'Isle of Man',
      dial_code: '+44',
      code: 'IM',
    },
    {
      name: 'Jersey',
      dial_code: '+44',
      code: 'JE',
    },
    {
      name: 'Korea, Democratic People\'s Republic of',
      dial_code: '+850',
      code: 'KP',
    },
    {
      name: 'Korea, Republic of',
      dial_code: '+82',
      code: 'KR',
    },
    {
      name: 'Lao People\'s Democratic Republic',
      dial_code: '+856',
      code: 'LA',
    },
    {
      name: 'Libyan Arab Jamahiriya',
      dial_code: '+218',
      code: 'LY',
    },
    {
      name: 'Macao',
      dial_code: '+853',
      code: 'MO',
    },
    {
      name: 'Macedonia, The Former Yugoslav Republic of',
      dial_code: '+389',
      code: 'MK',
    },
    {
      name: 'Micronesia, Federated States of',
      dial_code: '+691',
      code: 'FM',
    },
    {
      name: 'Moldova, Republic of',
      dial_code: '+373',
      code: 'MD',
    },
    {
      name: 'Mozambique',
      dial_code: '+258',
      code: 'MZ',
    },
    {
      name: 'Palestinian Territory, Occupied',
      dial_code: '+970',
      code: 'PS',
    },
    {
      name: 'Pitcairn',
      dial_code: '+872',
      code: 'PN',
    },
    {
      name: 'Réunion',
      dial_code: '+262',
      code: 'RE',
    },
    {
      name: 'Russia',
      dial_code: '+7',
      code: 'RU',
    },
    {
      name: 'Saint Barthélemy',
      dial_code: '+590',
      code: 'BL',
    },
    {
      name: 'Saint Helena, Ascension and Tristan Da Cunha',
      dial_code: '+290',
      code: 'SH',
    },
    {
      name: 'Saint Kitts and Nevis',
      dial_code: '+1 869',
      code: 'KN',
    },
    {
      name: 'Saint Lucia',
      dial_code: '+1 758',
      code: 'LC',
    },
    {
      name: 'Saint Martin',
      dial_code: '+590',
      code: 'MF',
    },
    {
      name: 'Saint Pierre and Miquelon',
      dial_code: '+508',
      code: 'PM',
    },
    {
      name: 'Saint Vincent and the Grenadines',
      dial_code: '+1 784',
      code: 'VC',
    },
    {
      name: 'Sao Tome and Principe',
      dial_code: '+239',
      code: 'ST',
    },
    {
      name: 'Somalia',
      dial_code: '+252',
      code: 'SO',
    },
    {
      name: 'Svalbard and Jan Mayen',
      dial_code: '+47',
      code: 'SJ',
    },
    {
      name: 'Syrian Arab Republic',
      dial_code: '+963',
      code: 'SY',
    },
    {
      name: 'Taiwan, Province of China',
      dial_code: '+886',
      code: 'TW',
    },
    {
      name: 'Tanzania, United Republic of',
      dial_code: '+255',
      code: 'TZ',
    },
    {
      name: 'Timor-Leste',
      dial_code: '+670',
      code: 'TL',
    },
    {
      name: 'Venezuela, Bolivarian Republic of',
      dial_code: '+58',
      code: 'VE',
    },
    {
      name: 'Viet Nam',
      dial_code: '+84',
      code: 'VN',
    },
    {
      name: 'Virgin Islands, British',
      dial_code: '+1 284',
      code: 'VG',
    },
    {
      name: 'Virgin Islands, U.S.',
      dial_code: '+1 340',
      code: 'VI',
    },
  ];
  public mobileCountryCode = '+62';
  public userName: any;
  public isLoginFail = false;

  public Toast = {
    type: '',
    title: '',
    timeout: 0,
    body: '',
  };

  public showHide(x): void {
    if (x.target.checked === true) {
      this.showHidebtn = true;
    } else {
      this.showHidebtn = false;
    }
  }
  public ngOnInit() {
    localStorage.clear();

  }
  public parseJwt(token) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace('-', '+').replace('_', '/');
    return JSON.parse(window.atob(base64));
  }

  public login() {
    this.spinner = true;

    /* const formData = {
     username: this.userName,
     password: this.password,
     grant_type: 'password',
     accountType: '0',
     };*/
    const formData =  new FormData();

    formData.append('username', this.userName);
    formData.append('password', this.password);
    formData.append('grant_type', 'password');
    formData.append('accountType', '-1');

    const parent = this;
    this.userService.login(formData)
      .subscribe((response) => {
        this.spinner = false;
        if (response.hasOwnProperty('access_token')) {
          this.localStorage.set(response.access_token, 'token');
          this.principal.identity(true).then((account) => {});
          const decodedToken = this.parseJwt(response.access_token);
          // this.localStorage.set(decodedToken['authorities'][0], 'authorities');
          if (decodedToken) {
            const user = {
              firstName: decodedToken.firstName,
              lastName: decodedToken.lastName,
              domain: decodedToken.domain,
            };
            this.sharingDataService.setLoginUser(user);
            parent.localStorage.set(user, 'loggedInUser');
          }
          this.userName = null;
          this.password = null;

          if (this.principal.hasAuthorityDirect(['ROLE_SYSTEM_ADMIN'])) {
            parent.router.navigate(['/dashboard']);
          } else {
            parent.router.navigate(['/accessdenied']);
          }

          this._snackBar.open('Login Successfully...', 'close', {duration: 2000});
          /*this.userservice.getUserById(decodedToken.userName)
           .subscribe(user => {
           parent.localStorage.set(user, 'loggedInUser');
           this.loggedInUser = user;
           console.log('*****', this.loggedInUser);
           this.sharingDataService.setLoginUser(user);
           /!*  if(this.isClickOnBookTableBtn === 'yes') {
           console.log("isClickOnBookTableBtn" , this.isClickOnBookTableBtn)
           this.sharingDataService.showBookTableDialog(true);
           }*!/
           this.userName = null;
           this.password = null;
           this.router.navigate(['/home']);
           } , err => {
           console.error('err', err);
           });*/
        } else {
          this.isLoginFail = true;
        }
      }, (err: HttpErrorResponse) => {
        this.spinner = false;

        if (err && err.error.error === 'invalid_token') {
          localStorage.clear();
        }

        if (err) {
          this._snackBar.open(err.error.error_description, 'close', {
            duration: 3000,
          });
        }

        console.error(err);
      });
  }

  /* login(): void {
       this.spinner = true;
       const credentials = this.loginForm.value ;
       credentials.app = 'MARKETPLACE_SERVICE_PENAL';
       credentials.marketPlaceId = '1';
       const parent = this;
       this.userService.login(credentials)
           .subscribe(response => {
               if (response.hasOwnProperty('access_token')) {
                   this.localStorage.set(response['access_token'], 'token');
                   this.localStorage.set(response['market_place_id'], 'businessId');
                   /!*   this.localStorage.set(response['merchant_id'], 'merchant_id');
                      this.localStorage.set(response['branch_id'], 'branch_id');*!/
                   this.localStorage.set(response['market_place_id'], 'market_place_id');
                   this.principal.identity(true).then((account) => {});
                   const decodedToken = this.parseJwt(response['access_token']);
                   this.storage.set(decodedToken.defaultRole, 'defaultRole');
                   this.storage.set(decodedToken.userType, 'userType');

                   this.userService.getUserById(decodedToken.user_id)
                       .subscribe(user => {
                           this.spinner = false;
                           if (this.principal.hasAuthorityDirect(['MARKETPLACE_ADMIN'])){
                               parent.router.navigate(['/dashboard']);
                           }else{
                               parent.router.navigate(['/accessdenied']);
                           }
                           parent.localStorage.set(user, 'loggedInUser');
                       },err => {
                           console.error('err', err);
                       });
                   /!*this.getBusinessById(response['business_id'])
                    .then(business => {
                    parent.localStorage.set(business, 'business');
                    });*!/
               } else {

                   this.validationError = 'Invalid username or password';

                   this.Toast.title = 'Error';
                   this.Toast.type = 'error';
                   this.Toast.timeout = 3000;
                   this.Toast.body =  this.validationError;
                   this.utility.popToast(this.Toast);

                   this.spinner = false;

               }
           },err => {
               this.spinner = false;

               console.error(err);
           });
   }
*/

  public redirectActivateBusiness() {
    this.router.navigate(['/activation']);
  }

  public resendOtp(): void {
    this.spinner = true;
    this.password = null;
    this.otpCode = null;
    this.isDisableBtn = true;

    const sendotp = {
      countryCode: this.mobileCountryCode,
      mobileNo : this.mobileNumber,
      marketPlaceId: '1',
      otpAction : 'UPDATE_PASSWORD',
      clientType: 'WEB',
      otpOn: 'MOBILE',
      appType : 'MERCHANT_SERVICE_PENAL',
    };

    this.userService.sendOTP(sendotp)
      .subscribe((res) => {
          this.spinner = false;
          this.isDisableBtn = false;
          this.ShowDiv();
        },
        (error) => {
          this.spinner = false;
          if (error.status === 404) {
            this.Toast.title = 'User Not Found';
            this.Toast.type = 'error';
            this.Toast.timeout = 1500;
            this.Toast.body = 'Please Insert Valid Mobile Number';
            this.utility.popToast(this.Toast);

          } else {
            this.Toast.title = 'Error';
            this.Toast.type = 'error';
            this.Toast.timeout = 1500;
            this.Toast.body = error.message;
            this.utility.popToast(this.Toast);
          }

        });
  }

  public changePassword(): void {

    const updatePassword = {
      marketPlaceId : '1',
      mobileNo: this.mobileNumber,
      password: this.password,
      otpCode : this.otpCode,
      appType : 'MERCHANT_SERVICE_PENAL',
    };

    this.userService.forgetPassword(updatePassword)
      .subscribe((res) => {
          this.Changepassword.hide();
          this.isDisableBtn = false;
          this.password = null;
          this.otpCode = null;
          this.mobileNumber = null;
          this.Toast.title = 'Your Password Is Successfully Changed';
          this.Toast.type = 'success';
          this.Toast.timeout = 2200;
          this.Toast.body = 'You Can Login With New Password';
          this.utility.popToast(this.Toast);
        },
        (error) => {
          if (error.status === 406) {
            this.Toast.title = 'Invalid OTP';
            this.Toast.type = 'error';
            this.Toast.timeout = 1500;
            this.Toast.body = 'Please Insert Valid OTP.';
            this.utility.popToast(this.Toast);

          } else {
            this.Toast.title = 'Error';
            this.Toast.type = 'error';
            this.Toast.timeout = 1500;
            this.Toast.body = error.message;
            this.utility.popToast(this.Toast);
          }

        });
  }

  public OnlyNumbers(event) {
    const pattern = /^[0-9]*$/;
    const inputChar = String.fromCharCode(event.charCode);

    if (!pattern.test(inputChar)) {
      // invalid character, prevent input
      event.preventDefault();

    }
  }

  public ShowDiv() {
    document.getElementById('forgetpass').style.display = '';
  }

  public getHighestRole(roles) {
    if ((roles.indexOf('IWANT_ADMIN')) > -1) {
      return 'IWANT_ADMIN';
    } else if ((roles.indexOf('MARKETPLACE_ADMIN')) > -1) {
      return 'MARKETPLACE_ADMIN';
    } else if ((roles.indexOf('MERCHANT_ADMIN')) > -1) {
      return 'MERCHANT_ADMIN';
    } else if ((roles.indexOf('BRANCH_ADMIN')) > -1) {
      return 'BRANCH_ADMIN';
    } else {
      return 'INVALID_ROLE';
    }
  }

  public hideChangePasswordModel(): void {
    this.Changepassword.hide();
    this.mobileNumber = null;
    this.password = null;
    this.otpCode = null;
    this.isDisableBtn = false;
    this.showHidebtn = false;
    this.mobileCountryCode = '+62';
  }
  public AcceptTerms(): void {

  }

}
