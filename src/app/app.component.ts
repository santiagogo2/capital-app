import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Observable } from 'rxjs';

// Interfaces
import { OpcionMenu } from './interfaces';

// Servicios
import { DataService } from './services/services.index';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
	opciones_menu: Observable<OpcionMenu[]>;

	constructor(
		private _data_service: DataService,
		private _platform: Platform
	) {}

	ngOnInit() {
		this.inicializarAplicacion();
	}
	
	/**
	 * Metodo que inicializa las variables necesarias para mostrar la aplicación
	 * @name		inicializarAplicacion
	 * @author		Santiago Ramirez Gaitan <santiagooo42@gmail.com>
	 * @version		1.0.0
	 * @access		public
	*/
	inicializarAplicacion() {
		this._platform.ready().then( () => {
			this.opciones_menu = this._data_service.obtenerMenuOpciones();
		});		
	}
}
