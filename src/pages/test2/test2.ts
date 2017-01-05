import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { Http } from '@angular/http';
import { KOLProfileJson } from '../kol-profilejson/kol-profilejson';
//import { Test2Service } from './test2.service';
// private test2Service:Test2Service,
@Component({
  selector: 'page-test2',
  templateUrl: 'test2.html'
})

export class Test2  {
  
  selectedStatus: Array<boolean> = [];
  kols: any;
  id: any;
  
  constructor(public navCtrl: NavController, public params: NavParams,  private loadingController: LoadingController, private http: Http) { }

// Load full list
  ionViewDidEnter() {
    let loader = this.loadingController.create({
      content: "Getting KOLS..."
    });

// curl 'https://kol-app-ionic2.firebaseio.com/kols.json?orderBy="id"&startAt=0'

    loader.present().then( () => {
      this.http.get('https://kol-app-ionic2.firebaseio.com/kols.json').map(res => res.json()).subscribe(data => {
            this.kols = data;
            loader.dismiss();
            console.log("kols: " + this.kols);
      });
    });
  }

ionViewWillUnload() {
  console.log("why unloaded?");
}


// Go load a single KOL
  goToKOL(id) {
    console.log(id);
    this.navCtrl.push(KOLProfileJson, {
      id: id
    });
  }

  // More stuff to remove -------------------------------------
  // heroes = ['Peter', 'Dr. Wilson', 'Another Name', 'Helena'];
  //   addHero(newHero: string) {
  //     if (newHero) {
  //       this.heroes.push(newHero);
  //     }
  //   }

} // END of class - rename this one too!
