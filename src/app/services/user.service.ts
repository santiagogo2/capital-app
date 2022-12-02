import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Storage } from '@ionic/storage-angular'

// Servicios
import { StorageService } from './storage.service';

const URL = environment.url;

@Injectable({
  	providedIn: 'root'
})
export class UserService {

	constructor(
		private _http: HttpClient,
		private _storage_service: StorageService,
	) {	}
	
	/**
	 * Servicio que autentica el usuario y retorna el token que será usado en el aplicativo
	 * @name		autenticarUsuario
	 * @author		Santiago Ramirez Gaitan <santiagooo42@gmail.com>
	 * @version		1.0.0
	 * @access		public
	 * 
	 * @returns 
	*/
	autenticarUsuario( credenciales ): Observable<any> {
        return this._http.post( `${URL}usuarios/adicionales/autenticarUsuario`, credenciales );
    }
	
	/**
	 * Función que guarda el token en el storage
	 * @name		guardarToken
	 * @author		Santiago Ramirez Gaitan <santiagooo42@gmail.com>
	 * @version		1.0.0
	 * @access		public
	 * 
	 * @returns 
	*/
	async guardarToken( token: string ) {
		await this._storage_service.set('x-token', token);
	}
	
	/**
	 * Servicio que obtiene los datos del usuario contenidos en el x-token
	 * @name		obtenerIdentidadUsuario
	 * @author		Santiago Ramirez Gaitan <santiagooo42@gmail.com>
	 * @version		1.0.0
	 * @access		public
	 * 
	 * @returns 
	*/
	async obtenerIdentidadUsuario() {
		const token = await this._storage_service.get('x-token');
		const headers = new HttpHeaders({
			'x-token': token
		});
        
		return new Promise( (resolve, reject) => {
			this._http.get( `${URL}usuarios/adicionales/obtenerIdentidadUsuario`, {headers} ).subscribe(
				res => {
					this._storage_service.set('x-usuario', JSON.stringify(res['usuario'].user));
					const expirationtime = new Date( new Date().getTime() + ((res['usuario'].exp - res['usuario'].iat)*1000) );
					this._storage_service.set('x-expiration', expirationtime.toString());
					resolve( res );
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
					
					reject(message);
				});
		});
    }

	/**
	 * Función que obtiene la identidad del usuario del local storage
	 * @name		obtenerIdentidadUsuario
	 * @author		Santiago Ramirez Gaitan <santiagooo42@gmail.com>
	 * @version		1.0.0
	 * @access		public
	 * 
	 * @returns 
	*/
	// async obtenerIdentidadUsuarioLocal() {
	// 	const identity = JSON.parse(await this._storage.get('x-usuario'));

	// 	if (identity && identity !== undefined) {
	// 		return identity
	// 	} else {
	// 		return null;
	// 	}
	// }

	/**
	 * Función que obtiene los permisos de grupos del usuario
	 * @name		obtenerPermisosUsuario
	 * @author		Santiago Ramirez Gaitan <santiagooo42@gmail.com>
	 * @version		1.0.0
	 * @access		public
	 * 
	 * @returns 
	*/
	// async obtenerPermisosUsuario() {		
	// 	const identity = JSON.parse(await this._storage.get('x-usuario'));

	// 	if (identity && identity !== undefined) {
	// 		if( identity.grupos ) {
	// 			return identity.grupos;
	// 		} else {
	// 			return null;
	// 		}
	// 	} else {
	// 		return null;
	// 	}
	// }
}
