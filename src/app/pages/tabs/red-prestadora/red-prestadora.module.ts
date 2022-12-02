import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RedPrestadoraPageRoutingModule } from './red-prestadora-routing.module';

import { RedPrestadoraPage } from './red-prestadora.page';

import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RedPrestadoraPageRoutingModule,
	ComponentsModule,
  ],
  declarations: [RedPrestadoraPage]
})
export class RedPrestadoraPageModule {}
