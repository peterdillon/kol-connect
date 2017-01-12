import { Component, Injectable } from '@angular/core';
import { LoadingController, NavParams, NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { FilterComponent } from '../filter-component/filter-component';
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
  showFilters: false;

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

 selectedKOLs(i) {
   this.selectedStatus[i]=!this.selectedStatus[i];
 }


  ionViewDidEnter() {
    console.log("CardlistJSON ViewDidEnter");
  }
  ionViewWillUnload() {
    console.log("CardlistJSON ViewWillUnload");
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
  goToKOLCompareThree() {
    this.navCtrl.push(KOLProfileCompareThree);
  }
  // -----------------------


} // END class CardlistJSON


