import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { CardList } from '../pages/cardlist/cardlist';
import { Barchart } from '../pages/barchart/barchart';
import { Scatterplot } from '../pages/scatterplot/scatterplot';
import { nvD3 } from 'ng2-nvd3';
import { TabsPage } from '../pages/tabs/tabs';


@NgModule({
  declarations: [
    MyApp,
    CardList,
    Barchart,
    Scatterplot,
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
    Scatterplot,
    nvD3,
    TabsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}


