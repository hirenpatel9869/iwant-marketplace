import {Component, Inject, OnInit, PLATFORM_ID, VERSION} from '@angular/core';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {StorageService} from './utilityservices/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public hideFooter = false;
  public config: any;
  public businessConfig: any;
  public subscription: Subscription;
  // maTheme: string = this.sharedService.maTheme;

  constructor( public storage: StorageService,
               @Inject(PLATFORM_ID) private platformId: Object,
               private router: Router,
  ) { }

  public title = 'app';

   public ngOnInit(): void {
    this.config = JSON.parse(localStorage.getItem('config'));
    this.businessConfig = JSON.parse(localStorage.getItem('config'));
    console.log('angular version', VERSION.full);
  }
}
