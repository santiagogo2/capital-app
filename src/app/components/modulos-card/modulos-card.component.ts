import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-modulos-card',
	templateUrl: './modulos-card.component.html',
	styleUrls: ['./modulos-card.component.scss'],
})
export class ModulosCardComponent implements OnInit {
	@Input() titulo_tarjeta: string = '';
	@Input() url_tarjeta: string = '/tabs/home';

	constructor() { }
	
	ngOnInit() {}

}
