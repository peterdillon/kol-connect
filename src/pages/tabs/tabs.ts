import { Component } from '@angular/core';
import { CardlistJSON } from '../cardlistjson/cardlistjson';
import { Login } from '../login/login';
import { RowList } from '../row-list/row-list';
import { Scatterplot } from '../chart-scatterplot/scatterplot';
import { Relationship } from '../chart-relationship/relationship';


@Component({
  templateUrl: './tabs.html'
})
export class TabsPage {
  tab1Root: any = Login;
  tab2Root: any = CardlistJSON;
  tab3Root: any = RowList;
  tab4Root: any = Scatterplot;
  tab5Root: any = Relationship;
  constructor() {

  }
}
