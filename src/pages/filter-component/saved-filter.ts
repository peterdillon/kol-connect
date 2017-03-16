import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

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
