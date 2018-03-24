import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import {HomePage} from "../home/home";
/**
 * Generated class for the HolidayFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-holiday-form',
  templateUrl: 'holiday-form.html',
})
export class HolidayFormPage {
  todo3={};
  hotel="";
  constructor(public navCtrl: NavController, public navParams: NavParams,public af:AngularFireDatabase) {
    this.hotel=this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HolidayFormPage');
  }
  submitForm(){
    this.af.list('/'+this.hotel+'/holiday/encuestas').push(this.todo3);
    this.navCtrl.setRoot(HomePage);

  }
}
