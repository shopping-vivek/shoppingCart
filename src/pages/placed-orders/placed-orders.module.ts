import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlacedOrdersPage } from './placed-orders';

@NgModule({
  declarations: [
    PlacedOrdersPage,
  ],
  imports: [
    IonicPageModule.forChild(PlacedOrdersPage),
  ],
})
export class PlacedOrdersPageModule {}
