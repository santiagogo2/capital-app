import { Component, Input, OnInit } from '@angular/core';

// Interfaces
import { Financiera } from 'src/app/interfaces';

@Component({
	selector: 'app-solicitudes-financiera',
	templateUrl: './solicitudes-financiera.component.html',
	styleUrls: ['./solicitudes-financiera.component.scss'],
})
export class SolicitudesFinancieraComponent implements OnInit {
	@Input() solicitudes_financiera: Financiera[] = [];

	constructor() {
	}
	
	ngOnInit() {}
}
