import { Component, ViewChild } from '@angular/core';
import { Content, ModalController, Platform, PopoverController, ViewController, NavParams, NavController, LoadingController } from 'ionic-angular';
import { FilterService } from '../../app/filter.service';
import { CategoryFilterPipe } from './category-pipe';
import { KOLsService } from '../../app/kols.service';
import { SaveFilterSets } from './saved-filter';

@Component({
  selector: 'filter-component',
  templateUrl: './filter-component.html'
})
export class FilterComponent {

  kols: any[];

  @ViewChild(Content) content: Content;

  constructor(
    public modalCtrl: ModalController,
    public navCtrl: NavController,
    public viewCtrl: ViewController,
    public params: NavParams,
    public popoverCtrl: PopoverController,
    private loadingController: LoadingController,
    private kolService: KOLsService,
    public fs: FilterService) { }

  ionViewDidLoad() {
    console.log('FilterOverlayPage ViewDidLoad');
  }
  // Load full list
  ionViewWillEnter() {
    let loader = this.loadingController.create({
      content: "Loading filters..."
    });

    loader.present().then(() => {
      this.kolService.getKOLs().subscribe(data => {
        this.kols = data;
        loader.dismiss();
      });
    });
  }

  // Scroll to sections
  scrollTo(element) {
    let yOffset = document.getElementById(element).offsetTop;
    this.content.scrollTo(0, yOffset, 1000);
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