import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
@Component({
  selector: 'page-kol-profile-compare',
  templateUrl: 'kol-profile-compare.html'
})
export class KOLProfileCompare {
  constructor(public navCtrl: NavController) {}
  ionViewDidLoad() {
    console.log('KOLProfileCompare did load');
  }
}