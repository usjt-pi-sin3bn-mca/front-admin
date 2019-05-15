import { NgModule } from '@angular/core';
import { FormLoginComponent } from './form-login/form-login';
import { TelaHomeComponent } from './tela-home/tela-home';
@NgModule({
	declarations: [FormLoginComponent,
    TelaHomeComponent],
	imports: [],
	exports: [FormLoginComponent,
    TelaHomeComponent]
})
export class ComponentsModule {}
