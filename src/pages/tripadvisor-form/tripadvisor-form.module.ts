import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TripadvisorFormPage } from './tripadvisor-form';

@NgModule({
  declarations: [
    TripadvisorFormPage,
  ],
  imports: [
    IonicPageModule.forChild(TripadvisorFormPage),
  ],
})
export class TripadvisorFormPageModule {}
