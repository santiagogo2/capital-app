import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterceptorService } from './interceptors/interceptor.service';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		IonicModule.forRoot(),
		IonicStorageModule.forRoot(),
		AppRoutingModule,
		HttpClientModule,
	],
	providers: [
		{
			provide: RouteReuseStrategy,
			useClass: IonicRouteStrategy
		},
		// {
		// 	provide: HTTP_INTERCEPTORS,
		// 	useClass: InterceptorService,
		// 	multi: true
		// }
	],
	bootstrap: [
		AppComponent
	],
})
export class AppModule {}
