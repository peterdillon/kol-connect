import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
//import { CardList } from '../pages/cardlist/cardlist';
import { Barchart } from '../pages/barchart/barchart';
import { CardlistJSON } from '../pages/cardlistjson/cardlistjson';
import { KOLsFilterPipe } from '../pages/cardlistjson/filter-pipe';
import { CategoryFilterPipe } from '../pages/filter-component/category-pipe';
import { Scatterplot } from '../pages/scatterplot/scatterplot';
import { nvD3 } from 'ng2-nvd3';
import { TabsPage } from '../pages/tabs/tabs';
import { HeaderComponent } from '../pages/header/header-component';
import { FilterComponent } from '../pages/filter-component/filter-component';
import { SaveFilterSets } from '../pages/filter-component/filter-component';
import { KOLProfilePage } from '../pages/kol-profile/kol-profile';
import { KOLProfileJson } from '../pages/kol-profilejson/kol-profilejson';
import { KOLProfileCompare } from '../pages/kol-profile-compare/kol-profile-compare';
import { KOLProfileCompareThree } from '../pages/kol-profile-compare-three/kol-profile-compare-three';
import { KOLsService } from '../app/kols.service';
import { FilterService } from '../app/filter.service';



@NgModule({
  declarations: [
    MyApp,
    //CardList,
    Barchart,
    CardlistJSON,
    KOLsFilterPipe,
    Scatterplot,
    HeaderComponent,
    FilterComponent,
    SaveFilterSets,
    KOLProfilePage,
    KOLProfileJson,
    KOLProfileCompare,
    KOLProfileCompareThree,
    nvD3,
    TabsPage,
    CategoryFilterPipe
  ],
  imports: [
    IonicModule.forRoot(MyApp, {}, {
      links: [
        { component: CardlistJSON, name: 'KOLs', segment: 'home' },
        { component: Scatterplot, name: 'Scatterplot', segment: 'scatterplot' },
        { component: Barchart, name: 'Barchart', segment: 'barchart' }
      ]
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    // CardList,
    Barchart,
    CardlistJSON,
    Scatterplot,
    HeaderComponent,
    FilterComponent,
    SaveFilterSets,
    KOLProfilePage,
    KOLProfileJson,
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