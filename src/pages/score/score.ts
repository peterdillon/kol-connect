import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';

@Component({
  selector: 'page-score',
  templateUrl: 'score.html'
})
export class Score {

@ViewChild('dataContainer') dataContainer: ElementRef;

  constructor(
    public navCtrl: NavController,
    public toastCtrl: ToastController ) {}

  criteria1: number = 5;
  criteria2: number = 25;
  criteria3: number = 15;
  criteria4: number = 15;
  criteria5: number = 15;
  criteria6: number = 10;
  criteria7: number = 10;
  isValidTotal = true;
  errorMsg = "";
  criteriaTotal = this.criteria1 + this.criteria2 + this.criteria3 + this.criteria4 + this.criteria5 + this.criteria6 + this.criteria7;

  ionViewDidLoad() {
    
    if (this.criteriaTotal == 100) {
      this.isValidTotal = true;
      this.errorMsg = "Perfect"
    }
    if ( (this.criteriaTotal < 100) || (this.criteriaTotal > 100) ) {
      this.isValidTotal = false;
      this.errorMsg = "The total weight must equal 100."
    }
  }

  getScoreTotal() {

    this.criteriaTotal = this.criteria1 + this.criteria2 + this.criteria3 + this.criteria4 + this.criteria5 + this.criteria6 + this.criteria7;

    if ( (this.criteriaTotal < 100) || (this.criteriaTotal > 100) ) {
      this.isValidTotal = false;
      this.errorMsg = "The total weight must equal 100."
    }
    if (this.criteriaTotal == 100) {
      this.isValidTotal = true;
      this.errorMsg = "Perfect!"
    }
  }

  save() {
      let toast = this.toastCtrl.create({
        message: 'Saved score!',
        duration: 1500,
        position: 'middle'
      });
      toast.present();
  }

  reset() {
    this.criteria1 = 0;
    this.criteria2 = 0;
    this.criteria3 = 0;
    this.criteria4 = 0;
    this.criteria5 = 0;
    this.criteria6 = 0;
    this.criteria7 = 0;
    this.criteriaTotal =  0;
    this.isValidTotal = false;
    this.errorMsg = "The total weight must equal 100."
  }

}
