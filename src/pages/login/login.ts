import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs'
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public modalCtrl: ModalController) {
  }

  public openModal(pageTitle){
    let data = { pageTitle : pageTitle};
    let modalPage = this.modalCtrl.create('ModalPage',data);
    modalPage.present();
    modalPage.onDidDismiss((data) => {
      // if(data == 'login')
        this.navCtrl.push('TabsPage');
      // this.router.navigateByUrl('/login');
    })
  }
}

