import { NgModule } from '@angular/core';
import { FormLoginComponent } from './form-login/form-login';
import { TelaLoginComponent } from './tela-login/tela-login';
@NgModule({
	declarations: [FormLoginComponent,
    TelaLoginComponent],
	imports: [],
	exports: [FormLoginComponent,
    TelaLoginComponent]
})
export class ComponentsModule {}
