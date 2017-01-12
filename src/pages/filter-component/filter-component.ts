import { Component } from '@angular/core';
import { ModalController, Platform, PopoverController, ViewController, NavParams, NavController } from 'ionic-angular';
import { FilterService } from '../../app/filter.service';

@Component({
  selector: 'filter-component',
  templateUrl: 'filter-component.html'
})
export class FilterComponent {

  constructor(
    public modalCtrl: ModalController, 
    public navCtrl: NavController, 
    public params: NavParams, 
    public popoverCtrl: PopoverController, 
    private fs: FilterService,
    public viewCtrl: ViewController ) { }

  ionViewDidLoad() {
    console.log('Hello FilterOverlayPage Page');
  }
  
  // Dismiss filter overlay
  dismiss() {
    this.viewCtrl.dismiss();
  }

  // Show 'Saved Filter Sets'
  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(SaveFilterSets);
    popover.present({
      ev: myEvent
    });
  }

}


// SaveFilterSets template
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
export class SaveFilterSets {
  constructor(public viewCtrl: ViewController ) { }
} 
