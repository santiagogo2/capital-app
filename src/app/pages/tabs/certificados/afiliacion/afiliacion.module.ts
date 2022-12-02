import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AfiliacionPageRoutingModule } from './afiliacion-routing.module';

import { AfiliacionPage } from './afiliacion.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AfiliacionPageRoutingModule,
	ComponentsModule
  ],
  declarations: [AfiliacionPage]
})
export class AfiliacionPageModule {}
