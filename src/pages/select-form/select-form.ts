import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {CustomFormPage} from "../custom-form/custom-form";
import {BookingFormPage} from "../booking-form/booking-form";
import {TripadvisorFormPage} from "../tripadvisor-form/tripadvisor-form";
import {HolidayFormPage} from "../holiday-form/holiday-form";

/**
 * Generated class for the SelectFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-select-form',
  templateUrl: 'select-form.html',
})
export class SelectFormPage {
  hotel="";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.hotel=this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectFormPage');
  }


  createForm(type){
    console.log(this.hotel);
    if(type=="booking"){
      this.navCtrl.push(BookingFormPage,this.hotel)

    }if(type=="tripadvisor"){
      this.navCtrl.push(TripadvisorFormPage,this.hotel)

    }if(type=="holiday"){
      this.navCtrl.push(HolidayFormPage,this.hotel)

    }

  }

}
