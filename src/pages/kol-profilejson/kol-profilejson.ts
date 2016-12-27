import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-kol-profilejson',
  templateUrl: 'kol-profilejson.html'
})

export class KOLProfileJson {
  
  public firstParam:any;
  public secondParam:any;

  constructor(public navCtrl: NavController, public params: NavParams) {
    this.firstParam = params.get("firstPassed");
    this.secondParam = params.get("secondPassed");
  }

  ionViewDidLoad() {
    console.log('KOLProfilejson did load');
  }

}