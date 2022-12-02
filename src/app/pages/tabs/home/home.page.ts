import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

// Interfaces
import { OpcionMenu } from '../../../interfaces/index';

// Servicios
import { DataService } from 'src/app/services/services.index';

@Component({
	selector: 'app-home',
	templateUrl: './home.page.html',
	styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
	opciones_menu: Observable<OpcionMenu[]>;

	constructor(
		private _data_service: DataService
	) { }
	
	ngOnInit() {
		this.opciones_menu = this._data_service.obtenerMenuOpciones();
	}
}
