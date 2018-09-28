import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the IntroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html',
})
export class IntroPage {
  

  private user = {
    name: 'Phu Le',
    profileImage: 'assets/imgs/avatar/avatar.jpg',
    coverImage: 'assets/img/background/background-5.jpg',
    occupation: 'Software Engineer',
    location: 'Torrance, CA',
    description: 'Passionate full stak depveloper with over 9 years experience. Currently working on web development and mobile app on Ionic framework.',
    address: '29013 New Hampshire, Torrance, CA 90502',
    phone: '310-227-2090',
    email: 'uyphu@yahoo.com',
    whatsapp: '310-227-2090',
  };

  constructor(public navCtrl: NavController) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfileFivePage');
  }

}

