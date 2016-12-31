import { Component } from '@angular/core';
import { CardList } from '../cardlist/cardlist';
import { Barchart } from '../barchart/barchart';
import { Scatterplot } from '../scatterplot/scatterplot';
import { CardlistJSON } from '../cardlistjson/cardlistjson';
import { Test } from '../test/test';
import { Test2 } from '../test2/test2';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root: any = CardList;
  tab2Root: any = Barchart;
  tab3Root: any = Scatterplot;
  tab4Root: any = CardlistJSON;
  tab5Root: any = Test;
  tab6Root: any = Test2;
  constructor() {

  }
}
