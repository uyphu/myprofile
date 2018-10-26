import { AlertController } from 'ionic-angular';
import { Component } from '@angular/core';
import { NavController, ActionSheetController, ModalController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(
    public navCtrl: NavController,
    public actionSheetCtrl: ActionSheetController,
    public modalCtrl: ModalController,
    public alertCtrl: AlertController) {
  }

  documents: any = [{
    name: 'Phone: +13102272090',
  }, {
    name: 'Email: letruonguyphu@gmail.com'
  }, {
    name: 'LinkedIn: https://www.linkedin.com/in/le-truong-uy-phu-57727547/'
  }, {
    name: 'Skype: letruonguyphu'
  }];

  presentActionSheet(document) {
    const actionSheet = this.actionSheetCtrl.create({
      title: document.name,
      buttons: [
        {
          text: 'Move',
          handler: () => {
            this.moveDocumentModal(document);
            console.log('Move clicked');
          }
        }, {
          text: 'Rename',
          handler: () => {
            const navTransition = actionSheet.dismiss();
            navTransition.then(() => {
              // wait until action sheet dismisses
              // https://ionicframework.com/docs/api/components/action-sheet/ActionSheetController/#advanced
              this.renameDocument(document);
              console.log('Rename clicked');
            });
            return false;
          }
        }, {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

  moveDocumentModal(document) {
    const myModal = this.modalCtrl.create('ModalNavPage', { page: 'MoveDocumentPage' });
    myModal.onDidDismiss(data => {
      if (data) {
        //this.toastCtrl.create('"' + document.name + '" moved to folder "' + data.name + '"');
      }
    });
    myModal.present();
  }

  renameDocument(document) {
    const prompt = this.alertCtrl.create({
      title: 'Rename Document',
      inputs: [
        {
          name: 'title',
          placeholder: 'Title',
          value: document.name
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            document.name = data.title;
            console.log('Saved clicked');
          }
        }
      ]
    });

    prompt.present();
  }

}
