import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlacarOnlinePage } from './placar-online';

@NgModule({
  declarations: [
    PlacarOnlinePage,
  ],
  imports: [
    IonicPageModule.forChild(PlacarOnlinePage),
  ],
})
export class PlacarOnlinePageModule {}
