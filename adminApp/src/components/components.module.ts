import { NgModule } from '@angular/core';
import { FormLoginComponent } from './form-login/form-login';
import { TelaHomeComponent } from './tela-home/tela-home';
import { LoginScreenComponent } from './login-screen/login-screen';
import { CadastroPartidasComponent } from './cadastro-partidas/cadastro-partidas';
import { MenuLateralComponent } from './menu-lateral/menu-lateral';
import { PlacarOnlineComponent } from './placar-online/placar-online';
import { ConveniosComponent } from './convenios/convenios';
@NgModule({
	declarations: [FormLoginComponent,
    TelaHomeComponent,
    LoginScreenComponent,
    CadastroPartidasComponent,
    MenuLateralComponent,
    PlacarOnlineComponent,
    ConveniosComponent],
	imports: [],
	exports: [FormLoginComponent,
    TelaHomeComponent,
    LoginScreenComponent,
    CadastroPartidasComponent,
    MenuLateralComponent,
    PlacarOnlineComponent,
    ConveniosComponent]
})
export class ComponentsModule {}
