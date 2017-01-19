import { Component, Injectable, trigger, state, style, transition, animate, keyframes } from '@angular/core';
import { LoadingController, NavParams, NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { FilterComponent } from '../filter-component/filter-component';
import { KOLProfileJson } from '../kol-profilejson/kol-profilejson';
import { KOLProfileCompare } from '../kol-profile-compare/kol-profile-compare';
import { KOLProfileCompareThree } from '../kol-profile-compare-three/kol-profile-compare-three';
import { KOLsFilterPipe } from './filter-pipe';
import { KOLsService } from '../../app/kols.service';
import { HeaderComponent } from '../header/header-component';

@Component({
  selector: 'page-cardlistjson',
  templateUrl: 'cardlistjson.html',
  providers: [HeaderComponent],
  animations: [
    trigger('flip', [
      state('flipped', style({
        transform: 'rotate(180deg)',
        backgroundColor: '#f50e80'
      })),
      transition('* => flipped', animate('400ms ease'))
    ]),
    trigger('flyInOut', [
      state('in', style({
        transform: 'translate3d(0, 0, 0)'
      })),
      state('out', style({
        transform: 'translate3d(150%, 0, 0)'
      })),
      transition('in => out', animate('200ms ease-in')),
      transition('out => in', animate('200ms ease-out'))
    ]),
    trigger('fade', [
      state('visible', style({
        opacity: 1
      })),
      state('invisible', style({
        opacity: 0.1
      })),
      transition('visible <=> invisible', animate('200ms linear'))
    ]),
    trigger('bounce', [
      state('bouncing', style({
        transform: 'translate3d(0,0,0)'
      })),
      transition('* => bouncing', [
        animate('300ms ease-in', keyframes([
          style({transform: 'translate3d(0,0,0)', offset: 0}),
          style({transform: 'translate3d(0,-10px,0)', offset: 0.5}),
          style({transform: 'translate3d(0,0,0)', offset: 1}) 
        ]))
      ])
    ])
  ] // end animations array
})


export class CardlistJSON {

  selectedStatus: Array<boolean> = [];
  kols: any[];
  id: any;
  showFilters: false;

  flipState: String = 'notFlipped';
  flyInOutState: String = 'in';
  fadeState: String = 'visible';
  bounceState: String = 'noBounce';

  constructor(
    public navCtrl: NavController, 
    public params: NavParams, 
    private loadingController: LoadingController, 
    private http: Http, 
    private kolService: KOLsService,
    public hc: HeaderComponent ) { }

//------------------------------
  counter: number = 0;
  selectedKOLs(i, counter) {
      this.selectedStatus[i] = !this.selectedStatus[i];
      
      if (this.counter > 0 ) {
        // alert("i: " + this.counter);
        this.hc.applyClass();
      }
      this.counter++;
      return this.counter;
  }
//------------------------------



  // Load full list
  ionViewWillEnter() {
    let loader = this.loadingController.create({
      content: "Getting KOLS..."
    });

    loader.present().then(() => {
      this.kolService.getKOLs().subscribe(data => {
        this.kols = data;
        loader.dismiss();
      });
    });
  }

  ionViewDidEnter() {
    console.log("CardlistJSON ViewDidEnter");
  }
  ionViewWillUnload() {
    console.log("CardlistJSON ViewWillUnload");
  }
  // Go load a single KOL
  goToKOL(id) {
    console.log(id);
    this.navCtrl.push(KOLProfileJson, {
      id: id
    });
  }

  // -----------------------
  // Static - to be removed
  goToKOLCompareThree() {
    this.navCtrl.push(KOLProfileCompareThree);
  }
  // -----------------------

   // Testing Animations
  toggleFlip(){
    this.flipState = (this.flipState == 'notFlipped') ? 'flipped' : 'notFlipped';
  }
  toggleFlyInOut(){
    this.flyInOutState = 'out';
    setInterval(() => {
      this.flyInOutState = 'in';
    }, 2000);
  }
  toggleFade() {
    this.fadeState = (this.fadeState == 'visible') ? 'invisible' : 'visible';    
  }
  toggleBounce(){
    this.bounceState = (this.bounceState == 'noBounce') ? 'bouncing' : 'noBounce';   
  }
 //------------------------------



} // END class CardlistJSON


