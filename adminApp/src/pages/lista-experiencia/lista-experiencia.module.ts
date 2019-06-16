import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaExperienciaPage } from './lista-experiencia';

@NgModule({
  declarations: [
    ListaExperienciaPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaExperienciaPage),
  ],
})
export class ListaExperienciaPageModule {}
