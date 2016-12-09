import { Component } from '@angular/core';

import { CardList } from '../cardlist/cardlist';
import { Relationship } from '../relationship/relationship';
import { Scatterplot } from '../scatterplot/scatterplot';
import { Geographical } from '../geographical/geographical';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = CardList;
  tab2Root: any = Relationship;
  tab3Root: any = Scatterplot;
  tab4Root: any = Geographical;

  constructor() {

  }
}
