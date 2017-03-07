import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-engagement-details',
  templateUrl: 'engagement-details.html'
})
export class EngagementDetails {

  constructor(
    public navCtrl: NavController,
    public viewCtrl: ViewController ) {}

 dismiss() {
    this.viewCtrl.dismiss();
  }

}
