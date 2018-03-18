import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HolidayFormPage } from './holiday-form';

@NgModule({
  declarations: [
    HolidayFormPage,
  ],
  imports: [
    IonicPageModule.forChild(HolidayFormPage),
  ],
})
export class HolidayFormPageModule {}
