import { Component } from '@angular/core';
import { ModalController, PopoverController, ViewController, NavParams, NavController } from 'ionic-angular';
import { FilterComponent } from '../filter-component/filter-component';
import { KOLProfileCompare } from '../kol-profile-compare/kol-profile-compare';
import { FilterService } from '../../app/filter.service';

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
    private fs: FilterService,
    private viewCtrl: ViewController ) { }

  goToKOLCompare() {
      this.navCtrl.push(KOLProfileCompare);
    }

  presentModal() {
    let modal = this.modalCtrl.create(FilterComponent);
    modal.present();
  }
}

