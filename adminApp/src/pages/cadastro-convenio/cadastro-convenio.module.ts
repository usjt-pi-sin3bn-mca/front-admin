import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastroConvenioPage } from './cadastro-convenio';

@NgModule({
  declarations: [
    CadastroConvenioPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastroConvenioPage),
  ],
})
export class CadastroConvenioPageModule {}
