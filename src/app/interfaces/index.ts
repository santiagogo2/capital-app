export interface Financiera {
	descripcion: 		string,
	documento: 			string,
	estado: 			number,
	id: 				number,
	motivo: 			string,
	precontractual_id: 	number,
	tipo_certificado: 	number,
	created_by: 		string,
	createdAt?: 		string,
	updatedAt?: 		string,
}

export interface Usuario {
	tipo_documento: 	number,
	numero_documento: 	string,
	primer_nombre: 		string,
	segundo_nombre: 	string,
	primer_apellido: 	string,
	segundo_apellido: 	string,
	fecha_nacimiento: 	string,
	genero: 			number,
}

export interface Credenciales {
	nombre_usuario: string,
	password: 		string,
}

export interface OpcionMenu {
	icon: 	string,
	name: 	string,
	url: 	string,
}

export interface Subred {
	name: 		string,
	value:		string,
	hospitales: Hospital[]
}

export interface Hospital {
	name: string
}

export interface OpcionesCard {
	titulo: string,
	imagen: string,
	url: 	string,
}

export interface Autorizacion {
	usuario: Usuario,
	orden_medica: string,
	celular: string,
	telefono_fijo?: string,
	correo_electronico: string,
	municipio_residencia: string,
	departamento_residencia: string,
	direccion_residencia: string,
}