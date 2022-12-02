import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsultarPageRoutingModule } from './consultar-routing.module';

import { ConsultarPage } from './consultar.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsultarPageRoutingModule,
	ComponentsModule
  ],
  declarations: [ConsultarPage]
})
export class ConsultarPageModule {}
