import { Component, ViewChild } from '@angular/core';
import { Content, ModalController, Platform, PopoverController, ViewController, NavParams, NavController, LoadingController } from 'ionic-angular';

// --------------------------------------------------------
// SaveFilterSets template - opens in popover object above

@Component({
    selector: 'saved-filter',
    templateUrl: './saved-filters.html'
})
export class SaveFilterSets {
    constructor(public viewCtrl: ViewController) { }

    rows = [];
    filterName = "";
    addRow() {
        this.rows.push({ filterName: this.filterName });
        this.filterName = '';
    }
    removeRow(index) {
        this.rows.splice(index, 1);
    }

} 
