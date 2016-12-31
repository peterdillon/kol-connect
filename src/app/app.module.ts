import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { CardList } from '../pages/cardlist/cardlist';
import { Barchart } from '../pages/barchart/barchart';
import { CardlistJSON } from '../pages/cardlistjson/cardlistjson';
import { Scatterplot } from '../pages/scatterplot/scatterplot';
import { nvD3 } from 'ng2-nvd3';
import { TabsPage } from '../pages/tabs/tabs';
import { HeaderComponent } from '../pages/header/header-component';
import { PopoverPage } from '../pages/header/header-component';
import { KOLProfilePage } from '../pages/kol-profile/kol-profile';
import { KOLProfileJson } from '../pages/kol-profilejson/kol-profilejson';
import { KOLProfileCompare } from '../pages/kol-profile-compare/kol-profile-compare';
import { KOLProfileCompareThree } from '../pages/kol-profile-compare-three/kol-profile-compare-three';
import { HighlightDirective } from '../pages/test/test';
import { Test } from '../pages/test/test';
import { Test2 } from '../pages/test2/test2';
// import { Test2Service } from '../pages/test2/test2.service';


@NgModule({
  declarations: [
    MyApp,
    CardList,
    Barchart,
    CardlistJSON,
    Scatterplot,
    HeaderComponent,
    PopoverPage,
    KOLProfilePage,
    KOLProfileJson,
    KOLProfileCompare,
    KOLProfileCompareThree,
    HighlightDirective,
    Test,
    Test2,
    nvD3,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CardList,
    Barchart,
    CardlistJSON,
    Scatterplot,
    HeaderComponent,
    PopoverPage,
    KOLProfilePage,
    KOLProfileJson,
    KOLProfileCompare,
    KOLProfileCompareThree,
    Test,
    Test2,
    nvD3,
    TabsPage
  ],
  providers: [{
    provide: ErrorHandler, 
    useClass: IonicErrorHandler
  }, 
    // Test2Service
  ]
})
export class AppModule {}