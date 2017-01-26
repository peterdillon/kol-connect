import { Component } from '@angular/core';
import { CardlistJSON } from '../cardlistjson/cardlistjson';
import { Score } from '../score/score';
import { Scatterplot } from '../chart-scatterplot/scatterplot';
import { Relationship } from '../chart-relationship/relationship';


@Component({
  templateUrl: './tabs.html'
})
export class TabsPage {
  tab1Root: any = CardlistJSON;
  tab2Root: any = Scatterplot;
  tab3Root: any = Relationship;
  tab4Root: any = Score;
  constructor() {

  }
}
