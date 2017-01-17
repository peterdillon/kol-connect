import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { Http } from '@angular/http';
import { KOLsService } from '../../app/kols.service';

@Component({
  selector: 'page-kol-profilejson',
  templateUrl: 'kol-profilejson.html'
})

export class KOLProfileJson {

  kols: any;

  constructor(
    public navCtrl: NavController, 
    public params: NavParams,
    public loadingController: LoadingController,
    public http: Http,
    private kolService: KOLsService ) { }

  ionViewWillEnter(id) {
    let loader = this.loadingController.create({
      content: "Loading profile..."
    });

    id = this.params.get('Id');
    console.log(id);

    loader.present().then(() => {
      this.kolService.getKOL(id).subscribe(data => {
        this.kols = data;
        loader.dismiss();
      });
    });
  }

}