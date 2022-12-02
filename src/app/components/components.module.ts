import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { SwiperModule } from 'swiper/angular';

// Componentes
import { HeaderComponent } from './header/header.component';
import { ModulosCardComponent } from './modulos-card/modulos-card.component';
import { OpcionesCardComponent } from './opciones-card/opciones-card.component';
import { PrincipalHeaderComponent } from './principal-header/principal-header.component';
import { SolicitudFinancieraComponent } from './solicitud-financiera/solicitud-financiera.component';
import { SolicitudesFinancieraComponent } from './solicitudes-financiera/solicitudes-financiera.component';

@NgModule({
	declarations: [
		HeaderComponent,
		ModulosCardComponent,
		OpcionesCardComponent,
		PrincipalHeaderComponent,
		SolicitudFinancieraComponent,
		SolicitudesFinancieraComponent,
	],
	imports: [
		CommonModule,
		IonicModule,
		SwiperModule,
		RouterModule,
	],
	exports: [
		HeaderComponent,
		ModulosCardComponent,
		OpcionesCardComponent,
		PrincipalHeaderComponent,
		SolicitudFinancieraComponent,
		SolicitudesFinancieraComponent,
	]
})
export class ComponentsModule { }
