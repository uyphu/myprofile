import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ExperiencePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-experience',
  templateUrl: 'experience.html',
})
export class ExperiencePage {

  items = [
    {
      title: 'Courgette daikon',
      content: `Parsley amaranth tigernut silver beet maize fennel spinach. Ricebean black-eyed pea maize
                scallion green bean spinach cabbage jícama bell pepper carrot onion corn plantain garbanzo.
                Sierra leone bologi komatsuna celery peanut swiss chard silver beet squash dandelion maize
                chicory burdock tatsoi dulse radish wakame beetroot.`,
      icon: 'calendar',
      time: { subtitle: '4/16/2013', title: '21:30' }
    },
    {
      title: 'Courgette daikon',
      content: `Parsley amaranth tigernut silver beet maize fennel spinach. Ricebean black-eyed pea maize
                scallion green bean spinach cabbage jícama bell pepper carrot onion corn plantain garbanzo.
                Sierra leone bologi komatsuna celery peanut swiss chard silver beet squash dandelion maize
                chicory burdock tatsoi dulse radish wakame beetroot.`,
      icon: 'calendar',
      time: { subtitle: 'January', title: '29' }
    },
    {
      title: 'Courgette daikon',
      content: `Parsley amaranth tigernut silver beet maize fennel spinach. Ricebean black-eyed pea maize
                scallion green bean spinach cabbage jícama bell pepper carrot onion corn plantain garbanzo.
                Sierra leone bologi komatsuna celery peanut swiss chard silver beet squash dandelion maize
                chicory burdock tatsoi dulse radish wakame beetroot.`,
      icon: 'calendar',
      time: { title: 'Short Text' }
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    //this.description = this.filterFilter(this.description);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExperiencePage');
  }

}
