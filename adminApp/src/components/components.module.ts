import { NgModule } from '@angular/core';

import { TelaHomeComponent } from './tela-home/tela-home';
import { LoginScreenComponent } from './login-screen/login-screen';
import { CadastroPartidasComponent } from './cadastro-partidas/cadastro-partidas';
import { MenuLateralComponent } from './menu-lateral/menu-lateral';
import { PlacarOnlineComponent } from './placar-online/placar-online';
import { ConveniosComponent } from './convenios/convenios';
@NgModule({
	declarations: [
    TelaHomeComponent,
    LoginScreenComponent,
    CadastroPartidasComponent,
    MenuLateralComponent,
    PlacarOnlineComponent,
    ConveniosComponent],
	imports: [],
	exports: [
    TelaHomeComponent,
    LoginScreenComponent,
    CadastroPartidasComponent,
    MenuLateralComponent,
    PlacarOnlineComponent,
    ConveniosComponent]
})
export class ComponentsModule {}
