import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { CardList } from '../pages/cardlist/cardlist';
import { Relationship } from '../pages/relationship/relationship';
import { Scatterplot } from '../pages/scatterplot/scatterplot';
import { nvD3 } from 'ng2-nvd3';
import { Geographical } from '../pages/geographical/geographical';
import { TabsPage } from '../pages/tabs/tabs';


@NgModule({
  declarations: [
    MyApp,
    CardList,
    Relationship,
    Scatterplot,
    nvD3,
    Geographical,
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
    Scatterplot,
    nvD3,
    Geographical,
    TabsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}