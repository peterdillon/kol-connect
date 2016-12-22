import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { KOLProfilePage } from '../kol-profile/kol-profile';

@Component({
  selector: 'page-cardlist',
  templateUrl: 'cardlist.html'
})
export class CardList {

  constructor(private navCtrl: NavController) { }


  goToKOL() {
    this.navCtrl.push(KOLProfilePage);
  }

}
