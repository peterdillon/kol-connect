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
    nvD3,
    TabsPage
  ],
  providers: [{
    provide: ErrorHandler, 
    useClass: IonicErrorHandler
  }]
})
export class AppModule {}