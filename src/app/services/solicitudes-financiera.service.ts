import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// Servicios
import { environment } from '../../environments/environment';

// Intrefaces
import { Financiera } from '../interfaces';

const URL = environment.url;

@Injectable({
	providedIn: 'root'
})
export class SolicitudesFinancieraService {

	constructor(
		private _http: HttpClient,
	) {
	}

	obtenerSolicitudes(): Observable<any> {
		return this._http.get<Financiera>( `${URL}contratacion/presupuesto/adicionales/pruebaApp` );
	}
}
