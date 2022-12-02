import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

// Interfaces
import { Subred, Hospital } from 'src/app/interfaces';

// Servicios
import { DataService } from 'src/app/services/services.index';

@Component({
	selector: 'app-red-prestadora',
	templateUrl: './red-prestadora.page.html',
	styleUrls: ['./red-prestadora.page.scss'],
})
export class RedPrestadoraPage implements OnInit {
	subredes: Subred[] = [];
	hospitales: Hospital[] = [];
	subred_inicial: string;

	constructor(
		private _data_service: DataService
	) { }
	
	ngOnInit() {
		this.obtenerSubredes();
	}

	/**
	 * Metodo que obtiene las subredes integradas para cargarlas en la vista
	 * @name		obtenerSubredes
	 * @author		Santiago Ramirez Gaitan <santiagooo42@gmail.com>
	 * @version		1.0.0
	 * @access		public
	*/
	obtenerSubredes() {
		this._data_service.obtenerSubredes().subscribe(
			subredes => {
				this.subredes = [ ...subredes ];
				this.subred_inicial = this.subredes[0].value;
				this.hospitales = this.subredes[0].hospitales;
			}
		);	
	}

	segmentChanged( evento: Event ) {
		const subred_seleccionada = ( evento as CustomEvent ).detail.value;
		const subred = this.subredes.find( subred => subred.value === subred_seleccionada )

		if( subred ) {
			this.hospitales = subred.hospitales;
		} else {
			this.hospitales = [];
		}
	}
}
