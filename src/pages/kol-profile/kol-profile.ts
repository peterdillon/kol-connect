import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
@Component({
  selector: 'page-kol-profile',
  templateUrl: 'kol-profile.html'
})
export class KOLProfilePage {
  constructor(public navCtrl: NavController) {}
  ionViewDidLoad() {
    console.log('KOLProfilePage did load');
  }
}