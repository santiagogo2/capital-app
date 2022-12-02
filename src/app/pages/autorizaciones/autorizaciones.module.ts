import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AutorizacionesPageRoutingModule } from './autorizaciones-routing.module';

import { AutorizacionesPage } from './autorizaciones.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
	imports: [
		CommonModule,
		ComponentsModule,
		FormsModule,
		IonicModule,
		AutorizacionesPageRoutingModule
	],
	declarations: [AutorizacionesPage]
})
export class AutorizacionesPageModule {}
