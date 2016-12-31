import { Component } from '@angular/core';
import { LoadingController, NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { KOLProfileJson } from '../kol-profilejson/kol-profilejson';
import { KOLProfileCompare } from '../kol-profile-compare/kol-profile-compare';
import { KOLProfileCompareThree } from '../kol-profile-compare-three/kol-profile-compare-three';

@Component({
  selector: 'page-cardlistjson',
  templateUrl: 'cardlistjson.html'
})

export class CardlistJSON {

  selectedStatus: Array<boolean> = [];

  kols: any;
  constructor(public navCtrl: NavController, public http: Http, private loadingController: LoadingController) { }

  ionViewDidLoad() {
    let loader = this.loadingController.create({
      content: "Getting KOLS..."
    });

    loader.present().then( () => {
      this.http.get('https://kol-app-ionic2.firebaseio.com/mydata.json').map(res => res.json()).subscribe(data => {
            this.kols = data.kols;
            loader.dismiss();
            console.log(this.kols);
      });
    });
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

// With data passed
  // goToKOL(f,l) {
  //   this.navCtrl.push(KOLProfileJson, {
  //     firstPassed: "Firstname",
  //     secondPassed: "Lastname"
  //   });
  // }

// -----------------------
// Static - to be removed
  goToKOLCompare() {
    this.navCtrl.push(KOLProfileCompare);
  }
  goToKOLCompareThree() {
    this.navCtrl.push(KOLProfileCompareThree);
  }
// -----------------------


} // END class CardlistJSON

