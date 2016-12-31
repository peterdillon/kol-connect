import { Injectable } from '@angular/core';
import { LoadingController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class Test2Service {
// kols: any;
constructor(private http: Http, private loadingController: LoadingController) {  }

//   getKOLs(filter:string) {
//       //Filter ex:
//       // * are starred
//       // * has publications from Journal named "Jbr"
//       // * score > 50 
//       return this.http.get('https://kol-app-ionic2.firebaseio.com/mydata.json').map(res => res.json());
//   }
//   getKOL(id:String) {
//       //get stuff
//     return  [{
//           id: id, 
//           score: 23,
//           firstName: "First",
//           lastName: "Last",
//           specialty: "Hypothyroidism",
//           degree: "MD",
//           publications: [
//               {id: "A567", title: "Some pub title", journal: "Jbr"},
//               {id: "A867", title: "Some other pub title", journal: "Abc"}
//             ]
//       }];
//   }

}
