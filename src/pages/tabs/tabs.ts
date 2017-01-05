import { Component } from '@angular/core';
//import { CardList } from '../cardlist/cardlist';
import { CardlistJSON } from '../cardlistjson/cardlistjson';
import { Barchart } from '../barchart/barchart';
import { Scatterplot } from '../scatterplot/scatterplot';
import { Test } from '../test/test';
import { Test2 } from '../test2/test2';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // tab1Root: any = CardList;
  tab1Root: any = CardlistJSON;
  tab2Root: any = Barchart;
  tab3Root: any = Scatterplot;
  tab4Root: any = Test;
  tab5Root: any = Test2;
  constructor() {

  }
}
