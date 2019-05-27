import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastrarPartidaPage } from './cadastrar-partida';

@NgModule({
  declarations: [
    CadastrarPartidaPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastrarPartidaPage),
  ],
})
export class CadastrarPartidaPageModule {}
