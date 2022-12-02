// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
	production: false,
	url: 'http://localhost:4202/api/',
	tipos_documentos: [
		{ id: 1, name: 'Cédula de ciudadanía' },
		{ id: 2, name: 'Tarjeta de Identidad' },
		{ id: 3, name: 'Cédula de Extranjería' },
		{ id: 4, name: 'Registro Civil' },
		{ id: 5, name: 'Carné Diplomático' },
		{ id: 6, name: 'Pasaporte' },
		{ id: 7, name: 'Permiso Especial de Permanencia' },
		{ id: 8, name: 'NIT' },
		{ id: 9, name: 'Menor sin Identificar' },
		{ id: 10, name: 'Certificado Nacido no Vivo' },
	],
	genero: [
		{ id: 1, name: 'Femenino' },
		{ id: 2, name: 'Masculino' },
	],
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
