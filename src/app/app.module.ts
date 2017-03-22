import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Login } from '../pages/login/login';
import { Scatterplot } from '../pages/chart-scatterplot/scatterplot';
import { Relationship } from '../pages/chart-relationship/relationship';
import { Cardlist } from '../pages/cardlist/cardlist';
import { Engagements } from '../pages/engagements/engagements';
import { Score } from '../pages/score/score';
import { RowList } from '../pages/row-list/row-list';
import { KOLsFilterPipe } from '../pages/cardlist/filter-pipe';
import { CategoryFilterPipe } from '../pages/filter-component/category-pipe';
import { nvD3 } from 'ng2-nvd3';
import { TabsPage } from '../pages/tabs/tabs';
import { HeaderComponent } from '../pages/header/header-component';
import { FilterComponent } from '../pages/filter-component/filter-component';
import { SaveFilterSets } from '../pages/filter-component/saved-filter';
import { KOLProfilePage } from '../pages/kol-profile/kol-profile';
import { EngagementDetails } from '../pages/engagement-details/engagement-details';
import { KOLProfileJson } from '../pages/kol-profilejson/kol-profilejson';
import { KOLProfileCompare } from '../pages/kol-profile-compare/kol-profile-compare';
import { KOLProfileCompareThree } from '../pages/kol-profile-compare-three/kol-profile-compare-three';
import { KOLsService } from '../app/kols.service';
import { FilterService } from '../app/filter.service';

@NgModule({
  declarations: [
    MyApp,
    Login,
    Score,
    RowList,
    Relationship,
    Cardlist,
    Engagements,
    KOLsFilterPipe,
    Scatterplot,
    HeaderComponent,
    FilterComponent,
    SaveFilterSets,
    KOLProfilePage,
    KOLProfileJson,
    EngagementDetails,
    KOLProfileCompare,
    KOLProfileCompareThree,
    nvD3,
    TabsPage,
    CategoryFilterPipe
  ],
  imports: [
    IonicModule.forRoot(MyApp, {}, {
      links: [
        { component: Cardlist, name: 'KOLs', segment: 'home' },
        { component: Scatterplot, name: 'Scatterplot', segment: 'scatterplot' }
      ]
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Login,
    Score,
    RowList,
    Relationship,
    Cardlist,
    Engagements,
    Scatterplot,
    HeaderComponent,
    FilterComponent,
    SaveFilterSets,
    KOLProfilePage,
    KOLProfileJson,
    EngagementDetails,
    KOLProfileCompare,
    KOLProfileCompareThree,
    nvD3,
    TabsPage
  ],
  providers: [
    {
      provide: ErrorHandler,
      useClass: IonicErrorHandler
    },
    KOLsService,
    FilterService
  ]
})
export class AppModule { }