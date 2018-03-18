import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { LoginPage } from '../pages/login/login';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabase, AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import {SelectFormPage} from '../pages/select-form/select-form';
import {CustomFormPage} from '../pages/custom-form/custom-form';
import {BookingFormPage} from '../pages/booking-form/booking-form';
import {TripadvisorFormPage} from '../pages/tripadvisor-form/tripadvisor-form';
import {HolidayFormPage} from '../pages/holiday-form/holiday-form';


export const firebase={
  apiKey: "AIzaSyDbKcpLeKHXeO8hXkcmg67sKRawOClv4XI",
  authDomain: "valueofstay-fa44f.firebaseapp.com",
  databaseURL: "https://valueofstay-fa44f.firebaseio.com",
  projectId: "valueofstay-fa44f",
  storageBucket: "valueofstay-fa44f.appspot.com",
  messagingSenderId: "217921251961"
}
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    SelectFormPage,
    CustomFormPage,
    BookingFormPage,
    TripadvisorFormPage,
    HolidayFormPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    SelectFormPage,
    CustomFormPage,
    BookingFormPage,
    TripadvisorFormPage,
    HolidayFormPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
