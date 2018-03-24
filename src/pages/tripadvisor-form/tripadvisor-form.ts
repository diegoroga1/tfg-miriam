import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import {HomePage} from "../home/home";
/**
 * Generated class for the TripadvisorFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tripadvisor-form',
  templateUrl: 'tripadvisor-form.html',
})
export class TripadvisorFormPage {
  hotel="";
  todo2={};

  constructor(public navCtrl: NavController, public navParams: NavParams,public af:AngularFireDatabase) {
    this.hotel=this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TripadvisorFormPage');
  }
  submitForm(){
    this.af.list('/'+this.hotel+'/tripadvisor/encuestas').push(this.todo2);
    this.navCtrl.setRoot(HomePage);

  }
}
