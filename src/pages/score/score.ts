import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-score',
  templateUrl: 'score.html'
})
export class Score {

  constructor(public navCtrl: NavController) {}


  criteria1: number = 5;
  criteria2: number = 25;
  criteria3: number = 15;
  criteria4: number = 15;
  criteria5: number = 15;
  criteria6: number = 10;
  criteria7: number = 80;
  warmth: number = 15;
  // structure: any = {lower: 33, upper: 60};

  onChange(ev) {
    console.log('Changed', ev);
  }

}
