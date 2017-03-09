import { Component } from '@angular/core';
import { CardlistJSON } from '../cardlistjson/cardlistjson';
import { Login } from '../login/login';
import { Scatterplot } from '../chart-scatterplot/scatterplot';
import { Relationship } from '../chart-relationship/relationship';


@Component({
  templateUrl: './tabs.html'
})
export class TabsPage {
  tab1Root: any = Login;
  tab2Root: any = CardlistJSON;
  tab3Root: any = Scatterplot;
  tab4Root: any = Relationship;
  constructor() {

  }
}
