import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,ViewController} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl : ViewController) {
  }

  public closeModal(){
    this.viewCtrl.dismiss('dismiss');
  }

  public login(){
    // if(this.username == 'vivek.yadav' && this.password == '1234')
      this.viewCtrl.dismiss('login');
  }
}
