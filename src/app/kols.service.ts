import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class KOLsService {
    constructor(private http: Http) { }
    
 public baseURL = 'http://localhost:8100/assets/data/kols.json';

    getKOLs() {
        return this.http.get(this.baseURL).map(res => res.json());
    }

    getKOL(id: String) {
        console.log(this.baseURL + '?Id=' +  id);
        return this.http.get(this.baseURL + '?Id=' +  id).map(res => res.json());
    }

    getKOLsForScatter() {
        return [
            { status: "Oncology Research, CO", imgPath: "../assets/custom/doctor-1.png", name: "Dr. Margaret Holmes", key: 'key1', values: [{ x: 31, y: 73 }, { x: 54, y: 39 }, { x: 35, y: 11 }, { x: 93, y: 73 }, { x: 90, y: 21 }] },
            { status: "Carodiolgy Research, CA", imgPath: "../assets/custom/doctor-2.png", name: "Dr. William O'Neil", key: 'key2', values: [{ x: 88, y: 52 }, { x: 23, y: 43 }, { x: 13, y: 33 }, { x: 98, y: 76 }, { x: 5, y: 69 }] },
            { status: "Allergy Research, NY",imgPath: "../assets/custom/doctor-3.png", name: "Dr. Kurt Schmidt", key: 'key3', values: [{ x: 10, y: 10 }, { x: 20, y: 20 }, { x: 30, y: 30 }, { x: 40, y: 40 }, { x: 50, y: 50 }] }
        ];
    }
}
