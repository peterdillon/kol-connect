import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Filter } from './filter';

@Injectable()
export class FilterService {

    filter: Filter;

    constructor() {
        this.filter = new Filter();
    }

    public toggleTop40() {
        this.filter.top40 = !this.filter.top40;
    }
}


