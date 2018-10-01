//import { TimelineComponentModule } from './../../../projectX/ionic3-components/src/components/timeline/timeline.module';
//import { TimelinePageModule } from './../../../projectX/ionic3-components/src/pages/timeline/timeline.module';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { IntroPage } from '../pages/intro/intro';
import { ExperiencePage } from '../pages/experience/experience';
import { TabsPage } from '../pages/tabs/tabs';
import { TimelineComponentModule } from '../pages/timeline/timeline.module';
//import { TimelineComponentModule } from './timeline/timeline.module';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    IntroPage,
    ExperiencePage
  ],
  imports: [
    BrowserModule,
    TimelineComponentModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    IntroPage,
    ExperiencePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
