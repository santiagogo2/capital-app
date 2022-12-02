import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
	providedIn: 'root'
})
export class LoadingService {
	loading: any;

	constructor(
		private _loading_ctrl: LoadingController
	) {}

	async showLoading() {
		this.loading = await this._loading_ctrl.create({
			cssClass: 'custom-loading',
			mode: 'ios',
			showBackdrop: false,
			spinner: 'dots',
			translucent: true,
		});
	
		this.loading.present();
	}

	dismiss() {
		this.loading.dismiss();
	}
}
