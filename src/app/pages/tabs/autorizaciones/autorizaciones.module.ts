import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AutorizacionesPageRoutingModule } from './autorizaciones-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';

import { AutorizacionesPage } from './autorizaciones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AutorizacionesPageRoutingModule,
	ComponentsModule,
  ],
  declarations: [AutorizacionesPage]
})
export class AutorizacionesPageModule {}
