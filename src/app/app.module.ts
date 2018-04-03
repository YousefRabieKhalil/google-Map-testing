import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

//import { ApiProvider } from '../providers/api/api';
//import { Facebook } from '@ionic-native/facebook';
import { Camera } from '@ionic-native/camera';
import { Market } from '@ionic-native/market';
import { GoogleMaps } from '@ionic-native/google-maps';
import { Geolocation } from '@ionic-native/geolocation';
import { CallNumber } from '@ionic-native/call-number';
import { SocialSharing } from '@ionic-native/social-sharing';
import { LaunchNavigator } from '@ionic-native/launch-navigator';
import { OneSignal } from '@ionic-native/onesignal';
import { Clipboard } from '@ionic-native/clipboard';
import { File } from '@ionic-native/file';
import { CacheImgModule } from '../global';
@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    CacheImgModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    GoogleMaps,
    File,
    OneSignal,
    Geolocation,
    SocialSharing,
    LaunchNavigator,
    Clipboard,
    CallNumber,
    Camera,
    Market,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
