import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../../environments/environment';

// Interfaces
import { Autorizacion } from '../../../../interfaces/index';

@Component({
	selector: 'app-solicitar',
	templateUrl: './solicitar.page.html',
	styleUrls: ['./solicitar.page.scss'],
})
export class SolicitarPage implements OnInit {
	autorizacion: Autorizacion = {
		usuario: {
			tipo_documento: 1,
			numero_documento: '1032462437',
			primer_nombre: 'Santiago',
			segundo_nombre: null,
			primer_apellido: 'Ramírez',
			segundo_apellido: 'Gaitán',
			fecha_nacimiento: '07/02/1994',
			genero: 1,
		},
		orden_medica: null,
		celular: null,
		telefono_fijo: null,
		correo_electronico: null,
		municipio_residencia: null,
		departamento_residencia: null,
		direccion_residencia: null,
	};
	documento_adjunto: string;
	environment = environment;

	constructor() { }
	
	ngOnInit() {
	}

	onSubmit( solicitarAutorizacionForm ) {

	}

}
