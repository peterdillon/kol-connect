import { Component } from '@angular/core';
//import { CardList } from '../cardlist/cardlist';
import { CardlistJSON } from '../cardlistjson/cardlistjson';
import { Barchart } from '../barchart/barchart';
import { Scatterplot } from '../scatterplot/scatterplot';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root: any = CardlistJSON;
  tab2Root: any = Barchart;
  tab3Root: any = Scatterplot;
  constructor() {

  }
}
