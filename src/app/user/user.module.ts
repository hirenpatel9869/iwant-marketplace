import { CommonModule } from '@angular/common';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatChipsModule, MatDatepickerModule, MatDialogModule, MatExpansionModule, MatFormFieldModule,
  MatGridListModule, MatIconModule, MatInputModule, MatListModule, MatNativeDateModule, MatPaginatorModule,
  MatProgressBarModule, MatProgressSpinnerModule, MatRadioModule, MatRippleModule, MatSelectModule, MatSnackBarModule, MatStepperModule,
  MatTabsModule, MatTooltipModule } from '@angular/material';
import {ToasterModule} from 'angular2-toaster';
import {ModalModule} from 'ngx-bootstrap/modal';
import {AuthService} from '../auth/auth.service';
import {DefaultModule} from '../auth/default.module';
import {ConstantService} from '../utilityservices/constant.service';
import {StorageService} from '../utilityservices/storage.service';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import {UserService} from './user.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ToasterModule,
    MatInputModule,
    MatSelectModule,
    ModalModule.forRoot(),
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    MatProgressBarModule,
    MatIconModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatListModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatRadioModule,
    MatRippleModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatStepperModule,
    DefaultModule,
  ],
  declarations: [LoginComponent, SignUpComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [
    AuthService,
    UserService,
    StorageService,
    ConstantService,

  ],
})
export class UserModule { }
