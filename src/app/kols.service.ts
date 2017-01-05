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
}
