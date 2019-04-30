import { NgModule } from '@angular/core';
import { FormLoginComponent } from './form-login/form-login';
import { TelaLoginComponent } from './tela-login/tela-login';
import { TelaDashboardComponent } from './tela-dashboard/tela-dashboard';
@NgModule({
	declarations: [FormLoginComponent,
    TelaLoginComponent,
    TelaDashboardComponent],
	imports: [],
	exports: [FormLoginComponent,
    TelaLoginComponent,
    TelaDashboardComponent]
})
export class ComponentsModule {}
