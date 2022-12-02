import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
	providedIn: 'root'
})
export class UiServiceService {
	constructor(
		private alert_controller: AlertController,
	) { }
	
	/**
	 * Servicio para mostrar una alerta informativa en el sistema
	 * @name		autenticarUsuario
	 * @author		Santiago Ramirez Gaitan <santiagooo42@gmail.com>
	 * @version		1.0.0
	 * @access		public
	*/
	async alertaInformativa( mensaje: string ) {
		const alert = await this.alert_controller.create({
			message: mensaje,
			buttons: ['OK']
		});

		await alert.present();
	}
}
