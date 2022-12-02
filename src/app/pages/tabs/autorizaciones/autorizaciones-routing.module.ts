import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AutorizacionesPage } from './autorizaciones.page';

const routes: Routes = [
	{
		path: 'consultar',
		loadChildren: () => import('./consultar/consultar.module').then( m => m.ConsultarPageModule)
	},
	{
		path: 'solicitar',
		loadChildren: () => import('./solicitar/solicitar.module').then( m => m.SolicitarPageModule)
	},
	{
		path: '',
		component: AutorizacionesPage
	},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AutorizacionesPageRoutingModule {}
