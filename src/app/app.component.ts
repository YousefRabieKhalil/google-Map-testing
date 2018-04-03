import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ImgCacheService } from '../global';
import { HomePage } from '../pages/home/home';
import * as firebase from 'firebase';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform,private statusBar: StatusBar,private splashScreen: SplashScreen , private ImgCacheservice : ImgCacheService) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      console.log('the platform is ready');
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      //this.helperTools.IntializeUSerCurrentPosition();
      this.InitFirebase();
      //this.onesignalController.initOneSignal();
      this.ImgCacheservice.initImgCache().subscribe((v) => console.log('init'), () => console.log('fail init'));
    });
  }
  InitFirebase() {
    var config = {
      apiKey: "AIzaSyCiucPsQhvXrKhteN0PMHJJ6OV6eF76YHs",
      authDomain: "foundira-195920.firebaseapp.com",
      databaseURL: "https://foundira-195920.firebaseio.com",
      projectId: "foundira-195920",
      storageBucket: "foundira-195920.appspot.com",
      messagingSenderId: "101552018888"
    };
    firebase.initializeApp(config);
  }
}

