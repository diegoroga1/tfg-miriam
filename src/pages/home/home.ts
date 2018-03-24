import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {SelectFormPage} from '../select-form/select-form';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  hoteles;
  uid="";
  constructor(public navCtrl: NavController,public af:AngularFireDatabase,public auth:AngularFireAuth) {
    console.log();
    this.uid=this.auth.auth.currentUser.uid;
    this.af.list('users/'+this.uid+'/hoteles').valueChanges().subscribe(data=>{
      console.log(data);
      this.hoteles=data;

    })
    console.log(this.hoteles);
  }


  goForm(hotel){
    console.log(hotel);
    this.navCtrl.push(SelectFormPage,hotel);
  }

}
