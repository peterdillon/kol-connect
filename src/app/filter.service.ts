import { Injectable } from '@angular/core';
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

}


