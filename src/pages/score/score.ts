import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-score',
  templateUrl: 'score.html'
})
export class Score {

  constructor(public navCtrl: NavController) {}


  criteria1: number = 40;
  criteria2: number = 60;
  criteria3: number = 20;
  warmth: number = 1300;
  // structure: any = {lower: 33, upper: 60};

  onChange(ev) {
    console.log('Changed', ev);
  }

}
