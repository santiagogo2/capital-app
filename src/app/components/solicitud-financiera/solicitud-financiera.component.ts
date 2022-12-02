import { Component, Input, OnInit } from '@angular/core';

// Interfaces
import { Financiera } from '../../interfaces';

@Component({
  selector: 'app-solicitud-financiera',
  templateUrl: './solicitud-financiera.component.html',
  styleUrls: ['./solicitud-financiera.component.scss'],
})
export class SolicitudFinancieraComponent implements OnInit {
	@Input() solicitud_financiera: Financiera;

	constructor() { }

	ngOnInit() {}

}
