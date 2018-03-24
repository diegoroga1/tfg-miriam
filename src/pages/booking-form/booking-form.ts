import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import {HomePage} from "../home/home";
/**
 * Generated class for the BookingFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-booking-form',
  templateUrl: 'booking-form.html',
})
export class BookingFormPage {
  modo_viaje="";
  todo={};
  relationship={};
  limpieza={};
  hotel="";
  total_encuentas=0;
  paises=[];
  constructor(public navCtrl: NavController, public navParams: NavParams,public af:AngularFireDatabase) {
    this.hotel=this.navParams.data;
    console.log(this.hotel);
    this.getData();
   /* this.af.list('/paises') .valueChanges()
      .subscribe(res => {
        console.log(res);
        this.paises.push(res);
        console.log(this.paises);


      })*/
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookingFormPage');
  }
  seleccionado(this){

  }
  getData(){
    this.af.list('/'+this.hotel+'/booking/encuestas') .valueChanges()
      .subscribe(res => {
        this.total_encuentas=res.length;


      })

  }
  submitForm(){
    this.af.list('/'+this.hotel+'/booking/encuestas').push(this.todo);
    this.navCtrl.setRoot(HomePage);
  }

}
