import { Component, Input, OnInit } from '@angular/core';

// Interfaces
import { OpcionesCard } from '../../interfaces/index';

@Component({
	selector: 'app-opciones-card',
	templateUrl: './opciones-card.component.html',
	styleUrls: ['./opciones-card.component.scss'],
})
export class OpcionesCardComponent implements OnInit {
	@Input() opciones_card: OpcionesCard[];

	constructor() { }
	
	ngOnInit() {}
}
