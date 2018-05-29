import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PreviewModalPage } from './preview-modal';

@NgModule({
  declarations: [
    PreviewModalPage,
  ],
  imports: [
    IonicPageModule.forChild(PreviewModalPage),
  ],
  exports: [
    PreviewModalPage
  ]
})
export class PreviewModalPageModule {}
