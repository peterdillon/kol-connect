import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { KOLProfilePage } from '../kol-profile/kol-profile';
import { KOLProfileCompare } from '../kol-profile-compare/kol-profile-compare';
import { KOLProfileCompareThree } from '../kol-profile-compare-three/kol-profile-compare-three';

@Component({
  selector: 'page-cardlist',
  templateUrl: 'cardlist.html',
})
export class CardList {

  constructor(private navCtrl: NavController) { }

  goToKOL() {
    this.navCtrl.push(KOLProfilePage);
  }

  goToKOLCompare() {
    this.navCtrl.push(KOLProfileCompare);
  }

  goToKOLCompareThree() {
    this.navCtrl.push(KOLProfileCompareThree);
  }

}
