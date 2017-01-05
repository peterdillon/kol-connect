import { Component, Injectable } from '@angular/core';
import { LoadingController, NavParams, NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

// import { IsotopeFilter } from '../pages/isotope-filter/isotope-filter';
import { KOLProfileJson } from '../kol-profilejson/kol-profilejson';
import { KOLProfileCompare } from '../kol-profile-compare/kol-profile-compare';
import { KOLProfileCompareThree } from '../kol-profile-compare-three/kol-profile-compare-three';
import { KOLsFilterPipe } from './filter-pipe';
import { KOLsService } from '../../app/kols.service';

@Component({
  selector: 'page-cardlistjson',
  templateUrl: 'cardlistjson.html'
})

export class CardlistJSON {

  selectedStatus: Array<boolean> = [];
  kols: any[];
  id: any;

  constructor(public navCtrl: NavController, public params: NavParams, private loadingController: LoadingController, private http: Http, private kolService: KOLsService) { }

  // Load full list
  ionViewWillEnter() {
    let loader = this.loadingController.create({
      content: "Getting KOLS..."
    });

    // curl 'https://kol-app-ionic2.firebaseio.com/kols.json?orderBy="id"&startAt=0'
    loader.present().then(() => {
      this.kolService.getKOLs().subscribe(data => {
        this.kols = data;
        loader.dismiss();
      });
    });
  }


  ionViewDidEnter() {
    console.log("did enter");
  }



  ionViewWillUnload() {
    console.log("why unloaded?");
  }


  // Go load a single KOL
  goToKOL(id) {
    console.log(id);
    this.navCtrl.push(KOLProfileJson, {
      id: id
    });
  }

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

