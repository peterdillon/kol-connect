import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { Http } from '@angular/http';

@Component({
  selector: 'page-kol-profilejson',
  templateUrl: 'kol-profilejson.html'
})

export class KOLProfileJson {
  
  kols: any;

  constructor(public navCtrl: NavController, public params: NavParams, public loadingController: LoadingController, public http: Http) { }
  
  ionViewWillEnter(id) {
    let loader = this.loadingController.create({
      content: "Loading profile..."
    });

    id = this.params.get('id');

    loader.present().then( () => {  
      this.http.get('https://kol-app-ionic2.firebaseio.com/mydata/kols/'+ id +'/koldetails.json').map(res => res.json()).subscribe(data => {
            this.kols = data;
            console.log('https://kol-app-ionic2.firebaseio.com/mydata/kols/'+ id +'/koldetails.json');
            loader.dismiss();
      });
    });
  }

}