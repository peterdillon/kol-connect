import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { Http } from '@angular/http';
import { KOLsService } from '../../app/kols.service';

@Component({
  selector: 'page-kol-profilejson',
  templateUrl: './kol-profilejson.html'
})

export class KOLProfileJson {

  kols: any;
  kol: any;

  constructor(
    public navCtrl: NavController,
    public params: NavParams,
    public loadingController: LoadingController,
    public http: Http,
    private kolService: KOLsService) {
    this.kol = {};
  }

  ionViewWillEnter(id) {
    let loader = this.loadingController.create({
      content: "Loading profile..."
    });

    id = this.params.get('id');

    loader.present().then(() => {
      this.kolService.getKOLs().subscribe(data => {
        var filteredData = data.filter(item => {
          return item.Id == id;
        });
        if (filteredData.length) {
          this.kol = filteredData[0];
        }
        loader.dismiss();
      });

      // this.kolService.getKOL(id).subscribe(data => {
      //   // this.kols = data;
      //   console.log(data);
      //   loader.dismiss();
      // }, 
      // error => {
      //   console.log(error);
      // });
    });
  }

}