import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IonSlides, NavController } from '@ionic/angular';
import { environment } from 'src/environments/environment';

// Interfaces
import { Credenciales, Usuario } from 'src/app/interfaces';

// Servicios
import { LoadingService, UiServiceService, UserService } from 'src/app/services/services.index';

@Component({
	selector: 'app-login',
	templateUrl: './login.page.html',
	styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {	
	@ViewChild('slidePrincipal', {static: false}) slides: IonSlides;
	@ViewChild('registerSlides', {static: false}) register_slides: IonSlides;
	@ViewChild('progressbar') progressbar: ElementRef;

	environment = environment;
	prueba

	register_slide = {
		slidesPerView: 1
	}

	credenciales: Credenciales = {
		nombre_usuario: 'Santiagorg',
		password: 'Capital2022*'
	};

	
	usuario: Usuario = {
		tipo_documento: null,
		numero_documento: null,
		primer_nombre: null,
		segundo_nombre: null,
		primer_apellido: null,
		segundo_apellido: null,
		fecha_nacimiento: null,
		genero: null,
	}

	constructor(
		private _loading_service: LoadingService,
		private _nav_ctrl: NavController,
		private _ui_service: UiServiceService,
		private _user_service: UserService,
	) { }
	
	ngOnInit() {}
	
	ionViewDidEnter() {
		this.slides.lockSwipes( true );
		this.register_slides.lockSwipes( true );
	}
	
	/**
	 * Metodo que le permite al usuario avanzar en el registro
	 * @name 		avanzarRegistro
	 * @author		Santiago Ramirez Gaitan <santiagooo42@gmail.com>
	 * @version		1.0.0
	*/
	avanzarRegistro( numero_slide: number ) {
		this.register_slides.lockSwipes( false );
		this.register_slides.slideTo( numero_slide );
		this.register_slides.lockSwipes( true );
		let lista_secciones: any[] = this.progressbar.nativeElement.children;
		let index_activo = 0;
		for (let i = 0; i < lista_secciones.length; i++) {
			if( lista_secciones[i].className === 'active' ) {
				index_activo = i;
			}			
		}
		if( index_activo < lista_secciones.length ) {
			lista_secciones[index_activo+1].className = 'active';
		}
	}
	
	/**
	 * Metodo que controla el movimiento de los números ingresados por el usuario en el código de confirmación
	 * @name 		avanzarRegistro
	 * @author		Santiago Ramirez Gaitan <santiagooo42@gmail.com>
	 * @version		1.0.0
	*/
	controladorOpciones( event, next, prev ) {
		if( event.target.value.length < 1 && prev ) {
			prev.setFocus();
		} else if( next && event.target.value.length > 0 ) {
			next.setFocus();
		} else {
			return 0;
		}
	}
	
	/**
	 * Metodo que le permite al usuario regresar en el registro
	 * @name 		avanzarRegistro
	 * @author		Santiago Ramirez Gaitan <santiagooo42@gmail.com>
	 * @version		1.0.0
	*/
	regresarRegistro( numero_slide: number ) {
		this.register_slides.lockSwipes( false );
		this.register_slides.slideTo( numero_slide );
		this.register_slides.lockSwipes( true );
		let lista_secciones: any[] = this.progressbar.nativeElement.children;
		let index_activo = 0;
		for (let i = 0; i < lista_secciones.length; i++) {
			if( lista_secciones[i].className === 'active' ) {
				index_activo = i;
			}			
		}
		if( index_activo < lista_secciones.length ) {
			lista_secciones[index_activo].className = '';
		}
	}

	login( loginForm: NgForm ) {
		this._loading_service.showLoading();

		this._user_service.autenticarUsuario( this.credenciales ).subscribe(
			res => {
				this._user_service.guardarToken( res.token );
				this._user_service.obtenerIdentidadUsuario()
					.then( response => {
						loginForm.reset();
						this._loading_service.dismiss();
						this._nav_ctrl.navigateRoot( '/main/tabs/tab1', {
							animated: true,
						} );
					})
					.catch( error => {
						this._loading_service.dismiss();
						this._ui_service.alertaInformativa(error);
					});
			},
			error => {
				console.log(error);
				let message = 'Error. Por favor recargar la página.';
				if( error ) {
					if( error.error ) {
					message = error.error.message;
					}
					if (error.error.errors) {
					message = message + '. ' + JSON.stringify(error.error.errors);
					}
				}
				
				this._loading_service.dismiss();
				this._ui_service.alertaInformativa(message);
			}
		);
	}
	
	/**
	 * Metodo que realiza el cambio hacia el login desde el registro
	 * @name 		mostrarLogin
	 * @author		Santiago Ramirez Gaitan <santiagooo42@gmail.com>
	 * @version		1.0.0
	*/
	mostrarLogin() {
		this.slides.lockSwipes( false );
		this.slides.slideTo( 0 );
		this.slides.lockSwipes( true );
	}
	
	/**
	 * Metodo que realiza el cambio hacia el registro desde el login
	 * @name 		mostrarRegistro
	 * @author		Santiago Ramirez Gaitan <santiagooo42@gmail.com>
	 * @version		1.0.0
	*/
	mostrarRegistro() {
		this.slides.lockSwipes( false );
		this.slides.slideTo( 1 );
		this.slides.lockSwipes( true );
	}

	registrarse( registrarseForm: NgForm ) {

	}
}
