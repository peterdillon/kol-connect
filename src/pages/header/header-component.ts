import { Component } from '@angular/core';
import { SocialSharing } from 'ionic-native';
import { ModalController, PopoverController, ViewController, NavParams, NavController } from 'ionic-angular';
import { FilterComponent } from '../filter-component/filter-component';
import { KOLProfileCompare } from '../kol-profile-compare/kol-profile-compare';
import { FilterService } from '../../app/filter.service';
import { Filter } from '../../app/filter';
import { KOLsFilterPipe } from './filter-pipe';


@Component({
  selector: 'header-component',
  templateUrl: './header-component.html'
})

export class HeaderComponent {

  constructor(
    public modalCtrl: ModalController,
    public navCtrl: NavController,
    public params: NavParams,
    public popoverCtrl: PopoverController,
    public fs: FilterService,
    private viewCtrl: ViewController) { }



emailShare() {
  SocialSharing.canShareViaEmail().then(() => {
    // Sharing via email is possible
  }).catch(() => {
    // Sharing via email is not possible
  });

  // Share via email
  SocialSharing.shareViaEmail('Body', 'Subject', null).then(() => {
    // Success!
  }).catch(() => {
    // Error!
  });
}


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

}



