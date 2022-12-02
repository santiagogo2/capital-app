import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Interfaces
import { OpcionMenu, Subred } from '../interfaces';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class DataService {

	constructor(
		private _http: HttpClient,
	) {}
	
	/**
	 * Servicio que añade un cero al número ingresado
	 * @name		obtenerFechaActual
	 * @author		Santiago Ramirez Gaitan <santiagooo42@gmail.com>
	 * @version		1.0.0
	 * @access		public
	 * 
	 * @param 		{any} numero
	 * 
	 * @returns 
	*/
	añadirZero( numero: any ) {
		if ( numero < 10 ) {
			numero = '0' + numero.toString();
		}
		return numero;
	}
	
	/**
	 * Servicio que obtiene de un archivo json las opciones del menú
	 * @name		obtenerMenuOpciones
	 * @author		Santiago Ramirez Gaitan <santiagooo42@gmail.com>
	 * @version		1.0.0
	 * @access		public
	 * 
	 * @returns 
	*/
	obtenerMenuOpciones(): Observable<OpcionMenu[]> {
		return this._http.get<OpcionMenu[]>('/assets/data/opciones-menu.json');
	}
	
	/**
	 * Servicio que obtiene de un archivo json las subredes integradas de servicios de salud
	 * @name		obtenerSubredes
	 * @author		Santiago Ramirez Gaitan <santiagooo42@gmail.com>
	 * @version		1.0.0
	 * @access		public
	 * 
	 * @returns 
	*/
	obtenerSubredes(): Observable<Subred[]> {
		return this._http.get<Subred[]>('/assets/data/subredes.json');
	}
	
	/**
	 * Servicio que obtiene la fecha actual para usarlo en las restricciones de fechas
	 * @name		obtenerFechaActual
	 * @author		Santiago Ramirez Gaitan <santiagooo42@gmail.com>
	 * @version		1.0.0
	 * @access		public
	 * 
	 * @returns 
	*/
	obtenerFechaActual() {
		const date = new Date();
		const day = this.añadirZero( date.getDate() );
		let month = date.getMonth() + 1;
		month = this.añadirZero( month );
		const year = date.getFullYear();

		return year + '-' + month + '-' + day;
	}
}
