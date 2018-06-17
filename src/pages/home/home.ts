import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
// import { RestProvider } from '../../providers/rest/rest';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  countries: any;
  errorMessage: string;

  scannedData:any;
  showScanQRCode:Boolean = true;
  constructor(public navCtrl: NavController,private barcodeScanner: BarcodeScanner) {
  }
  openScanner(){
    console.log("Opening Scanner");
    this.barcodeScanner.scan().then((barcodeData) => {
      this.showScanQRCode = false;
      // Success! Barcode data is here
      console.log("BarCode data",barcodeData);
      this.scannedData = barcodeData.text;

    }, (err) => {
      // An error occurred
      console.log("BarCode error",err);

    });
  }


  // ionViewDidLoad() {
  //   this.getCountries();
  // }
  //
  // getCountries() {
  //   this.rest.getCountries()
  //     .subscribe(
  //       countries => this.countries = countries,
  //       error =>  this.errorMessage = <any>error);
  // }



}
