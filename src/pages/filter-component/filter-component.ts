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
  selector: 'saved-filter',
  templateUrl: 'saved-filters.html'
})
export class SaveFilterSets {
  constructor(public viewCtrl: ViewController ) { }
} 
