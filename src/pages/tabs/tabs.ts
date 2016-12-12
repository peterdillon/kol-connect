import { Component } from '@angular/core';

import { CardList } from '../cardlist/cardlist';
import { Relamain } from '../relationship/relationship';
//import { Relationship } from '../relationship/relationship';
//import { Scatterplot } from '../scatterplot/scatterplot';
import { Main } from '../scatterplot/scatterplot';
//import { Geographical } from '../geographical/geographical';
import { Geomain } from '../geographical/geographical';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = CardList;
  //tab2Root: any = Relationship;
  tab2Root: any = Relamain;
  //tab3Root: any = Scatterplot;
  tab3Root: any = Main;
  //tab4Root: any = Geographical;
  tab4Root: any = Geomain;

  constructor() {

  }
}
