import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
@Component({
  selector: 'page-kol-profile-compare-three',
  templateUrl: './kol-profile-compare-three.html'
})
export class KOLProfileCompareThree {
  constructor(public navCtrl: NavController) { }
  ionViewDidLoad() {
    console.log('KOLProfileCompareThree did load');
  }
}