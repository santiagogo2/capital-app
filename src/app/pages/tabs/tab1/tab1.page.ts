import { Component, OnInit } from '@angular/core';

// Interfaces
import { Financiera } from 'src/app/interfaces';

// Servicios
import { SolicitudesFinancieraService, LoadingService, UiServiceService } from 'src/app/services/services.index';

@Component({
	selector: 'app-tab1',
	templateUrl: 'tab1.page.html',
	styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
	solicitudes_financiera: Financiera[] = [];

	constructor(
		private _loading_service: LoadingService,
		private _solicitudes_financiera_service: SolicitudesFinancieraService,
		private _ui_service: UiServiceService,
	) {}

	ngOnInit(): void {
		this._loading_service.showLoading();
		this._solicitudes_financiera_service.obtenerSolicitudes().subscribe(
			res => {
				this._loading_service.dismiss();
				this.solicitudes_financiera.push( ...res.presupuestos );
			},
			error => {
				console.log(error);
				let message = 'Error. Por favor recargar la página.';
				if( error ) {
					if( error.error ) {
					message = error.error.message;
					}
					if (error.error.errors) {
					message = message + '. ' + JSON.stringify(error.error.errors);
					}
				}
				
				this._loading_service.dismiss();
				this._ui_service.alertaInformativa(message);
			}
		);
	}
}
