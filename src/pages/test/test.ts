import { Component, Injectable } from '@angular2/core';
import { NavController } from 'ionic-angular';

@Injectable()

class TestPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello TestPage Page');
  }

}
