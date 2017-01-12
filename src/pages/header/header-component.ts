import { Component } from '@angular/core';
import { PopoverController, ViewController, NavParams, NavController } from 'ionic-angular';

import { KOLProfileCompare } from '../kol-profile-compare/kol-profile-compare';
import { FilterService } from '../../app/filter.service';

@Component({
  template: `
    <ion-grid class="custom-grid">
      <ion-list>
        <ion-row class="custom-ion-row">
          <ion-col width-80><span class="saved-filter-name">1. My saved filter set</span></ion-col>
          <ion-col width-20 class="custom-text-align"><span class="saved-filter-icon"><ion-icon name="close"></ion-icon></span></ion-col>
        </ion-row>
        <ion-row class="custom-ion-row">
          <ion-col width-80><span class="saved-filter-name">2. My saved filter set</span></ion-col>
          <ion-col width-20 class="custom-text-align"><span class="saved-filter-icon"><ion-icon name="close"></ion-icon></span></ion-col>
        </ion-row>
        <ion-row class="custom-ion-row">
          <ion-col width-80><span class="saved-filter-name">3. My saved filter set</span></ion-col>
          <ion-col width-20 class="custom-text-align"><span class="saved-filter-icon"><ion-icon name="close"></ion-icon></span></ion-col>
        </ion-row>
        <ion-row class="custom-top-margin">
          <ion-col>
            <ion-input type="text" class="custom-save-input" placeholder="New"></ion-input>
          </ion-col>
          <ion-col width-20 class="custom-text-align">
            <button ion-button type="submit" color="custom-save-button" class="custom-save-button">
              <ion-icon name="md-checkmark"></ion-icon>
            </button>
          </ion-col>
        </ion-row>
      </ion-list>
    </ion-grid>
  `
})
export class PopoverPage {
  constructor(public viewCtrl: ViewController, ) { }

  close() {
    this.viewCtrl.dismiss();
  }

} // END PopoverPage

@Component({
  selector: 'header-component',
  templateUrl: 'header-component.html'
})

export class HeaderComponent {
  constructor(public navCtrl: NavController, public params: NavParams, public popoverCtrl: PopoverController, private fs: FilterService) { }

  goToKOLCompare() {
      this.navCtrl.push(KOLProfileCompare);
    }

  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present({
      ev: myEvent
    });
  }

  overlayHidden: boolean = true;
  public hideOverlay() { this.overlayHidden = true; }
  public showOverlay() { this.overlayHidden = false; }

  public toggleTop40() {
    this.fs.toggleTop40();
  }

    

} // END HeaderComponent

