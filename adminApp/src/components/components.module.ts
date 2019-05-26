import { NgModule } from '@angular/core';
import { FormLoginComponent } from './form-login/form-login';
import { TelaHomeComponent } from './tela-home/tela-home';
import { LoginScreenComponent } from './login-screen/login-screen';
@NgModule({
	declarations: [FormLoginComponent,
    TelaHomeComponent,
    LoginScreenComponent],
	imports: [],
	exports: [FormLoginComponent,
    TelaHomeComponent,
    LoginScreenComponent]
})
export class ComponentsModule {}
