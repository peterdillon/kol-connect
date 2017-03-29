import { Component } from '@angular/core';
import { Cardlist } from '../cardlist/cardlist';
import { Login } from '../login/login';
import { RowList } from '../row-list/row-list';
import { Scatterplot } from '../chart-scatterplot/scatterplot';
import { Relationship } from '../chart-relationship/relationship';
import { Engagements } from '../engagements/engagements';


@Component({
  templateUrl: './tabs.html'
})
export class TabsPage {
  tab1Root: any = Login;
  tab2Root: any = Cardlist;
  tab3Root: any = RowList;
  tab4Root: any = Scatterplot;
  tab5Root: any = Relationship;
  tab6Root: any = Engagements;
  constructor() {

  }
}
