import { Component } from '@angular/core';
import { LoadingController, NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-cardlistjson',
  templateUrl: 'cardlistjson.html'
})

export class CardlistJSON {

  kols: any;
  constructor(public navCtrl: NavController, public http: Http, private loadingController: LoadingController) { }

  ionViewDidLoad() {
    console.log("loader");
    let loader = this.loadingController.create({
      content: "Getting KOLS..."
    });

    loader.present().then( () => {
      this.http.get('https://kol-app-ionic2.firebaseio.com/data.json').map(res => res.json()).subscribe(data => {
            this.kols = data.kols;
            loader.dismiss();
      });
    }); 
  }
}