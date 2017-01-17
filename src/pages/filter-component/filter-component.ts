import { Component, ViewChild } from '@angular/core';
import { Content, ModalController, Platform, PopoverController, ViewController, NavParams, NavController, LoadingController } from 'ionic-angular';
import { FilterService } from '../../app/filter.service';
import { KOLsFilterPipe } from './filter-pipe';
import { KOLsService } from '../../app/kols.service';

@Component({
  selector: 'filter-component',
  templateUrl: 'filter-component.html'
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
    private fs: FilterService ) { }

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



// filterMedical(items: any[]): any {
//         // filter items array, items which match and 
//         // return true will be kept, false will be filtered out
//         if (typeof items === 'undefined') {
//             return items;
//         }
//         function doesItemContainPublication(item: any, title: any) {
//             return item.publications.filter(p => p.title == 'Medical').length > 0
//         }
//         return items.filter(item => {
//             if (this.fs.filter.top40) {
//                 //Pretend this means "top 40"
//                 // return item.rank < 15;
//                 //Demo of filtering an array
//                 return doesItemContainPublication(item, 'Medical');
//             }
//             return true;
//         });
// }




  // Scroll to sections
  scrollTo(element) {
    let yOffset = document.getElementById(element).offsetTop;
    this.content.scrollTo(0, yOffset, 2000);
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

// --------------------------------------------------------
// SaveFilterSets template - opens in popover object above

@Component({
  selector: 'saved-filter',
  templateUrl: 'saved-filters.html'
})
export class SaveFilterSets {
  constructor(public viewCtrl: ViewController ) { }

  rows = [];
  filterName = "";
  addRow() {
    this.rows.push({filterName: this.filterName});
    this.filterName = '';
  }
  removeRow(index) {
   this.rows.splice(index, 1);
  }
  
} 
