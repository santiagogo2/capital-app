import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { NgForm } from '@angular/forms';

// Interfaces
import { Usuario } from '../../../interfaces/index';

// Servicios
import { DataService } from 'src/app/services/services.index';

@Component({
	selector: 'app-mis-datos',
	templateUrl: './mis-datos.page.html',
	styleUrls: ['./mis-datos.page.scss'],
})

export class MisDatosPage implements OnInit {
	documento_adjunto: any;
	environment = environment;
	usuario: Usuario;

	constructor(
		public _data_service: DataService,
	) { }
	
	ngOnInit() {
		this.usuario = {
			tipo_documento: null,
			numero_documento: null,
			primer_nombre: null,
			segundo_nombre: null,
			primer_apellido: null,
			segundo_apellido: null,
			fecha_nacimiento: null,
			genero: null,
		}
	}

	onSubmit( informacionBasica: NgForm ){
		console.log(informacionBasica)
	}
}
