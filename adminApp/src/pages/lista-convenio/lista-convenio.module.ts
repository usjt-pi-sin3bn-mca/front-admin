import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaConvenioPage } from './lista-convenio';

@NgModule({
  declarations: [
    ListaConvenioPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaConvenioPage),
  ],
})
export class ListaConvenioPageModule {}
