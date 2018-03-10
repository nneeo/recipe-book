import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShopingListPage } from './shoping-list';

@NgModule({
  declarations: [
    ShopingListPage,
  ],
  imports: [
    IonicPageModule.forChild(ShopingListPage),
  ],
  exports: [
    ShopingListPage
  ]
})
export class ShopingListPageModule {}
