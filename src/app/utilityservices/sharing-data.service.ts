import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {StorageService} from './storage.service';


@Injectable()
export class SharingDataService {
  isLogout$: Observable<any>;
  setLoginUser$: Observable<any>;
  getContentInventoryAddImage$: Observable<any>;
  getContentInventoryUpdateImage$: Observable<any>;
  getVideoContentBgAddImage$: Observable<any>;
  getChannelBgAddImage$: Observable<any>;
  getBouquetBgAddImage$: Observable<any>;
  getChannelBgUpdateImage$: Observable<any>;
  getBouquetBgUpdateImage$: Observable<any>;
  getVideoContentBgUpdateImage$: Observable<any>;
  getVideoContentLogoAddImage$: Observable<any>;
  getChannelLogoAddImage$: Observable<any>;
  getBouquetLogoAddImage$: Observable<any>;
  getLiveClassRoomLogoAddImage$: Observable<any>;
  getCertificateTestAddImage$: Observable<any>;
  getCertificateTestUpdateImage$: Observable<any>;
  getChannelLogoUpdateImage$: Observable<any>;
  getBouquetLogoUpdateImage$: Observable<any>;
  getliveClassRoomLogoUpdateImage$: Observable<any>;
  getVideoContentLogoUpdateImage$: Observable<any>;
  getCollectionAddImage$: Observable<any>;
  getCollectionCoverAddImage$: Observable<any>;
  getCollectionUpdateImage$: Observable<any>;
  getCollectionUpdateCoverImage$: Observable<any>;

  getChannelAddBannerImages$: Observable<any>;
  getChannelUpdateBannerImages$: Observable<any>;
  getVideoItemAddBannerImages$: Observable<any>;
  getVideoItemUpdateBannerImages$: Observable<any>;
  getPlayListAddBannerImages$: Observable<any>;
  getPlayListUpdateBannerImages$: Observable<any>;
  getBouquetAddBannerImages$: Observable<any>;
  getBouquetUpdateBannerImages$: Observable<any>;
  getSubscriptionPlanAddBannerImages$: Observable<any>;
  getSubscriptionPlanUpdateBannerImages$: Observable<any>;
  getVideoContentAddBannerImages$: Observable<any>;
  getVideoContentUpdateBannerImages$: Observable<any>;
  getServiceData$: Observable<any>;
  getUsersData$: Observable<any>;
  getdeviceData$: Observable<any>;
  getCityData$: Observable<any>;
  getSearchSessionData$: Observable<any>;


  private isLogoutDataSubject = new Subject<any>();

  private setLoginUserDataSubject = new Subject<any>();
  private setContentInventoryAddImageDataSubject = new Subject<any>();
  private setContentInventoryUpdateImageDataSubject = new Subject<any>();
  private setVideoContentBgAddImageDataSubject = new Subject<any>();
  private setChannelBgAddImageDataSubject = new Subject<any>();
  private setBouquetBgAddImageDataSubject = new Subject<any>();
  private setChannelBgUpdateImageDataSubject = new Subject<any>();
  private setBouquetBgUpdateImageDataSubject = new Subject<any>();
  private setVideoContentBgUpdateImageDataSubject = new Subject<any>();
  private setVideoContentLogoAddImageDataSubject = new Subject<any>();
  private setChannelLogoAddImageDataSubject = new Subject<any>();
  private setBouquetLogoAddImageDataSubject = new Subject<any>();
  private setLiveClassRoomLogoAddImageDataSubject = new Subject<any>();
  private setCertificateTestAddImageDataSubject = new Subject<any>();
  private setCertificateTestUpdateImageDataSubject = new Subject<any>();
  private setChannelLogoUpdateImageDataSubject = new Subject<any>();
  private setBouquetLogoUpdateImageDataSubject = new Subject<any>();
  private setliveClassRoomLogoUpdateImageDataSubject = new Subject<any>();
  private setVideoContentLogoUpdateImageDataSubject = new Subject<any>();
  private setCollectionAddDataSubject = new Subject<any>();
  private setCollectionCoverAddDataSubject = new Subject<any>();
  private setCollectionUpdateDataSubject = new Subject<any>();
  private setCollectionUpdateCoverDataSubject = new Subject<any>();

  private setChannelAddBannerImagesDataSubject = new Subject<any>();
  private setChannelUpdateBannerImagesDataSubject = new Subject<any>();
  private setVideoItemAddBannerImagesDataSubject = new Subject<any>();
  private setVideoItemUpdateBannerImagesDataSubject = new Subject<any>();
  private setPlayListAddBannerImagesDataSubject = new Subject<any>();
  private setPlayListUpdateBannerImagesDataSubject = new Subject<any>();
  private setBouquetAddBannerImagesDataSubject = new Subject<any>();
  private setBouquetUpdateBannerImagesDataSubject = new Subject<any>();
  private setSubscriptionPlanAddBannerImagesDataSubject = new Subject<any>();
  private setSubscriptionPlanUpdateBannerImagesDataSubject = new Subject<any>();
  private setVideoContentAddBannerImagesDataSubject = new Subject<any>();
  private setVideoContentUpdateBannerImagesDataSubject = new Subject<any>();
  private setServiceDataSubject = new Subject<any>();
  private setUsersDataSubject = new Subject<any>();
  private setdeviceDataSubject = new Subject<any>();
  private setCityDataSubject = new Subject<any>();
  private setSearchSessionSubject = new Subject<any>();

  constructor(private storage: StorageService) {
    this.isLogout$ = this.isLogoutDataSubject.asObservable();
    this.setLoginUser$ = this.setLoginUserDataSubject.asObservable();
    this.getContentInventoryAddImage$ = this.setContentInventoryAddImageDataSubject.asObservable();
    this.getContentInventoryUpdateImage$ = this.setContentInventoryUpdateImageDataSubject.asObservable();
    this.getVideoContentBgAddImage$ = this.setVideoContentBgAddImageDataSubject.asObservable();
    this.getChannelBgAddImage$ = this.setChannelBgAddImageDataSubject.asObservable();
    this.getBouquetBgAddImage$ = this.setBouquetBgAddImageDataSubject.asObservable();
    this.getChannelBgUpdateImage$ = this.setChannelBgUpdateImageDataSubject.asObservable();
    this.getBouquetBgUpdateImage$ = this.setBouquetBgUpdateImageDataSubject.asObservable();
    this.getVideoContentBgUpdateImage$ = this.setVideoContentBgUpdateImageDataSubject.asObservable();
    this.getVideoContentLogoAddImage$ = this.setVideoContentLogoAddImageDataSubject.asObservable();
    this.getChannelLogoAddImage$ = this.setChannelLogoAddImageDataSubject.asObservable();
    this.getBouquetLogoAddImage$ = this.setBouquetLogoAddImageDataSubject.asObservable();
    this.getLiveClassRoomLogoAddImage$ = this.setLiveClassRoomLogoAddImageDataSubject.asObservable();
    this.getCertificateTestAddImage$ = this.setCertificateTestAddImageDataSubject.asObservable();
    this.getCertificateTestUpdateImage$ = this.setCertificateTestUpdateImageDataSubject.asObservable();
    this.getChannelLogoUpdateImage$ = this.setChannelLogoUpdateImageDataSubject.asObservable();
    this.getBouquetLogoUpdateImage$ = this.setBouquetLogoUpdateImageDataSubject.asObservable();
    this.getliveClassRoomLogoUpdateImage$ = this.setliveClassRoomLogoUpdateImageDataSubject.asObservable();
    this.getVideoContentLogoUpdateImage$ = this.setVideoContentLogoUpdateImageDataSubject.asObservable();
    this.getCollectionAddImage$ = this.setCollectionAddDataSubject.asObservable();
    this.getCollectionCoverAddImage$ = this.setCollectionCoverAddDataSubject.asObservable();
    this.getCollectionUpdateImage$ = this.setCollectionUpdateDataSubject.asObservable();
    this.getCollectionUpdateCoverImage$ = this.setCollectionUpdateCoverDataSubject.asObservable();
    this.getServiceData$ = this.setServiceDataSubject.asObservable();
    this.getUsersData$ = this.setUsersDataSubject.asObservable();
    this.getdeviceData$ = this.setdeviceDataSubject.asObservable();
    this.getCityData$ = this.setCityDataSubject.asObservable();
    this.getSearchSessionData$ = this.setSearchSessionSubject.asObservable();

    this.getChannelAddBannerImages$ = this.setChannelAddBannerImagesDataSubject.asObservable();
    this.getChannelUpdateBannerImages$ = this.setChannelUpdateBannerImagesDataSubject.asObservable();
    this.getVideoItemAddBannerImages$ = this.setVideoItemAddBannerImagesDataSubject.asObservable();
    this.getVideoItemUpdateBannerImages$ = this.setVideoItemUpdateBannerImagesDataSubject.asObservable();
    this.getPlayListAddBannerImages$ = this.setPlayListAddBannerImagesDataSubject.asObservable();
    this.getPlayListUpdateBannerImages$ = this.setPlayListUpdateBannerImagesDataSubject.asObservable();
    this.getBouquetAddBannerImages$ = this.setBouquetAddBannerImagesDataSubject.asObservable();
    this.getBouquetUpdateBannerImages$ = this.setBouquetUpdateBannerImagesDataSubject.asObservable();
    this.getSubscriptionPlanAddBannerImages$ = this.setSubscriptionPlanAddBannerImagesDataSubject.asObservable();
    this.getSubscriptionPlanUpdateBannerImages$ = this.setSubscriptionPlanUpdateBannerImagesDataSubject.asObservable();
    this.getVideoContentAddBannerImages$ = this.setVideoContentAddBannerImagesDataSubject.asObservable();
    this.getVideoContentUpdateBannerImages$ = this.setVideoContentUpdateBannerImagesDataSubject.asObservable();
  }

  isLogout(data) {
    this.isLogoutDataSubject.next(data);
  }

  setLoginUser(data) {
    this.setLoginUserDataSubject.next(data);
  }

  setContentInventoryAddImage(data) {
    this.setContentInventoryAddImageDataSubject.next(data);
  }

  setContentInventoryUpdateImage(data) {
    this.setContentInventoryUpdateImageDataSubject.next(data);
  }

  setVideoContentBgAddImage(data) {
    this.setVideoContentBgAddImageDataSubject.next(data);
  }

  setChannelBgAddImage(data) {
    this.setChannelBgAddImageDataSubject.next(data);
  }

  setBouquetBgAddImage(data) {
    this.setBouquetBgAddImageDataSubject.next(data);
  }

  setChannelBgUpdateImage(data) {
    this.setChannelBgUpdateImageDataSubject.next(data);
  }

  setBouquetBgUpdateImage(data) {
    this.setBouquetBgUpdateImageDataSubject.next(data);
  }

  setVideoContentBgUpdateImage(data) {
    this.setVideoContentBgUpdateImageDataSubject.next(data);
  }

  setVideoContentLogoAddImage(data) {
    this.setVideoContentLogoAddImageDataSubject.next(data);
  }

  setChannelLogoAddImage(data) {
    this.setChannelLogoAddImageDataSubject.next(data);
  }

  setBouquetLogoAddImage(data) {
    this.setBouquetLogoAddImageDataSubject.next(data);
  }

  setLiveClassRoomLogoAddImage(data) {
    this.setLiveClassRoomLogoAddImageDataSubject.next(data);
  }

  setCertificateTestLogoAddImage(data) {
    this.setCertificateTestAddImageDataSubject.next(data);
  }

  setCertificateTestLogoUpdateImage(data) {
    this.setCertificateTestUpdateImageDataSubject.next(data);
  }

  setChannelLogoUpdateImage(data) {
    this.setChannelLogoUpdateImageDataSubject.next(data);
  }

  setBouquetLogoUpdateImage(data) {
    this.setBouquetLogoUpdateImageDataSubject.next(data);
  }

  setliveClassRoomLogoUpdateImage(data) {
    this.setliveClassRoomLogoUpdateImageDataSubject.next(data);
  }

  setVideoContentLogoUpdateImage(data) {
    this.setVideoContentLogoUpdateImageDataSubject.next(data);
  }


  setChannelAddBannerImages(data) {
    this.setChannelAddBannerImagesDataSubject.next(data);
  }

  setChannelUpdateBannerImages(data) {
    this.setChannelUpdateBannerImagesDataSubject.next(data);
  }

  setVideoItmeAddBannerImages(data) {
    this.setVideoItemAddBannerImagesDataSubject.next(data);
  }

  setVideoItemUpdateBannerImages(data) {
    this.setVideoItemUpdateBannerImagesDataSubject.next(data);
  }

  setPlayListAddBannerImages(data) {
    this.setPlayListAddBannerImagesDataSubject.next(data);
  }

  setPlayListUpdateBannerImages(data) {
    this.setPlayListUpdateBannerImagesDataSubject.next(data);
  }

  setBouquetAddBannerImages(data) {
    this.setBouquetAddBannerImagesDataSubject.next(data);
  }

  setBouquetUpdateBannerImages(data) {
    this.setBouquetUpdateBannerImagesDataSubject.next(data);
  }


  setSubscriptionPlanAddBannerImages(data) {
    this.setSubscriptionPlanAddBannerImagesDataSubject.next(data);
  }

  setSubscriptionPlanUpdateBannerImages(data) {
    this.setSubscriptionPlanUpdateBannerImagesDataSubject.next(data);
  }

  setVideoContentAddBannerImages(data) {
    this.setVideoContentAddBannerImagesDataSubject.next(data);
  }

  setVideoContentUpdateBannerImages(data) {
    this.setVideoContentUpdateBannerImagesDataSubject.next(data);
  }

  setCollectionAddImage(data) {
    this.setCollectionAddDataSubject.next(data);
  }
  setCollectionCoverAddImage(data) {
    this.setCollectionCoverAddDataSubject.next(data);
  }

  setCollectionUpdateImage(data) {
    this.setCollectionUpdateDataSubject.next(data);
  }
  setCollectionUpdateCoverImage(data) {
    this.setCollectionUpdateCoverDataSubject.next(data);
  }

  setServiceData(data) {
    console.log('setServiceData ma data mayo' , data);
    this.setServiceDataSubject.next(data);
  }

  setusersData(data) {
    console.log('setusersData ma data mayo' , data);
    this.setUsersDataSubject.next(data);
  }

  setdeviceData(data) {
    console.log('setdeviceData ma data mayo' , data);
    this.setdeviceDataSubject.next(data);
  }

  setcityData(data) {
    console.log('setSearchSessionData ma data mayo' , data);
    this.setCityDataSubject.next(data);
  }

  setSearchSessionData(data) {
    console.log('set search ma data mayo' , data);
    this.setSearchSessionSubject.next(data);
  }

}
