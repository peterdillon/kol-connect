import { Component } from '@angular/core';
import { CardlistJSON } from '../cardlistjson/cardlistjson';
// import { Barchart } from '../chart-bar/barchart';
import { Scatterplot } from '../chart-scatterplot/scatterplot';
import { Relationship } from '../chart-relationship/relationship';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root: any = CardlistJSON;
  // tab2Root: any = Barchart;
  tab2Root: any = Scatterplot;
  tab3Root: any = Relationship;
  constructor() {

  }
}
