import { Component } from '@angular/core';
import { SocialSharing } from 'ionic-native';
import { ModalController, PopoverController, ViewController, NavParams, NavController } from 'ionic-angular';
import { FilterComponent } from '../filter-component/filter-component';
import { FilterService } from '../../app/filter.service';
import { Filter } from '../../app/filter';
import { Score } from '../score/score';

@Component({
  selector: 'header-component',
  templateUrl: './header-component.html'
})

export class HeaderComponent {

  sortBy: any;
  sortChoice: any;

  bookmarkFilter: Filter;
  risingStarFilter: Filter;

  constructor(
    public modalCtrl: ModalController,
    public navCtrl: NavController,
    public params: NavParams,
    public popoverCtrl: PopoverController,
    public fs: FilterService,
    private viewCtrl: ViewController) {

    this.sortBy = { "kind": "Score" };
    this.sortChoice = ["Recently Updated", "Score", "First name", "Last name"];

    this.bookmarkFilter = fs.getFilterByName('bookmark');
    this.risingStarFilter = fs.getFilterByName('risingStar');

  }

 staticFilters = [
   { name: "MD" },
   { name: "PhD" },
   { name: "North" },
   { name: "West" },
   { name: "< 20 Publications" },
   { name: "Affiliations: Maryland School of Medicine" }

 ]

  generalShare() {
    SocialSharing.share("Message", null, null, "Message 2")
      .then(() => {
        // alert("Success");
      },
      () => {
        // alert("Failed")
      })
  }

  goToConfig() {
    this.navCtrl.push(Score);
  }

  presentModal() {
    let modal = this.modalCtrl.create(FilterComponent);
    modal.present();
  }

  toggleBookmarks() {
    this.bookmarkFilter.toggle();
    this.fs.update();
  }

  toggleRisingStars() {
    this.risingStarFilter.toggle();
    this.fs.update();
  }

}



