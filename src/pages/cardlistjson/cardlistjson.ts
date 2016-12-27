import { Component } from '@angular/core';
import { LoadingController, NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { KOLProfileJson } from '../kol-profilejson/kol-profilejson';

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
      });
    }); 
  }

  goToKOL(f,l) {
      this.navCtrl.push(KOLProfileJson, {
        firstPassed: "value 1",
        secondPassed: "value 2"
      });
    }


}