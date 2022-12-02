import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Storage } from '@ionic/storage-angular'

const URL = environment.url;

@Injectable({
  	providedIn: 'root'
})
export class StorageService {
	private storage: Storage | null = null;

	constructor(
		private _storage: Storage,
	) {
		this.init();
	}

	/**
	 * Limpia todas las variables del storage
	 * @name		clear
	 * @author		Santiago Ramirez Gaitan <santiagooo42@gmail.com>
	 * @version		1.0.0
	 * @access		public
	*/
	async clear(key: string) {
		await this.storage?.clear();
	}

	/**
	 * Obtiene una variable almacenada en el storage
	 * @name		get
	 * @author		Santiago Ramirez Gaitan <santiagooo42@gmail.com>
	 * @version		1.0.0
	 * @access		public
	 * 
	 * @param		{string} name
	 * @returns 
	*/
	async get(key: string) {
		const variable = await this.storage?.get(key);
		return variable;		
	}
	
	/**
	 * Inicializa las varibales iniciales para el funcionamiento del storage
	 * @name		init
	 * @author		Santiago Ramirez Gaitan <santiagooo42@gmail.com>
	 * @version		1.0.0
	 * @access		public
	 * 
	 * @returns 
	*/
	async init() {
		const storage = await this._storage.create();
    	this.storage = storage;
	}

	/**
	 * Elimina la variable ingresada por el usuario
	 * @name		remove
	 * @author		Santiago Ramirez Gaitan <santiagooo42@gmail.com>
	 * @version		1.0.0
	 * @access		public
	 * 
	 * @param		{string} key
	 * @returns 
	*/
	async remove(key: string) {
		await this.storage?.remove(key);
	}

	/**
	 * Guarda las variables ingresadas por el usuario en el storage
	 * @name		set
	 * @author		Santiago Ramirez Gaitan <santiagooo42@gmail.com>
	 * @version		1.0.0
	 * @access		public
	 * 
	 * @param		{string} key
	 * @param		{any} value 
	 * @returns 
	*/
	set(key: string, value: any) {
		this.storage?.set(key, value);
	}
}
