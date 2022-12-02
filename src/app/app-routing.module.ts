import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	// {
	// 	path: 'main',
	// 	loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
	// },
	{
		path: 'login',
		loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
	},
	// {
	// 	path: '',
	// 	pathMatch: 'full',
	// 	redirectTo: 'login',
	// },
	{
		path: '',
		loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
	},
	// {
	// 	path: 'home',
	// 	loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
	// },
	{
		path: 'autorizaciones',
		loadChildren: () => import('./pages/autorizaciones/autorizaciones.module').then( m => m.AutorizacionesPageModule)
	}
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
	],
	exports: [
		RouterModule
	]
})
export class AppRoutingModule {}
