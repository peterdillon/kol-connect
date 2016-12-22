import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the FilterSetsPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-filter-sets-page',
  templateUrl: 'filter-sets-page.html'
})
export class FilterSetsPagePage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello FilterSetsPagePage Page');
  }

}
