import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DoctorProfilePage } from './doctor-profile';

@NgModule({
  declarations: [
    DoctorProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(DoctorProfilePage),
  ],
  exports: [
    DoctorProfilePage
  ]
})
export class DoctorProfilePageModule {}
