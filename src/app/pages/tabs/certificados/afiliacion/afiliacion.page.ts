import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-afiliacion',
  templateUrl: './afiliacion.page.html',
  styleUrls: ['./afiliacion.page.scss'],
})
export class AfiliacionPage implements OnInit {
	tipo_certificado: number;
	usuario_seleccionado: string;

	constructor() { }
	
	ngOnInit() {
	}

	onSubmit(){}
}
