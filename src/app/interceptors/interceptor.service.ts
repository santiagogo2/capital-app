import { HttpEvent, HttpHandler, HttpRequest, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

// Servicios
import { Storage } from '@ionic/storage-angular'

@Injectable({
	providedIn: 'root'
})
export class InterceptorService {
	
	constructor(
		private _storage: Storage
	) {}
	
	/**
	 * Función obligatoria del componente que hace el manejo de los errores y agrega los headers a las peticiones
	 * @name		intercept
	 * @author		Santiago Ramirez Gaitan <santiagooo42@gmail.com>
	 * @version		1.0.0
	 * @access		public
	 * 
	 * @param 		{HttpRequest} req
	 * @param 		{HttpHandler} next
	 * 
	 * @returns 
	*/
	async intercept( req: HttpRequest<any>, next: HttpHandler): Promise<Observable< HttpEvent<any> >> {
		const token = await this._storage.get('x-token');
		const headers = new HttpHeaders({
			'x-token': token
		});
		
		let req_clone = req;
		if( token ) {
			req_clone = req.clone({
				headers
			});
		}
		return next.handle( req_clone ).pipe(
			catchError( this.manejarError )
		);
	}
	
	/**
	 * Función que maneja el error en todas las peticiones de la aplicación
	 * Se produce siempre un mensaje de error excepto cuando el servidor tenga la bandera secodary
	 * Cuando está activa la bandera secondary se maneja el mensaje de error con un alert en la vista
	 * @name		manejarError
	 * @author		Santiago Ramirez Gaitan <santiagooo42@gmail.com>
	 * @version		1.0.0
	 * @access		public
	 * 
	 * @param		{HttpErrorResponse} error
	 * 
	 * @returns 
	*/
	manejarError( error: HttpErrorResponse ) {
		console.log(error);

		return throwError('error');
	}
}
