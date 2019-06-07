import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaPartidasPage } from './lista-partidas';

@NgModule({
  declarations: [
    ListaPartidasPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaPartidasPage),
  ],
})
export class ListaPartidasPageModule {}
