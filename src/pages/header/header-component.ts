import { Component } from '@angular/core';
import { ModalController, PopoverController, ViewController, NavParams, NavController } from 'ionic-angular';
import { FilterComponent } from '../filter-component/filter-component';
import { KOLProfileCompare } from '../kol-profile-compare/kol-profile-compare';
import { FilterService } from '../../app/filter.service';
import { Filter } from '../../app/filter';
import { KOLsFilterPipe } from './filter-pipe';

@Component({
  selector: 'header-component',
  templateUrl: 'header-component.html'
})



export class HeaderComponent {
  
  constructor(
    public modalCtrl: ModalController,
    public navCtrl: NavController,
    public params: NavParams,
    public popoverCtrl: PopoverController,
    public fs: FilterService,
    private viewCtrl: ViewController) { }

  isClassVisible: boolean = false;
  applyClass() {
    this.isClassVisible = !this.isClassVisible;
    console.log(this.isClassVisible);
  }

  goToKOLCompare() {
    this.navCtrl.push(KOLProfileCompare);
  }

  presentModal() {
    let modal = this.modalCtrl.create(FilterComponent);
    modal.present();
  }

  public toggleTop40() {
    // this.fs.filter.top40 = !this.fs.filter.top40;
  }

  removeDegreeFilter(degree) {
    this.fs.toggleDegreeFilter(degree);
  }

  // doesItemContainPublication() {
  //   console.log("in top 40");
  //  // this.fs.top40 = !this.fs.top40;
  // }


}



