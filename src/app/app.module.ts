import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { CardList } from '../pages/cardlist/cardlist';
import { Relationship } from '../pages/relationship/relationship';
import { Relamain } from '../pages/relationship/relationship';
import { Scatterplot } from '../pages/scatterplot/scatterplot';
import { Main } from '../pages/scatterplot/scatterplot';
import { nvD3 } from 'ng2-nvd3';
import { Geomain } from '../pages/geographical/geographical';
import { Geographical } from '../pages/geographical/geographical';
import { TabsPage } from '../pages/tabs/tabs';


@NgModule({
  declarations: [
    MyApp,
    CardList,
    Relationship,
    Relamain,
    Scatterplot,
    Main,
    nvD3,
    Geographical,
    Geomain,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CardList,
    Relationship,
    Relamain,
    Scatterplot,
    Main,
    nvD3,
    Geographical,
    Geomain,
    TabsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}


