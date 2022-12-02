import { Component, OnInit } from '@angular/core';
import { OpcionesCard } from 'src/app/interfaces';

@Component({
  selector: 'app-autorizaciones',
  templateUrl: './autorizaciones.page.html',
  styleUrls: ['./autorizaciones.page.scss'],
})
export class AutorizacionesPage implements OnInit {
	opciones_autorizaciones: OpcionesCard[] = [
		{
			titulo: 'Solicitar Autorización',
			imagen: '/assets/avatars/av-1.png',
			url: 'solicitar',
		},
		{
			titulo: 'Consultar Autorización',
			imagen: '/assets/avatars/av-1.png',
			url: 'consultar',
		}
	]

	constructor() { }
	
	ngOnInit() {
	}

}
