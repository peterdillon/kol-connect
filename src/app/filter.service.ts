import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Filter } from './filter';

@Injectable()
export class FilterService {

    filters: Filter[];

    constructor() {
        this.filters = [
            new Filter("MD", false, 0, "degree"),
            new Filter("PhD", false, 0, "degree"),
            new Filter("1-5", false, 0, "pubsCount"),
            new Filter("5+", false, 0, "pubsCount"),
        ];
    }

    public toggleTop40(value) {
    //    this.filter.top40 = value;
   }

    public toggleDegreeFilter(value) {
        //If degree is found in degrees array, remove degree.
        // if(this.filter.degree.indexOf(value) > -1) {
        //     this.filter.degree.splice(this.filter.degree.indexOf(value), 1);
        //     return;
        // }
        // //Otherwise, add degree to degrees
        // this.filter.degree.push(value);
    }

    public isDegreeSelected(degree) {
        // return this.filter.degree.indexOf(degree) > -1;
    }

    public setJournalNumber(value) {
        // this.filter.totalSize = value;
       // console.log(this.filter);
    }
}


