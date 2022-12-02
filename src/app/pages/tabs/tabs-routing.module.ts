import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
	{
		path: 'tabs',
		component: TabsPage,
		children: [
			{
			  path: 'autorizaciones',
			  loadChildren: () => import('./autorizaciones/autorizaciones.module').then( m => m.AutorizacionesPageModule)
			},
			{
				path: 'home',
				loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
			},			
			{
				path: 'red-prestadora',
				loadChildren: () => import('./red-prestadora/red-prestadora.module').then( m => m.RedPrestadoraPageModule)
			},
			{
				path: '',
				redirectTo: '/tabs/home',
				pathMatch: 'full'
			},
		]
	},
	{
		path: '',
		redirectTo: '/tabs/home',
		pathMatch: 'full'
	},
  {
    path: 'mis-datos',
    loadChildren: () => import('./mis-datos/mis-datos.module').then( m => m.MisDatosPageModule)
  },
  {
    path: 'certificados',
    loadChildren: () => import('./certificados/certificados.module').then( m => m.CertificadosPageModule)
  },
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
