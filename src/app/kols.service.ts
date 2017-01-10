import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class KOLsService {
    constructor(private http: Http) { }

    getKOLs() {
        //Filter ex:
        // * are starred
        // * has publications from Journal named "Jbr"
        // * score > 50         
        return this.http.get('https://kol-app-ionic2.firebaseio.com/kols.json').map(res => res.json());
    }

    getKOL(id: String) {
        return this.http.get('https://kol-app-ionic2.firebaseio.com/kols/' + id + '.json').map(res => res.json());

        // return [{
        //     id: id,
        //     score: 23,
        //     firstName: "First",
        //     lastName: "Last",
        //     specialty: "Hypothyroidism",
        //     degree: "MD",
        //     publications: [
        //         { id: "A567", title: "Some pub title", journal: "Jbr" },
        //         { id: "A867", title: "Some other pub title", journal: "Abc" }
        //     ]
        // }];
    }

    getKOLsForScatter() {
        return [
            { name: "Johnson Lau", key: 'key1', values: [{ x: 31, y: 73 }, { x: 54, y: 39 }, { x: 35, y: 11 }, { x: 93, y: 73 }, { x: 90, y: 21 }] },
            { name: "Jane Lau", key: 'key2', values: [{ x: 88, y: 52 }, { x: 23, y: 43 }, { x: 13, y: 33 }, { x: 98, y: 76 }, { x: 5, y: 69 }] },
            { name: "Jimmy Lau", key: 'key3', values: [{ x: 10, y: 10 }, { x: 20, y: 20 }, { x: 30, y: 30 }, { x: 40, y: 40 }, { x: 50, y: 50 }] }
        ];
    }
}
