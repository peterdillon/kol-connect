import { Component } from '@angular/core';
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
  selector: 'page-row-list',
  templateUrl: './row-list.html'
})


export class RowList {

  selectedStatus: Array<boolean> = [];
  kols: any[];
  id: any;
  showFilters: false;

  constructor(
    public navCtrl: NavController,
    public params: NavParams,
    private loadingController: LoadingController,
    private http: Http,
    private kolService: KOLsService
    ) { }

  //------------------------------

  counter = 0;
  showCompare = false;
  isClassVisible = false;
  
  selectedKOLs(i, counter, isChecked) {
    this.selectedStatus[i] = !this.selectedStatus[i];
    this.isClassVisible = !this.isClassVisible;
    console.log(this.counter);
    if (this.counter > 0) {
      this.showCompare = true;
    }
    if (!this.selectedStatus[i]) {
      this.showCompare = false;
     // this.counter--;
    }
    this.counter++;
    return this.counter;
  }
  //------------------------------

  goToKOLCompare() {
    this.navCtrl.push(KOLProfileCompare);
    this.showCompare = false;
  }

  // Load full list
  ionViewWillEnter() {
    let loader = this.loadingController.create({
      content: "Getting KOLS..."
    });

    loader.present().then(() => {
      this.kolService.getKOLs().subscribe(data => {
        this.kols = data;
        loader.dismiss();
      });
    });
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

} // END class CardlistJSON


