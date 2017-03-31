import { Injectable } from '@angular/core';
import { Filter } from './filter';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class FilterService {

    private data: Filter[] = [
        new Filter("bookmark", false, 0, "general"),
        new Filter("risingStar", false, 0, "general"),

        new Filter("MD", false, 0, "degree"),
        new Filter("MPH", false, 0, "degree"),
        new Filter("MS", false, 0, "degree"),
        new Filter("PhD", false, 0, "degree"),

        new Filter("Allergy and Immunology", false, 0, "specialty"),
        new Filter("Surgery", false, 0, "specialty"),
        new Filter("Endocrinology", false, 0, "specialty"),

        new Filter("Allergy & Asthma Specialists, PA", false, 0, "affiliations"),
        new Filter("David Geffen School of Medicine, UCLA", false, 0, "affiliations"),
        new Filter("Marycliff Allergy Specialists", false, 0, "affiliations"),
        new Filter("Massachusetts General Hospital", false, 0, "affiliations"),

        new Filter("< 5", false, 0, "pubsCount"),
        new Filter("< 10", false, 0, "pubsCount"),
        new Filter("< 20", false, 0, "pubsCount"),
        new Filter("20+", false, 0, "pubsCount"),
        
        new Filter("North", false, 0, "region"),
        new Filter("South", false, 0, "region"),
        new Filter("East", false, 0, "region"),
        new Filter("West", false, 0, "region"),
    ];

    private _filter: BehaviorSubject<Filter[]> = new BehaviorSubject([]);

    filters: Filter[];

    constructor() {
        this._filter.next(this.data);
    }

    getFilter() {
        return this._filter;
    }

    update() {
        this._filter.next(this.data);
    }

    getFilterByName(name: String) {
        let matches = this.data.filter(f => f.name == name);
        if (matches.length) {
            return matches[0];
        }
        return null;
    }

    getFiltersByCategory(name: String) {
        return this.data
            .filter(f => f.category == name && f.selected)
            .map(f => f.name);
    }
}


