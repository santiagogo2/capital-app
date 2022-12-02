import { Component, OnInit } from '@angular/core';

// Interfaces
import { OpcionesCard } from 'src/app/interfaces';

@Component({
  selector: 'app-certificados',
  templateUrl: './certificados.page.html',
  styleUrls: ['./certificados.page.scss'],
})
export class CertificadosPage implements OnInit {
	opciones_autorizaciones: OpcionesCard[] = [
		{
			titulo: 'Certificado de afiliación',
			imagen: '/assets/avatars/av-1.png',
			url: 'afiliacion',
		},
	]

	constructor() { }
	
	ngOnInit() {
	}
}
