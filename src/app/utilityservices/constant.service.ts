 import {Injectable} from '@angular/core';
@Injectable()
export class ConstantService {

  // =========== start live port


 host = 'http://apigateway.ayoblajar.com';
 playerServiceWebSocket = 'https://player.ayoblajar.com';

  //=========== end live port

  //host = 'http://192.168.1.92:4180';
  //host = 'https://gateway.ayoblajar.com';
  //playerServiceWebSocket = 'https://player.ayoblajar.com';
 //host = 'http://136.232.113.214:4180';
 //playerServiceWebSocket = 'http://136.232.113.214:4186';
  //eLearnigWebSocket = 'http://136.232.113.214:4182';
  //host = 'http://136.232.113.214:4179';
  /*gatewayPort = '8050';*/
  baseURL = null;
  oauthURL = null;
  user = null;
  iwantuua = null;
  mediaService = null;
  cmsService = null;
  assetsManagement = null;
  eLearning = null;
  storeService = null;
  subscriptionpackage = null;
  videoContentService = null;
  playerService = null;
  userService = null;
  userProfile = null;
  dataPublisher = null;
  newService = null;
  bucketDomainName = 'ab-iwantunlimited';
  // bucketDomainName = 'iwantunlimited';
  teacherCatalog = null;
  teacherBooking = null;
  languageService = null;
  syllabusBinding = null;
  paymentService = null;
  countryId = null;
  orderManagement = null;
  teacherCatalogRemote = null;
  teacherCatalogFilter = null;

  constructor() {
    this.countryId = 102;
    this.baseURL = this.host;
    this.oauthURL = this.baseURL + '/services/user-service/oauth/token';
    this.mediaService = this.baseURL + '/services/iwant-cdn-service';
    this.assetsManagement = this.baseURL + '/services/assets-management-service/content';
    this.cmsService = this.baseURL + '/services/cms-service/cms';
    this.eLearning = this.baseURL + '/services/elerning-service/api/elearning';
    this.subscriptionpackage = this.baseURL + '/services/svod-plan/api';
    this.videoContentService = this.baseURL + '/services/videocontent-service/api';
    this.playerService = this.baseURL + '/services/player-service/api';
    this.userService = this.baseURL + '/services/user-service/api';
    this.newService = this.baseURL + '/services/user-service';
    this.userProfile = this.baseURL + '/services/userprofile-service';
    this.dataPublisher = this.baseURL + '/services/data-publisher-service/api';
    this.languageService =  this.baseURL + '/services/iwant-teacher-catlogue-service/api';
    this.teacherCatalog = this.baseURL + '/services/iwant-teacher-catlogue-service/api/teacherprofile';
    this.teacherCatalogRemote = this.baseURL + '/services/iwant-teacher-catlogue-service/api/remote/';
    this.teacherBooking = this.baseURL + '/services/iwant-teacher-catlogue-service/api/teacherbookingslots';
    this.syllabusBinding =  this.baseURL + '/services/iwant-teacher-catlogue-service/api/syllabusbinding';
    this.paymentService = this.baseURL + '/services/payment-service';
    this.orderManagement = this.baseURL + '/services/order-management-service';
    this.storeService = this.baseURL + '/services/store-service';
  }
}




// FOR Aws Configuration

/* import {Injectable} from '@angular/core';
 import 'rxjs/add/operator/toPromise';
 @Injectable()
 export class ConstantService {
 host = 'https://gateway.iwantsmartshop.com';
 gatewayPort = '';
 baseURL= null;
 oauthURL= null;
 user= null;
 users= null;
 vendor= null;
 productMicroService= null;
 mediaService=null;
 order=null;
 iwantordermanagement= null;
 iwantuser= null;
 iwantvendor= null;
 iwantbillingmanagement= null;
 iwantinventory= null;
 ClassoftaxURL = null;
 iwantPrmotionalnotification = null;
 websocket = null;
 pageService = null;
 authoritiesFilter = null;
 adduser = null;
 userprofile = null;

 constructor() {
   this.baseURL = this.host + this.gatewayPort;
   this.oauthURL = this.baseURL + '/iwantuser/oauth/token';
   this.user = this.baseURL + '/iwantuser/api/user/';
   this.users = this.baseURL + '/iwantuser/api/users/';
   this.vendor = this.baseURL + '/iwantvendor/api/';
   this.productMicroService = this.baseURL + '/iwantproductmanagement/product-catalogue/api/v1';
   this.mediaService = this.baseURL + '/iwantmediamanager/media-manager/api/v1/media/';
   this.order = this.baseURL + '/iwantordermanagement/api/order/';
   this.iwantordermanagement = this.baseURL + '/iwantordermanagement/api/';
   this.iwantuser = this.baseURL + '/iwantuser/api/';
   this.iwantvendor = this.baseURL + '/iwantvendor/api/';
   this.iwantbillingmanagement = this.baseURL + '/iwantbillingmanagement/api/';
   this.iwantinventory = this.baseURL + '/iwantinventory/api/';
   this.iwantPrmotionalnotification = this.baseURL + '/iwantnotifications/i-want-notifications/api/v1/';
   this.authoritiesFilter = this.baseURL + '/iwantuser/api/authorities/group/filter';
   this.adduser = this.baseURL + '/iwantuser/api/users';
   this.userprofile = this.baseURL + '/iwantuser/api/user/userprofile';
   this.websocket = this.baseURL + '/iwantordermanagement/IWantSmartShop-websocket';
   this.pageService = this.baseURL + '/iwantmediamanager/media-manager/api/v1/page';

 }
 }*/
